<%@page import="sns.model.BoardDTO"%>
<%@page import="sns.model.commentDTO"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
    <title>Content List</title>
    <script>
        function showMore() {
            var moreItems = document.getElementsByClassName('hidden');
            for (var i = 0; i < moreItems.length; i++) {
                moreItems[i].style.display = 'block';
            }
          //  document.getElementById('more').style.display = 'none';
        }
    </script>
</head>


<body>
    <div id="content-list">
        <!-- 여기에 초기 게시물을 표시합니다. -->
        <% 
        ArrayList<BoardDTO> content_list = (ArrayList<BoardDTO>) request.getAttribute("result");
        for (int i = 0; i <= 7; i++) { %>
            <!-- 각 게시물 내용 표시 -->
            <% if (i < 3) { %>
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
            <% }else if(3<= i && i <= 5 ){ %>
                
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
                </div>
            <% }else if(6<= i && i <= 8 ){ %>
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
            </div> %>
        <% } %>
        <% } %>
    </div>

    <!-- Show more button -->
    <button id="more" onclick="showMore()">더 보기</button>
</body>
</html>
