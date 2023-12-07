<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="sns.model.MatchDTO" isELIgnored="false"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	
	<%String user_id = (String) session.getAttribute("user_id"); %>
	
	<h1>매칭 신청 목록</h1>
	
	<table border="1">
		<c:forEach var="ptp_list" items="${ptp_list}">
			<tr>
				<td>${ptp_list.name}</td>
				<td>${ptp_list.gender}</td>
				<td>${ptp_list.dis}</td>
				<td>${ptp_list.rating}</td>
				<td>
					<form action=ReqAcceptService>
					<input type="hidden" name="ptp_id" value=${ptp_list.member_id}>
					<input type="submit" value="수락">
					</form>
				</td>
				<td>
					<form action="ReqDeniedService">
					<input type="hidden" name="ptp_id" value=${ptp_list.member_id}>
					<input type="submit" value="거부">
					</form>
				</td>
			</tr>
		</c:forEach>
		
		<c:forEach var="gtp_list" items="${gtp_list}">
			<tr>
				<td colspan="2">${gtp_list.group_id}</td>
				<td>${gtp_list.group_info}</td>
				<td>${gtp_list.rating}</td>
				<td>
					<form action="ReqAcceptService">
					<input type="hidden" name="gtp_id" value=${gtp_list.group_id}>
					<input type="submit" value="수락">
					</form>
				</td>
				<td>
					<form action="ReqDeniedService">
					<input type="hidden" name="gtp_id" value=${gtp_list.group_id}>
					<input type="submit" value="거부">
					</form>
				</td>
			</tr>
		</c:forEach>
	</table>
	
</body>
</html>