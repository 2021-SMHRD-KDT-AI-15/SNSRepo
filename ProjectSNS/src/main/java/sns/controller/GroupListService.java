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

@WebServlet("/GroupListService")
public class GroupListService extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		HttpSession session = request.getSession();
		
		String user_id = (String) session.getAttribute("user_id");
		
		GroupDAO dao = new GroupDAO();
		
		ArrayList<GroupDTO> group_list = new ArrayList<>(); 
		
		group_list = dao.group_list(user_id);
		
		request.setAttribute("group_list", group_list);
		RequestDispatcher rd = request.getRequestDispatcher("GroupList.jsp");
		rd.forward(request, response);
	}

}
