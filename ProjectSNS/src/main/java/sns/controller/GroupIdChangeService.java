package sns.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sns.model.GroupChangeDTO;
import sns.model.GroupDAO;

@WebServlet("/GroupIdChangeService")
public class GroupIdChangeService extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("UTF-8");

		HttpSession session = request.getSession();

		String group_id = (String) session.getAttribute("group_id");

		String new_input = request.getParameter("new_input");

		GroupDAO dao = new GroupDAO();

		GroupChangeDTO dto = new GroupChangeDTO(group_id, new_input);

		dao.group_id_change(dto);

		request.setAttribute("group_id", new_input);
		RequestDispatcher rd = request.getRequestDispatcher("GroupMainService");
		rd.forward(request, response);

	}

}
