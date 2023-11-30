package sns.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sns.model.MemberDAO;
import sns.model.MemberDTO;

@WebServlet("/JoinService")
public class JoinService extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("UTF-8");

		String Member_id = request.getParameter("Member_id");
		String pw = request.getParameter("pw");
		String name = request.getParameter("name");
		String mail = request.getParameter("mail");
		String birth = request.getParameter("birth");
		String img = request.getParameter("img");
		String dis = request.getParameter("dis");
		String gender = request.getParameter("gender");
		String location = request.getParameter("location");
		String rating_person = request.getParameter("rating_person");

		
		MemberDAO dao = new MemberDAO();
		MemberDTO dto = new MemberDTO(Member_id, pw, name, mail, birth, img, dis, gender, location, rating_person);
		int result = dao.join(dto);
		
		if(result > 0) {
			response.sendRedirect("see.html");
		}else {
			response.sendRedirect("fail.html");
		}

	}

}
