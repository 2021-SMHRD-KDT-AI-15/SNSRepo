package sns.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sns.model.GroupDAO;
import sns.model.GroupDTO;

@WebServlet("/GroupMakingService")
public class GroupMakingService extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		HttpSession session = request.getSession();
		
		String user_id = (String) session.getAttribute("user_id");
		
		String group_id = request.getParameter("group_id");
		String group_info = request.getParameter("group_info");
		String interest = request.getParameter("interest");
		int mmr = 50;
		
		GroupDAO dao = new GroupDAO();
		
		GroupDTO dto = new GroupDTO(group_id, group_info, interest, mmr, user_id);
		
		int result = dao.newGroup(dto);
		
		if(result > 0) {
			request.setAttribute("group_id", group_id);
			RequestDispatcher rd = request.getRequestDispatcher("GroupMainService");
			rd.forward(request, response);
		}else { // 그룹 만들기 실패시
			response.sendRedirect("GroupListService");
		}
		
		
	}

}
