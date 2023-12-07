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


<body>
    <div id="content-list">
        <!-- 여기에 초기 게시물을 표시합니다. -->
        <% 
        ArrayList<BoardDTO> content_list = (ArrayList<BoardDTO>) request.getAttribute("result");
        ArrayList<commentDTO> comment_list = (ArrayList<commentDTO>) request.getAttribute("c_result");
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
                <b>댓글 작성자</b>
                <br>
                <b><%= comment_list.get(i).getComment_id() %></b>
                <b>댓글 내용</b>
                <br>
                <b><%= comment_list.get(i).getP_comment() %></b>
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
    <button id="more" onclick="더보기()">더 보기</button>
</body>
</html>
