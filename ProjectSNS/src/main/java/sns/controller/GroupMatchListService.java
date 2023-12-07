package sns.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sns.model.MatchDAO;
import sns.model.MatchDTO;

@WebServlet("/GroupMatchListService")
public class GroupMatchListService extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		String gender = request.getParameter("gender");
		int rating = Integer.parseInt(request.getParameter("rating"));
		String area = request.getParameter("area");
		String interest = request.getParameter("interest");
		
		MatchDAO dao = new MatchDAO();
		
		MatchDTO p_dto = new MatchDTO(gender, rating, area, interest);
		MatchDTO g_dto = new MatchDTO(rating, area, interest);
		
		ArrayList<MatchDTO> p_list = new ArrayList<>();
		ArrayList<MatchDTO> g_list = new ArrayList<>();

		p_list = dao.user_list(p_dto);
		g_list = dao.group_list(g_dto);

		request.setAttribute("p_list", p_list);
		request.setAttribute("g_list", g_list);
		RequestDispatcher rd = request.getRequestDispatcher("GroupMatchList.jsp");
		rd.forward(request, response);
				
	}

}
