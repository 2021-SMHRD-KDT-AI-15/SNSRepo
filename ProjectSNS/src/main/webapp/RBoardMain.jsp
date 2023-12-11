<%@page import="sns.model.BoardDTO"%>
<%@page import="sns.model.commentDTO"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html style="font-size: 16px;" lang="en"><head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <meta name="keywords" content="gather up!">
    <meta name="description" content="">
    <title>게시글 나오는곳</title>
    <link rel="stylesheet" href="nicepage.css" media="screen">
<link rel="stylesheet" href="RBoardMain.css" media="screen">
    <script class="u-script" type="text/javascript" src="jquery.js" defer=""></script>
    <script class="u-script" type="text/javascript" src="nicepage.js" defer=""></script>
    <meta name="generator" content="Nicepage 6.0.3, nicepage.com">
    <meta name="referrer" content="origin">
    
    <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i">
    
    
    
    
    
    
    
    
    
    
    
    
    
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
    <meta name="twitter:title" content="RBoardMain">
    <meta name="twitter:description" content="">
    <meta property="og:title" content="RBoardMain">
    <meta property="og:type" content="website">
  <meta data-intl-tel-input-cdn-path="intlTelInput/">
  
  <style type="text/css">
  
  #g_bt {
    position: fixed;
    right: 0px;
    bottom: 0px;
}

.js-load {
	display: none;
}
.js-load.active {
	display: block;
}
.js-load:after {
	display: none;
}
.btn-wrap {
	display: block;
}
ul.menu li { list-style:none;  position:relative; float:left; width:calc(100%/3 - 12px); margin:12px 6px 0; }
.more {width:100%; line-height:30px; color:#72af2c;font-size:18px;font-weight:700;text-align:center;border:1px solid #72af2c;border-radius:6px;display:block;}

  </style>
  
   <script>
    let 시작인덱스 = 0; // 컨텐츠 표시를 시작할 인덱스를 초기화합니다.

    function 더보기() {
        const 게시글들 = document.querySelectorAll('.hidden');
        
        for (let i = 시작인덱스; i < 시작인덱스 + 3 && i < 게시글들.length; i++) {
            게시글들[i].style.display = 'block';
        }

        시작인덱스 += 3; // 다음 컨텐츠를 위해 시작 인덱스를 업데이트합니다.
    }
</script>
  
  
  
  </head>
  <body data-path-to-root="./" data-include-products="false" class="u-body u-xl-mode" data-lang="en"><header class="u-align-left u-clearfix u-header u-section-row-container" id="sec-0c53"><div class="u-section-rows" style="margin-bottom: 0px;">
        <div class="u-custom-color-2 u-section-row u-section-row-1" id="sec-46aa">
          <div class="u-clearfix u-sheet u-sheet-1">
            <div class="u-social-icons u-spacing-10 u-social-icons-1">
              <a class="u-social-url" title="facebook" target="_blank" href="https://facebook.com/name"><span class="u-icon u-social-facebook u-social-icon u-icon-1"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-96b6"></use></svg><svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-96b6"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
      c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"></path></svg></span>
              </a>
              <a class="u-social-url" title="twitter" target="_blank" href="https://twitter.com/name"><span class="u-icon u-social-icon u-social-twitter u-icon-2"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-1640"></use></svg><svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-1640"><circle fill="currentColor" class="st0" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
      c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
      c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
      c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
      c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"></path></svg></span>
              </a>
              <a class="u-social-url" title="instagram" target="_blank" href="https://www.instagram.com/name"><span class="u-icon u-social-icon u-social-instagram u-icon-3"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112 112" style=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-ad97"></use></svg><svg class="u-svg-content" viewBox="0 0 112 112" x="0" y="0" id="svg-ad97"><circle fill="currentColor" cx="56.1" cy="56.1" r="55"></circle><path fill="#FFFFFF" d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
      z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"></path><path fill="#FFFFFF" d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"></path><path fill="#FFFFFF" d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
      C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
      c5.5,0,9.9,4.5,9.9,9.9V73.3z"></path></svg></span>
              </a>
            </div>
            <form action="#" method="get" class="custom-expanded u-border-1 u-border-black u-radius u-search u-search-right u-search-1">
              <button class="u-search-button" type="submit">
                <span class="u-search-icon u-spacing-10 u-text-black">
                  <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 56.966 56.966" style=""><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-9dab"></use></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="svg-9dab" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" class="u-svg-content"><path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                </span>
              </button>
              <input class="u-custom-font u-heading-font u-search-input u-text-black u-search-input-1" type="search" name="search" value="" placeholder="Search">
            </form>
          </div>
          
          
          
          
          
        </div>
        <div class="u-border-5 u-border-custom-color-2 u-border-no-left u-border-no-right u-border-no-top u-section-row u-sticky u-sticky-5c67 u-white u-section-row-2" id="sec-37e8">
          <div class="u-clearfix u-sheet u-sheet-2">
            <h1 class="u-custom-font u-text u-text-default u-text-1">
              <a class="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-black u-btn-1" href="게시글-나오는곳.html">Gather up!!</a>
            </h1>
            <p class="u-text u-text-default u-text-2">버튼 아이콘으로 대체할 예정</p>
            <a href="https://nicepage.com/c/tiles-website-templates" class="u-border-2 u-border-black u-btn u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-2">Button</a>
            <a href="https://nicepage.com/c/tiles-website-templates" class="u-border-2 u-border-black u-btn u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-3">Button</a>
            <a href="https://nicepage.com/c/tiles-website-templates" class="u-border-2 u-border-black u-btn u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-4">Button</a>
            <a href="https://nicepage.com/c/tiles-website-templates" class="u-border-2 u-border-black u-btn u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-5">Button</a>
          </div>
          
          
          
          
          
        </div>
      </div></header>
    <section class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-clearfix u-section-1" id="sec-1c29">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="custom-expanded u-list u-list-1">
          <div class="u-repeater u-repeater-1">
            <div class="u-container-style u-list-item u-repeater-item u-shape-rectangle">
              <div class="u-container-layout u-similar-container u-container-layout-1">
                <a href="https://nicepage.com/joomla-templates" class="u-border-none u-btn u-btn-round u-button-style u-custom-color-2 u-custom-item u-hover-custom-color-4 u-radius u-btn-1">전체</a>
              </div>
            </div>
            <div class="u-container-style u-list-item u-repeater-item u-shape-rectangle">
              <div class="u-container-layout u-similar-container u-container-layout-2">
                <a href="https://nicepage.com/joomla-templates" class="u-border-none u-btn u-btn-round u-button-style u-custom-color-2 u-custom-item u-hover-custom-color-4 u-radius u-btn-2">트렌딩</a>
              </div>
            </div>
            <div class="u-container-style u-list-item u-repeater-item u-shape-rectangle">
              <div class="u-container-layout u-similar-container u-container-layout-3">
                <a href="https://nicepage.com/joomla-templates" class="u-border-none u-btn u-btn-round u-button-style u-custom-color-2 u-custom-item u-hover-custom-color-4 u-radius u-btn-3">친구/그룹</a>
              </div>
            </div>
            <div class="u-container-style u-list-item u-repeater-item u-shape-rectangle">
              <div class="u-container-layout u-similar-container u-container-layout-4">
                <a href="https://nicepage.com/joomla-templates" class="u-border-none u-btn u-btn-round u-button-style u-custom-color-2 u-custom-item u-hover-custom-color-4 u-radius u-btn-4">종목별</a>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <%ArrayList<BoardDTO> content_list = (ArrayList<BoardDTO>) request.getAttribute("result");
        ArrayList<commentDTO> comment_list = (ArrayList<commentDTO>) request.getAttribute("c_result");
        HttpSession session2 = request.getSession(); 
    	Object user_id = session2.getAttribute("user_id");
        %>

        <!-- 각 게시물 내용 표시  7값 나중에 숫자 따로 줘서 바꿔줘야해!!-->
		<%for (int i = 0; i <= 7; i++) { %>
            <!-- 각 게시물 내용 표시 -->
            <% if (i < 3) { %>
        <b style="display: block; text-align: center;" ><%= content_list.get(i).getTitle() %> </b><br>
        <div style="text-align: center;">
        <img src="images/<%= content_list.get(i).getAttachment() %>" style="display: block; margin: 0 auto;">
        </div>
        <hr>
        <div>
          <div style="display: block; text-align: center;">
          <div style="display: block; text-align: right;">
           <b> 작성자 : </b> <b><%= content_list.get(i).getMember_id() %></b>
           </div>
           <p><%= content_list.get(i).getContent() %> </p>
          </div>
        </div>
        <div>
        <hr>
				<div>
				<%
				int con_id = content_list.get(i).getContent_id();
				
				for (int j = 0; j < comment_list.size() - 2; j++) {
				    if (comment_list.get(j) != null) { // null 체크 추가
				        int co_id = Integer.parseInt(comment_list.get(j).getContent_id());
				        if (con_id == co_id) { %>
				            <b><%= comment_list.get(j).getComment_id() %> : <%= comment_list.get(j).getP_comment() %> </b>
				            <hr>
				        <% } 
				    }
				}%> 
				<div>
				
						<form action="commentDetail" method="post" style="text-align: center;">
					    <div style="display: inline-block; text-align: left;">
					        <input type="hidden" name="content_id" value="<%= content_list.get(i).getContent_id() %>"><br>
					        <input type="hidden" name="member_id" value="<%= user_id %>"><br>
					        <input type="text" name="comment_id"><br>
					            <input type="text" name="p_comment"><br>
					        <div style="text-align: center;">
					            <input type="submit" value="댓글작성"><br>
					        </div>
					    </div>
					</form>
				</div>
            <hr>
            <%}else if(3<= i && i <= 5 ){ %>
                <div class="hidden" style="display: none;">
                      <b style="display: block; text-align: center;" ><%= content_list.get(i).getTitle() %> </b><br>
        <div style="text-align: center;">
        <img src="images/<%= content_list.get(i).getAttachment() %>" style="display: block; margin: 0 auto;">
        </div>
         <div>
          <div style="display: block; text-align: center;">
          <div style="display: block; text-align: right;">
           <b> 작성자 : </b> <b><%= content_list.get(i).getMember_id() %></b>
           </div>
           <p><%= content_list.get(i).getContent() %> </p>
          </div>
        </div>
               <hr>
               </div>
                
                
                
            <%}else if(6<= i && i <= 8 ){ %>
            <div class="hidden" style="display: none;">
            <b>제목</b>
            <b id="title_<%= i %>"><%= content_list.get(i).getTitle() %></b>
            <b>작성자</b>
            <br>
            <b id="member_id_<%= i %>"><%= content_list.get(i).getMember_id() %></b>
            <b>다운로드</b>
            <a href="" download>다운로드</a>
            <br>
            <b>내용</b>
            <br>
            <b id="content_<%= i %>"><%= content_list.get(i).getContent() %></b>
            <br>
            <img src="file/<%= content_list.get(i).getAttachment() %>" />
            <br>
            <b>테스트</b>
            <b id="test_<%= i %>">123</b>
            <hr>
        </div><%}} %>

				</div>
        <a href="WriteMain.jsp" class="u-border-2 u-border-custom-color-2 u-btn u-button-style u-custom-item u-hover-custom-color-2 u-none u-text-black u-text-hover-white u-btn-5" id = "g_bt">게시글 작성</a>
         <button id="more" onclick="더보기()">더 보기</button>
      </div>
    </section>
   
    

    
    <footer class="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-78d4"><div class="u-clearfix u-sheet u-sheet-1">
        <p class="u-small-text u-text u-text-variant u-text-1">인공지능 융합서비스<br>개발자 과정(NCS) 15차<br>1차 프로젝트<br>SNS하고 싶조<br>김연재, 정유석, 정명훈, 최준성
        </p>
      </div></footer>
    <section class="u-backlink u-clearfix u-grey-80">
      <a class="u-link" href="https://nicepage.com/website-mockup" target="_blank">
        <span>Website Mockup</span>
      </a>
      <p class="u-text">
        <span>created with</span>
      </p>
      <a class="u-link" href="" target="_blank">
        <span>Web Design Software</span>
      </a>. 
    </section>
  
</body></html>