package sns.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sns.model.FriendDAO;
import sns.model.FriendDTO;

@WebServlet("/FriendDeleteService")
public class FriendDeleteService extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		HttpSession session = request.getSession();
	
		String member_id = (String) session.getAttribute("user_id");
		
		String friend_id = request.getParameter("friend_id");
		
		FriendDAO dao = new FriendDAO();
		
		FriendDTO dto = new FriendDTO(member_id, friend_id);
		
		dao.friend_delete(dto);
		
		response.sendRedirect("FriendListService");
		
	}

}
