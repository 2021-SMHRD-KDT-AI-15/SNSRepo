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

@WebServlet("/GroupMemberKickService")
public class GroupMemberKickService extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		request.setCharacterEncoding("UTF-8");

		HttpSession session = request.getSession();

		String group_id = (String) session.getAttribute("group_id");
		String member_id = request.getParameter("member_id");

		GroupDAO dao = new GroupDAO();
		GroupDTO dto = new GroupDTO(group_id, member_id);

		dao.group_member_kick(dto);

		request.setAttribute("group_id", group_id);
		
		RequestDispatcher rd = request.getRequestDispatcher("GroupMainService.jsp");
		
		rd.forward(request, response);

	}

}
