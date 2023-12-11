//포트
const port = 3000;

// /* 오라클db 연결 */
const oracledb = require('oracledb')
oracledb.initOracleClient({libDir: 'C:\\instantclient_21_12'});

// /* 오라클 환경설정 */
const dbConfig = {
  user: 'service',
  password: '12345',
  connectString: 'localhost:1521/xe',
  externalAuth  : false,
  };

/* 설치한 express 모듈 불러오기 */
const express = require('express')
/* express 객체 생성 */
const app = express()
/* Websocket불러오기*/
const WebSocketServer = require('websocket').server;
/* Node.js 기본 내장 모듈 불러오기 */
const http = require('http');

/* 서버 생성 */
const server = http.createServer(function(request, response) {  //일반 HTTP 요청 처리
    console.log((new Date()) + ' Can not get information reqeust of http  ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(port, function() {
    console.log((new Date()) + ' Server is listening on port 3000');
});

/*웹소켓 서버 생성*/
const wsServer = new WebSocketServer({  
    httpServer: server,
    autoAcceptConnections: false
});
const rooms = new Map();  //채팅방 목록을 담을 객체
const requestType = {  //메시지 타입
    A:'welcome',
    B:'send',
    C:'bye',
    D:'beforList'
}
app.use('/css', express.static('./static/css'));
app.use('/js', express.static('./static/js'));

async function saveChatMessage(room, chatContent, chatDate, attachment, memberId) {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        console.log('OracleDB connected');

        const result = await connection.execute(
            `INSERT INTO CHAT_CONTENT (CHAT_ID, CHAT_CONTENT, CHAT_DATE, ATTACHMENT, MEMBER_ID) VALUES (:room, :chatContent, :chatDate, :attachment, :memberId)`,
            [room, chatContent, chatDate, attachment, memberId]
        );
        await connection.commit();
        console.log('Chat message saved successfully:', result);
    } catch (error) {
        console.log('Error saving chat message to OracleDB:', error);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (error) {
                console.log('Error closing OracleDB connection:', error);
            }
        }
    }
}

// ... (existing code)

async function sendBeforUserList(connection, room) {
    try {
        const beforList = [];
        for (const target of rooms.entries()) {
            if (room === target[1].room) {
                beforList.push(target[1].user);
            }
        }

        // Fetch chat history from the database
        const chatHistory = await getChatHistory(room);

        const response = JSON.stringify({
            param: '',
            users: beforList,
            chatHistory: chatHistory,
            type: requestType.D
        });

        connection.sendUTF(response);
    } catch (error) {
        console.log('Error fetching chat history:', error);
    }
}

async function getChatHistory(room) {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);
        console.log('OracleDB connected');

        const result = await connection.execute(
            `SELECT MEMBER_ID, CHAT_DATE, CHAT_CONTENT FROM CHAT_CONTENT WHERE CHAT_ID = :room ORDER BY CHAT_DATE`,
            [room]
        );

        return result.rows.map(row => ({
            fromUser: row[0],
            timestamp: row[1],
            param: row[2]
        }));
    } catch (error) {
        console.log('Error fetching chat history from OracleDB:', error);
        return [];
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (error) {
                console.log('Error closing OracleDB connection:', error);
            }
        }
    }
}

wsServer.on('request', async function(request) {
    const user = request.resourceURL.query.user;  // ID 
    const room = request.resourceURL.query.room;  // 방 번호
    if( NUL(user) || NUL(room)){
        return;
    }

    var connection = request.accept();   // 들어온 커넥션 객체
    await sendBeforUserList(connection, room); // 이미 들어와있는 사용자 목록을 전송
    
    rooms.set(user,{user:user, room:room, con:connection});  //방 목록에 자신 추가

    msgSender(rooms.get(user), null, requestType.A);  // 로그인 타입으로 메시지 전송

    connection.on('message', function(message) {  // 채팅메시지가 도달하면
        if (message.type === 'utf8') {
            const chatContent = message.utf8Data;
            const chatDate = new Date().toISOString();
            const attachment = ''; // You may modify this based on your application
            const memberId = /*identify.*/user;
    
            // Save the chat message to OracleDB
            saveChatMessage(room, chatContent, chatDate, attachment, memberId);
    
            // Send the chat message to other users in the room
            msgSender(rooms.get(user), message, requestType.B);
        }
    });

    connection.on('close', function(reasonCode, description) {   // 커넥션이 끊기면
        msgSender(rooms.get(user), null, requestType.C).then((callbak)=>{  // 방에서 나가는 메세지
            rooms.delete(user);  // 방 ID 목록에서 삭제
        }).catch((err)=>{
            console.log(err);
        });
    });
});

//파라미터 확인용 함수
function NUL(obj){
    if(obj == undefined || obj == null || obj.length == 0){
        return true;
    }
    return false;
}

//메시지를 보내는 함수
function msgSender(identify, message, type){
    return new Promise((resolve, reject)=>{
        for(let target of rooms.entries()) {  //방 목록 객체를 반복문을 활용해 발송
            if(identify.room == target[1].room){  //같은방에 있는 사람이면 전송
                //타입별 전송 구간(최초접속,메시지전송,방나감)
                if (type == requestType.A ) {  
                    var res = JSON.stringify({param:'님이 채팅방에 입장하였습니다',fromUser:identify.user, type:type});
                    target[1].con.sendUTF(res);
                } else if (type == requestType.B && message.type === 'utf8') {
                    var res = JSON.stringify({param:message.utf8Data,fromUser:identify.user, type:type});
                    target[1].con.sendUTF(res);
                } else if (type == requestType.C) {
                    var res = JSON.stringify({param:'채팅방을 나갔습니다',fromUser:identify.user, type:type});
                    target[1].con.sendUTF(res);
                }
            }
        }
        resolve('succ');        
    });    
}