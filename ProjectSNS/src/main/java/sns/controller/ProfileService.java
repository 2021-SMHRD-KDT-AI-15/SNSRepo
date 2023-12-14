package sns.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sns.model.ProfileDAO;
import sns.model.ProfileDTO;

@WebServlet("/ProfileService")
public class ProfileService extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		HttpSession session = request.getSession();

		String user_id = (String) session.getAttribute("user_id");

		ProfileDAO dao = new ProfileDAO();

		ProfileDTO user_info = dao.get_user_info(user_id);

		request.setAttribute("user_info", user_info);
		
		RequestDispatcher rd = request.getRequestDispatcher("Profile.jsp");
		
		rd.forward(request, response);
	}

}
