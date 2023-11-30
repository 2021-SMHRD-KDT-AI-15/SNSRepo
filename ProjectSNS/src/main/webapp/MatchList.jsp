<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="sns.model.MatchDTO" isELIgnored="false"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>매칭 리스트</title>
	<meta charset="utf-8" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
	<div>
		<table border="1">
			<tr>
				<td colspan="4">개인 매칭</td>
			</tr>
			<c:forEach var="list" items="${list}">
				<tr>
					<td>${list.name}</td>
					<td>${list.gender}</td>
					<td>${list.rating_person}</td>
					<td>${list.dis}</td>
				</tr>
			</c:forEach>
		</table>
	</div>
	
	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/jquery.scrolly.min.js"></script>
	<script src="assets/js/jquery.scrollex.min.js"></script>
	<script src="assets/js/skel.min.js"></script>
	<script src="assets/js/util.js"></script>
	<script src="assets/js/main.js"></script>
</body>
</html>