<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
 <meta charset="utf-8">
 <meta http-equiv="cache-control" content="no-cache">
 <meta http-equiv="pragma" content="no-cache"> 
 <meta http-equiv="expires" content="0">
 <meta http-equiv="X-UA-Compatible" content="IE=10" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>websocket</title>
</head>

<script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>	
<!-- <script src="./js/index.js"></script> -->
<link rel="stylesheet" href="./css/index.css">

<body>

<!-- 채팅값이 들어가는 테그 -->	
<div id="console-container" >

</div>
<div id='users'> </div>
<% String user_id = (String) session.getAttribute("user_id"); %>
<p id="user_id"><%= user_id%></p>
<!-- 인풋 박스 -->
<p>
<div>
  <input type="text" placeholder="메세지를 입력하세요" id="chat" onkeyup="nullexception()">
  <input type="button" value='전송' id="clicker" disabled>
</div><br><br>
</body>
</html>


<script type="application/javascript">
	/* ENTER/CLICK 시 메세지 박스 초기화 */
	$('#chat').keydown(function(event){
		if(event.keyCode == 13){
			var value = $(this).val();
			socket.send(value);
			setTimeout(function() {
		$('#chat').val('');
		}, 0);
		}
	});

	$('#clicker').click(function(){
		var value = $('#chat').val();
		socket.send(value);
		setTimeout(function() {
		$('#chat').val('');
		}, 0)
	});

	/* 빈칸일때 전송 안되게 */
	function nullexception() {
	 if(document.getElementById("chat").value==="") { 
            document.getElementById('clicker').disabled = true; 
        } else { 
            document.getElementById('clicker').disabled = false;
        }
    }
	
	/* 사용자 ID */
var user = document.getElementById('user_id').innerHTML;
/* 방 ID */
var room = 'room1';

/* 서버 url */
var url = 'ws://220.93.169.124:3000?user='+user+'&room='+room;
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
</script>
