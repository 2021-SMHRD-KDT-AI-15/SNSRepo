<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
</head>
<body>


 <a href = "Write.jsp">글쓰기</a><br>
 <br>
 <br>
 
 
<c:forEach items="${result}" var="board">
    <b>${board.content_id}</b>
    <b>제목</b><br>
    <b>${board.title}</b>
    <b>작성자</b><br>
    <b>${board.member_id}</b>
    <b>다운로드</b>
    <a href="" download>다운로드</a><br>
    <b>내용</b><br>
    <b>${board.content}</b><br>
    <img src="file/${board.attachment}" /> <br>
    <hr> <!-- 각 게시물 사이에 구분선을 추가 -->
</c:forEach>

<!-- Scripts -->
<!--
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/jquery.scrolly.min.js"></script>
<script src="assets/js/jquery.scrollex.min.js"></script>
<script src="assets/js/skel.min.js"></script>
<script src="assets/js/util.js"></script>
<script src="assets/js/main.js"></script>
-->
</body>
</html>