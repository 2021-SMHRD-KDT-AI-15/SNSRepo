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
<script src="./js/index.js"></script>
<link rel="stylesheet" href="./css/index.css">

<body>

<!-- 채팅값이 들어가는 테그 -->	
<div id="console-container" >

</div>
<div id='users'> </div>

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
	

</script>