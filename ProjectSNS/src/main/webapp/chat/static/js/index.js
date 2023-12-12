/* 사용자 ID */
var user = 'test1';
// var user = '<%= Session["user_ID"]%>';

/* 방 ID */
var room = 'room1';
// var room = '<%= Session["user_ID"]%>';

/* 서버 url */
var url = 'ws://127.0.0.1:3000?user='+user+'&room='+room;
var socket = new WebSocket(url);
var stop = true;

socket.onopen =function () {
	console.log('connection ok');
	socket.send('requestChatHistory');
};
socket.onclose =function () {
	console.log('connection fail');
};
socket.onmessage = function (response) {
	var msg = JSON.parse(response.data);
	// 메세지 타입 체크
    if (msg.type === 'beforList' && stop) {
        // 채팅기록 불러오기
        msg.chatHistory.forEach(function (historyMsg) {
            displayChatHistory(historyMsg);
        });

        // 기존 접속해 있는 유저 불러오기
        msg.users.forEach(function (beforUsr) {
            var usr = $('<div/>').attr({ id: beforUsr, class: 'members' }).text(beforUsr);
            $('#users').append(usr);
        });

        stop = false;
    } else {
        makeMsg(msg);
    }
}
/* 이전 채팅기록 로드하기*/
function displayChatHistory(historyMsg) {
    var cls = 'friendsMsg';
    if (historyMsg.fromUser === user) {
        cls = 'myMsg';
    }
    var child = $('<div/>').attr('class', cls).append(
        $('<span/>').text(historyMsg.fromUser),
        $('<span/>').text(' : ' + historyMsg.param),
        $('<br><small/>').text(' (' + historyMsg.timestamp.replace('T',' ').slice(0, -5) + ') '),
    );
    $('#console-container').append(child);
    $('#console-container').animate({
        scrollTop: $('#console-container').get(0).scrollHeight
    }, 10);
}

//들어온 메시지 표시 함수
function makeMsg(msg){
	console.log(msg);
	if(msg.type == 'beforList' && stop){ // 나보다 먼저 들어온 사용자 목록 불러오기
		msg.users.forEach(function(beforUsr){
			var usr = $('<div/>').attr({id:beforUsr,class:'members'}).text(beforUsr);
			$('#users').append(usr);
		});
		stop = false;
	} else{
		if(msg.type == 'welcome'){  // 등록
			var usr = $('<div/>').attr({id:msg.fromUser,class:'members'}).text(msg.fromUser);
			$('#users').append(usr);
		} else if(msg.type == 'bye'){  // 나감
			$('#'+msg.fromUser).remove();
		}
		var cls= 'friendsMsg';
		if(msg.fromUser == user){
			cls= 'myMsg';
		}
		var child = $('<div/>').attr('class',cls).append(
			$('<span/>').text(msg.fromUser),
			$('<span/>').text(' : '+msg.param),
            $('<br><small/>').text(' ('+yymmhhddss()+ ') ')
		);
		$('#console-container').append(child);
		$('#console-container').animate({
			scrollTop: $('#console-container').get(0).scrollHeight
		}, 10);
	}
}

// 시간 입력/표시 함수
function yymmhhddss(){
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var day = time.getDay();
    var hhmmss = ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2) + ":" + ("0" + time.getSeconds()).slice(-2);    
    if(month < 10){
        month = '0'+month;
    }
    if(day < 10){
        day = '0'+day;
    }    
    param = year + '-' + month + '-' + day + ' ' + hhmmss;
    return param;
}