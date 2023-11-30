<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	
	
	<form action ="WriteService" method="post" enctype="multipart/form-data">
	<table border="1">
		<tr>
		<td>member_id</td>
		<td><input type="text" name="member_id"></td>
		</tr>
		
		<tr>
			<td>제목</td>
			<td><input type="text" name = "title"></td>	
		</tr>	
		<tr>
			<td colsapn="2">내용</td>
		</tr>
		<tr>
			<td colspan="2">
			<textarea name = "content" rows="5" style="resize: none"></textarea>
			</td>
		</tr>
		<tr>
			<td>
				<input type="submit" value="작성하기">
				<input type="file" name ="attachment">
			</td>
		</tr>
		<tr>
		<td>like_count</td>
		<td><input type="text" name="like_count"></td>
		</tr>
	</table>
	<input type="submit">
	</form>

</body>
</html>