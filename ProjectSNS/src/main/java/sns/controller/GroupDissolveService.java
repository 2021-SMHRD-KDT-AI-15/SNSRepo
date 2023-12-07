package sns.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sns.model.GroupDAO;

@WebServlet("/GroupDissolveService")
public class GroupDissolveService extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		HttpSession session = request.getSession();
		
		String group_id = (String) session.getAttribute("group_id");
		
		GroupDAO dao = new GroupDAO();
		
		dao.group_dissolve(group_id);
		
		response.sendRedirect("GroupListService");
	}

}
