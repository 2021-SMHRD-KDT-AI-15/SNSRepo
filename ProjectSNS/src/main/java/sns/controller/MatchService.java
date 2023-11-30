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

@WebServlet("/MatchService")
public class MatchService extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		
		String gender = request.getParameter("gender");
		int rating_person = Integer.parseInt(request.getParameter("rating_person"));
		String area = request.getParameter("area");
		String interest = request.getParameter("interest");
		
		MatchDAO dao = new MatchDAO();
		
		MatchDTO dto = new MatchDTO(gender, rating_person, area, interest);
		
		ArrayList<MatchDTO> a_list = new ArrayList<>();

		a_list = dao.user_list(dto);


		request.setAttribute("list", a_list);
		RequestDispatcher rd = request.getRequestDispatcher("MatchList.jsp");
		rd.forward(request, response);
				
	}

}
