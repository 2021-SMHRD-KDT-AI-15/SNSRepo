package sns.controller;

import java.io.IOException;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import sns.model.BoardDAO;
import sns.model.BoardDTO;

@WebServlet("/WriteService")
public class WriteService extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("UTF-8");

		String path = request.getServletContext().getRealPath("file");
		int maxSize = 1024 * 1024 * 1024;
		String encoding = "UTF-8";

		DefaultFileRenamePolicy rename = new DefaultFileRenamePolicy();

		MultipartRequest multi = new MultipartRequest(request, path, maxSize, encoding, rename);

		HttpSession session2 = request.getSession();
		Object user_id = session2.getAttribute("user_id");

		String member_id = (String) user_id;
		String title = multi.getParameter("title");
		String content = multi.getParameter("content");
		String like_count = multi.getParameter("like_count");
		String attachment = URLEncoder.encode(multi.getFilesystemName("attachment"), "utf-8");

		BoardDAO dao = new BoardDAO();
		BoardDTO dto = new BoardDTO(member_id, title, content, attachment, like_count);

		int cnt = dao.upload(dto);

		if (cnt > 0) {
			response.sendRedirect("BoardDetail");
		} else {
			response.sendRedirect("writemain.jsp");
		}

	}

}
