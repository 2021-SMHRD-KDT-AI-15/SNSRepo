package sns.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sns.model.GroupDAO;
import sns.model.GroupDTO;
import sns.model.MemberDTO;

@WebServlet("/GroupMainService")
public class GroupMainService extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		HttpSession session = request.getSession();
		
		String user_id = (String) session.getAttribute("user_id");
		
		String group_id = request.getParameter("group_id");
		
		session.setAttribute("group_id", group_id);
		
		GroupDAO dao = new GroupDAO();

		GroupDTO group_main = dao.get_group_info(group_id);
		ArrayList<MemberDTO> group_member_list = dao.get_group_member_list(group_id);
		
		
		if(group_main.getMember_id().equals(user_id)) {
			request.setAttribute("group_main", group_main);
			request.setAttribute("group_member_list", group_member_list);
			RequestDispatcher rd = request.getRequestDispatcher("GroupLeaderMain.jsp");
			rd.forward(request, response);
		}else {
			request.setAttribute("group_main", group_main);
			request.setAttribute("group_member_list", group_member_list);
			RequestDispatcher rd = request.getRequestDispatcher("GroupMain.jsp");
			rd.forward(request, response);
		}
		
	}

}
