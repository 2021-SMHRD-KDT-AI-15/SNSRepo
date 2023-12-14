package sns.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sns.model.MatchDAO;
import sns.model.MatchDTO;

@WebServlet("/Ptg_MatchRequestService")
public class Ptg_MatchRequestService extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		request.setCharacterEncoding("UTF-8");

		HttpSession session = request.getSession();

		String req_id = (String) session.getAttribute("user_id");
		String id = request.getParameter("id");

		MatchDAO dao = new MatchDAO();

		MatchDTO dto = new MatchDTO(id, req_id);

		dao.match_ptg(dto);

		response.sendRedirect("MatchMain.jsp");

	}

}
