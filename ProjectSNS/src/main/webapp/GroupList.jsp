<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" import="sns.model.MatchDTO" isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html style="font-size: 16px;" lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="utf-8">
<meta name="keywords" content="Gather up!!">
<meta name="description" content="">
<title>GroupList</title>
<link rel="stylesheet" href="nicepage.css" media="screen">
<link rel="stylesheet" href="GroupList.css" media="screen">
<script class="u-script" type="text/javascript" src="jquery.js" defer=""></script>
<script class="u-script" type="text/javascript" src="nicepage.js"
	defer=""></script>
<meta name="generator" content="Nicepage 6.0.3, nicepage.com">
<meta name="referrer" content="origin">
<link id="u-theme-google-font" rel="stylesheet"
	href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i">
<script type="application/ld+json">{
		"@context": "http://schema.org",
		"@type": "Organization",
		"name": "",
		"sameAs": [
				"https://facebook.com/name",
				"https://twitter.com/name",
				"https://www.instagram.com/name"
		]
	}</script>
<meta name="theme-color" content="#478ac9">
<meta name="twitter:site" content="@">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="GroupList">
<meta name="twitter:description" content="">
<meta property="og:title" content="GroupList">
<meta property="og:type" content="website">
<meta data-intl-tel-input-cdn-path="intlTelInput/">
</head>

<body data-path-to-root="./" data-include-products="false"
	class="u-body u-xl-mode" data-lang="en">
	<header
		class="u-align-left u-clearfix u-header u-section-row-container"
		id="sec-0c53">
		<div class="u-section-rows">
			<div class="u-custom-color-2 u-section-row u-section-row-1"
				id="sec-46aa">
				<div class="u-clearfix u-sheet u-sheet-1">
					<div class="u-social-icons u-spacing-10 u-social-icons-1">
						<a class="u-social-url" title="facebook" target="_blank"
							href="https://facebook.com/name"><span
							class="u-icon u-social-facebook u-social-icon u-icon-1"><svg
									class="u-svg-link" preserveAspectRatio="xMidYMin slice"
									viewBox="0 0 112 112" style="">
									<use xmlns:xlink="http://www.w3.org/1999/xlink"
										xlink:href="#svg-96b6"></use></svg>
								<svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0"
									id="svg-96b6">
									<circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle>
									<path fill="#FFFFFF"
										d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
      c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"></path></svg></span>
						</a> <a class="u-social-url" title="twitter" target="_blank"
							href="https://twitter.com/name"><span
							class="u-icon u-social-icon u-social-twitter u-icon-2"><svg
									class="u-svg-link" preserveAspectRatio="xMidYMin slice"
									viewBox="0 0 112 112" style="">
									<use xmlns:xlink="http://www.w3.org/1999/xlink"
										xlink:href="#svg-1640"></use></svg>
								<svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0"
									id="svg-1640">
									<circle fill="currentColor" class="st0" cx="56.1" cy="56.1"
										r="55"></circle>
									<path fill="#FFFFFF"
										d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
      c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
      c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
      c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
      c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"></path></svg></span>
						</a> <a class="u-social-url" title="instagram" target="_blank"
							href="https://www.instagram.com/name"><span
							class="u-icon u-social-icon u-social-instagram u-icon-3"><svg
									class="u-svg-link" preserveAspectRatio="xMidYMin slice"
									viewBox="0 0 112 112" style="">
									<use xmlns:xlink="http://www.w3.org/1999/xlink"
										xlink:href="#svg-ad97"></use></svg>
								<svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0"
									id="svg-ad97">
									<circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle>
									<path fill="#FFFFFF"
										d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
      z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"></path>
									<path fill="#FFFFFF"
										d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"></path>
									<path fill="#FFFFFF"
										d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
      C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
      c5.5,0,9.9,4.5,9.9,9.9V73.3z"></path></svg></span>
						</a>
					</div>
					<form action="#" method="get"
						class="custom-expanded u-border-1 u-border-black u-radius u-search u-search-right u-search-1">
						<button class="u-search-button" type="submit">
							<span class="u-search-icon u-spacing-10 u-text-black"> <svg
									class="u-svg-link" preserveAspectRatio="xMidYMin slice"
									viewBox="0 0 56.966 56.966" style="">
									<use xmlns:xlink="http://www.w3.org/1999/xlink"
										xlink:href="#svg-9dab"></use></svg> <svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
									id="svg-9dab" x="0px" y="0px" viewBox="0 0 56.966 56.966"
									style="enable-background: new 0 0 56.966 56.966;"
									xml:space="preserve" class="u-svg-content">
									<path
										d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g>
									<g></g></svg>
							</span>
						</button>
						<input
							class="u-custom-font u-heading-font u-search-input u-text-black u-search-input-1"
							type="search" name="search" value="" placeholder="Search">
					</form>
				</div>
			</div>
			<div
				class="u-border-5 u-border-custom-color-2 u-border-no-left u-border-no-right u-border-no-top u-section-row u-sticky u-sticky-5c67 u-white u-section-row-2"
				id="sec-37e8">
				<div class="u-clearfix u-sheet u-sheet-2">
					<h1 class="u-custom-font u-text u-text-default u-text-1">
						<a
							class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-black u-btn-1"
							href="게시글-나오는곳.html">Gather up!!</a>
					</h1>
					<% String user_id = (String) session.getAttribute("user_id"); %>
					<p class="u-text u-text-default u-text-2"><a href="ProfileService"><%=user_id %>님 환영합니다.</a></p>
					<a href="BoardDetail"
						class="u-border-2 u-border-black u-btn u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-2">메인</a>
					<a href="FriendListService"
						class="u-border-2 u-border-black u-btn u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-3">친구/그룹</a>
					<a href="MatchListService"
						class="u-border-2 u-border-black u-btn u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-4">매칭</a>
					<a href="map.html"
						class="u-border-2 u-border-black u-btn u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-5">지도</a>
				</div>
			</div>
		</div>
	</header>
	
	<section class="scroll u-clearfix u-white u-section-1" id="sec-3939">
		<div class="u-clearfix u-sheet u-sheet-1">
			<a href="FriendListService"
				class="u-border-none u-btn u-button-style u-custom-color-3 u-btn-1">친구
				목록</a> <a href="GroupListService"
				class="u-border-none u-btn u-button-style u-custom-color-3 u-btn-2">그룹
				목록</a> <a href="GroupMaking.jsp"
				class="u-border-none u-btn u-button-style u-custom-color-3 u-btn-3">그룹
				생성</a>
			<div
				class="u-border-3 u-border-custom-color-3 u-line u-line-horizontal u-line-1"></div>
			<div class="u-expanded-width u-list u-list-1">
				<div class="u-repeater u-repeater-1">
					<c:forEach var="group_list" items="${group_list}">
						<div
							class="u-border-2 u-border-custom-color-3 u-container-style u-list-item u-repeater-item">
							<div
								class="u-container-layout u-similar-container u-valign-top u-container-layout-1">
								<h3 class="u-align-center u-text u-text-default u-text-1">${group_list.group_id}</h3>
								<div
									class="u-border-4 u-border-custom-color-3 u-expanded-width u-line u-line-horizontal u-line-2"></div>
								<div alt=""
									class="u-expanded-width u-image u-image-circle u-image-2"
									data-image-width="1280" data-image-height="1280"></div>
								<p class="u-align-center u-text u-text-default u-text-2">${group_list.group_info}</p>
								<form action="GroupMainService">
									<input type="hidden" name="group_id"
										value=${group_list.group_id}> <input
										class="u-border-none u-btn u-button-style u-custom-color-3 u-btn-4"
										type="submit" value="입장">
								</form>
							</div>
						</div>
					</c:forEach>
				</div>
			</div>
		</div>
	</section>













	<footer class="u-align-center u-clearfix u-footer u-grey-80 u-footer"
		id="sec-78d4">
		<div class="u-clearfix u-sheet u-sheet-1">
			<p class="u-small-text u-text u-text-variant u-text-1">
				인공지능 융합서비스<br>개발자 과정(NCS) 15차<br>1차 프로젝트<br>SNS하고 싶조<br>김연재,
				정유석, 정명훈, 최준성
			</p>
		</div>
	</footer>
	<section class="u-backlink u-clearfix u-grey-80">
		<a class="u-link" href="https://nicepage.com/templates"
			target="_blank"> <span>Templates</span>
		</a>
		<p class="u-text">
			<span>created with</span>
		</p>
		<a class="u-link" href="https://nicepage.studio" target="_blank">
			<span>Best Free Website Builder</span>
		</a>.
	</section>

</body>
</html>