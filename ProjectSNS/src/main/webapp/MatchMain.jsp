<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="MatchService">
		<li>남<input type="checkbox" name="gender" value="남"> 여<input type="checkbox" name="gender" value="여">
		<li><input type="number" name="rating_person">
		<li><input type="text" name="area">
		<li>
		축구<input type="radio" name="interest" value="soccer">
		야구<input type="radio" name="interest" value="baseball">
		농구<input type="radio" name="interest" value="basketball">
		배구<input type="radio" name="interest" value="vollyball">
		보드게임<input type="radio" name="interest" value="boardgame">
		<li><input type="submit">
	</form>
</body>
</html>