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
		<table>
			<td>
				<table border="1">
					<tr>
						<td colspan="6">개인 목록</td>
					</tr>
					<c:forEach var="p_list" items="${p_list}">
						<tr>
							<td>${p_list.name}</td>
							<td>${p_list.gender}</td>
							<td>${p_list.rating}</td>
							<td>${p_list.dis}</td>
							<td>
								<form action="Ptp_MatchRequestService">
								<input type="hidden" name="id" value=${p_list.member_id}>
								<input type="submit" value="매칭 신청">
								</form>
							</td>
						</tr>
					</c:forEach>
				</table>
			</td>
			
			<td>
				<table border="1">
					<tr>
						<td colspan="4">그룹 목록</td>
					</tr>
					<c:forEach var="g_list" items="${g_list}">
						<tr>
							<td>${g_list.group_id}</td>
							<td>${g_list.rating}</td>
							<td>${g_list.group_info}</td>
							<td>
								<form action="Ptg_MatchRequestService">
								<input type="hidden" name="id" value=${g_list.group_id}>
								<input type="submit" value="매칭 신청">
								</form>
							</td>
						</tr>
					</c:forEach>
				</table>
			</td>
		</table>
	</div>
	
	<script
    src="https://code.jquery.com/jquery-3.7.1.min.js"
    integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
    crossorigin="anonymous"></script>
	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/jquery.scrolly.min.js"></script>
	<script src="assets/js/jquery.scrollex.min.js"></script>
	<script src="assets/js/skel.min.js"></script>
	<script src="assets/js/util.js"></script>
	<script src="assets/js/main.js"></script>
	
	<script>
		let id = $(".member_id").text();
		$(".p_request").on("click", ()=>{
			request.setAttribute("id", id);
			RequestDispatcher rd = request.getRequestDispatcher("Ptp_MatchRequestService");
			rd.forward(request, response);
		})
	</script>
	
</body>
</html>