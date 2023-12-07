package sns.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sns.model.GroupDAO;
import sns.model.GroupDTO;

@WebServlet("/GroupWithdrawalService")
public class GroupWithdrawalService extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		HttpSession session = request.getSession();
		
		String user_id = (String) session.getAttribute("user_id");
		String group_id = (String) session.getAttribute("group_id");
		
		GroupDAO dao = new GroupDAO();
		GroupDTO dto = new GroupDTO(group_id, user_id);
		
		dao.group_withdrawal(dto);
		
		response.sendRedirect("GroupListService");
		
	}

}
