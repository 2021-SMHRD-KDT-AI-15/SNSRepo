package sns.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sns.model.commentDAO;
import sns.model.commentDTO;

@WebServlet("/commentDetail")
public class commentDetail extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("UTF-8");

		String content_id = request.getParameter("content_id");
		String comment_id = request.getParameter("comment_id");
		String member_id = request.getParameter("member_id");
		String p_comment = request.getParameter("p_comment");

		commentDAO dao = new commentDAO();
		commentDTO dto = new commentDTO(content_id, comment_id, member_id, p_comment);

		int cnt = dao.c_upload(dto);

		if (cnt > 0) {
			response.sendRedirect("see.html");
		} else {
			response.sendRedirect("fail.html");
		}

	}

}
