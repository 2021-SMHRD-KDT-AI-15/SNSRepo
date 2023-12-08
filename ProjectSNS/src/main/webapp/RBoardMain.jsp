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
<link rel="stylesheet" href="게시글-나오는곳.css" media="screen">
    <script class="u-script" type="text/javascript" src="jquery.js" defer=""></script>
    <script class="u-script" type="text/javascript" src="nicepage.js" defer=""></script>
    <meta name="generator" content="Nicepage 6.0.3, nicepage.com">
    <meta name="referrer" content="origin">
    
    <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i">
    
    <% 
        ArrayList<BoardDTO> content_list = (ArrayList<BoardDTO>) request.getAttribute("result");
        ArrayList<commentDTO> comment_list = (ArrayList<commentDTO>) request.getAttribute("c_result");%>
    
    
    
    
    
    
    
    
    
    
    
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
    <meta name="twitter:title" content="게시글 나오는곳">
    <meta name="twitter:description" content="">
    <meta property="og:title" content="게시글 나오는곳">
    <meta property="og:type" content="website">
  <meta data-intl-tel-input-cdn-path="intlTelInput/"></head>
  <body data-path-to-root="./" data-include-products="false" class="u-body u-xl-mode" data-lang="en"><header class="u-align-left u-clearfix u-header u-section-row-container" id="sec-0c53"><div class="u-section-rows">
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
          
            <% for (int i = 0; i <= 7; i++) { %>
            <!-- 각 게시물 내용 표시 -->
            <%if (i < 3 ){
            	System.out.println(content_list.get(i).getAttachment());
            	%>
         
        <div class="u-border-3 u-border-grey-30 u-expanded-width u-line u-line-horizontal u-line-1"></div>
        <div class="data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          
          
    
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-size-30-xl u-size-31-lg u-size-31-md u-size-31-sm u-size-31-xs">
                <div class="u-layout-col">
                  <div class="u-container-style u-layout-cell u-size-60 u-layout-cell-1">
                    <div class="u-container-layout u-container-layout-5">
                      <div class="u-carousel u-expanded-width u-gallery u-gallery-slider u-layout-carousel u-lightbox u-no-transition u-show-text-on-hover u-gallery-1" data-interval="5000" data-u-ride="carousel" id="carousel-c3e7">
                        <div class="u-carousel-inner u-gallery-inner" role="listbox">
                          <div class="u-active u-carousel-item u-effect-fade u-gallery-item u-carousel-item-1">
                            <div class="u-back-slide" data-image-width="1280" data-image-height="853">
                              <img class="u-back-image u-expanded" src="images/<%=content_list.get(i).getAttachment() %>">
                            </div>
                          </div>
                          <div class="u-carousel-item u-effect-fade u-gallery-item u-carousel-item-2">
                            <div class="u-back-slide" data-image-width="1280" data-image-height="835">
                              <img class="u-back-image u-expanded" src="images/2aebe2940643145a2d551d46a453c169a77f0265e5ff7ea39e26364fda169608508695b94b483e598ab2de2b4d6ac079389f0a830f2f62e9b4a89f_1280.jpg">
                            </div>
                            <div class="u-over-slide u-shading u-over-slide-2">
                              <h3 class="u-gallery-heading">Sample Title</h3>
                              <p class="u-gallery-text">Sample Text</p>
                            </div>
                          </div>
                          <div class="u-carousel-item u-effect-fade u-gallery-item u-carousel-item-3" data-image-width="1280" data-image-height="853">
                            <div class="u-back-slide">
                              <img class="u-back-image u-expanded" src="https://pixabay.com/get/g160fb496d50317b10040b840e7d82b7f13892e620f27325ec569799e3a985ddfecce6c43af029ba1b1c3481c0d73f92e2b521396f4ed337c360ba2b5f68cf9ba_1280.jpg">
                            </div>
                            <div class="u-over-slide u-shading u-over-slide-3"></div>
                            <style data-mode="XL"></style>
                            <style data-mode="LG" data-visited="true"></style>
                            <style data-mode="MD" data-visited="true"></style>
                            <style data-mode="SM"></style>
                            <style data-mode="XS"></style>
                          </div>
                          <div class="u-carousel-item u-effect-fade u-gallery-item u-carousel-item-4" data-image-width="1280" data-image-height="720">
                            <div class="u-back-slide">
                              <img class="u-back-image u-expanded" src="https://pixabay.com/get/g2baaf68ec1bdf0defd2b036718e5051a3fc789aff67eab2143c89309c1b5e73812d54c37111e59dabfbda6d20c4a15b497e628c18f72d08d770a6d78a804fde6_1280.jpg">
                            </div>
                            <div class="u-over-slide u-shading u-over-slide-4"></div>
                            <style data-mode="XL"></style>
                            <style data-mode="LG"></style>
                            <style data-mode="MD" data-visited="true"></style>
                            <style data-mode="SM"></style>
                            <style data-mode="XS"></style>
                          </div>
                          <div class="u-carousel-item u-effect-fade u-gallery-item u-carousel-item-5" data-image-width="1280" data-image-height="853">
                            <div class="u-back-slide">
                              <img class="u-back-image u-expanded" src="https://pixabay.com/get/ga1defc1898c6c22b0434e9128f017ce7d547465581630159ce3308e33f327eef6af0b269208a7dc11d882d639a0ed6c6d6be5488eddb0519dd2983ea12cf7613_1280.jpg">
                            </div>
                            <div class="u-over-slide u-shading u-over-slide-5"></div>
                            <style data-mode="XL"></style>
                            <style data-mode="LG"></style>
                            <style data-mode="MD" data-visited="true"></style>
                            <style data-mode="SM"></style>
                            <style data-mode="XS"></style>
                          </div>
                        </div>
                          <span aria-hidden="true">
                            <svg viewBox="0 0 451.847 451.847"><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"></path></svg>
                          </span>
                          <span class="sr-only">
                            <svg viewBox="0 0 451.847 451.847"><path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"></path></svg>
                          </span>
                        </a>
                          <span aria-hidden="true">
                            <svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path></svg>
                          </span>
                          <span class="sr-only">
                            <svg viewBox="0 0 451.846 451.847"><path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"></path></svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="u-size-29-lg u-size-29-md u-size-29-sm u-size-29-xs u-size-30-xl">
                <div class="u-layout-col">
                  <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                    <div class="u-container-layout u-container-layout-6">
                      <div class="custom-expanded u-table u-table-responsive u-table-1">
                        <table class="u-table-entity">
                          <colgroup>
                            <col width="19.7%">
                            <col width="80.3%">
                          </colgroup>
                          
                          
                          
                          
                          <tbody class="u-table-body">
                           <% for(int j = 0; j < comment_list.size()-2; j++){  %>
                            <%if(content_list.get(0).getContent_id() == Integer.parseInt(comment_list.get(j).getContent_id())){%>
                          <tr style="height: 44px;">
                              <td class="u-border-1 u-border-grey-dark-1 u-table-cell" >
                              댓글 입력자 : <%= comment_list.get(j).getComment_id() %>
                              </td>
                              <td class="u-border-1 u-border-grey-dark-1 u-table-cell">
                              댓글 내용<br>
                              <%= comment_list.get(j).getP_comment() %>
                              </td>
                            </tr>
                            <%} %>
                            <%} %>
		                <%} %>
		                
                             
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-3">
                    <div class="u-container-layout u-container-layout-7">
                      <div class="u-expanded-width u-form u-form-1">
                      
                      
                      
                      
                        <form action="commentDetail" class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="email" name="form" style="padding: 10px;">
                          <div class="u-form-group u-form-message">
                            <label for="message-6e23" class="u-label">댓글</label>
                            <textarea placeholder="댓글을 입력하세요" rows="4" cols="50" id="message-6e23" name="p_comment" class="u-input u-input-rectangle" required=""></textarea>
                          </div>
                          <div class="u-align-center u-form-group u-form-submit">
                            <input type="submit" value="댓글 작성" class="u-form-control-hidden">
                          </div>
                        </form>
                      
                      
                      
                      
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <% } // for문 닫히는 %>
							         <!-- Show more button -->
							    <button id="more" onclick="더보기()">더 보기</button>
        <a href="게시글-작성화면.html" class="u-border-2 u-border-custom-color-2 u-btn u-button-style u-custom-item u-hover-custom-color-2 u-none u-text-black u-text-hover-white u-btn-6">게시글 작성</a>
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