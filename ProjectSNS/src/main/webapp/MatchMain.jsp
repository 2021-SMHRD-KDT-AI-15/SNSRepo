<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<%session.setAttribute("user_id", "ID1");%>

	<form action="MatchListService">
		<li>남<input type="checkbox" name="gender" value="남"> 여<input type="checkbox" name="gender" value="여">
		<li><input type="text" name="area" value="광주 남구">
		<li>
			<select name="interest">
				<option value="soccer">축구</option>	
				<option value="baseball">야구</option>	
				<option value="basketball">농구</option>	
				<option value="vollyball">배구</option>	
				<option value="boardgame">보드게임</option>	
			</select>
		<li><input type="submit" value="찾기">
	</form>
</body>
</html>