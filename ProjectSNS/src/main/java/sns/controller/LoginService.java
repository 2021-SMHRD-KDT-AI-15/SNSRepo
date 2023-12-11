package sns.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sns.model.MemberDAO;
import sns.model.MemberDTO;

@WebServlet("/LoginService")
public class LoginService extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		  request.setCharacterEncoding("UTF-8");
		  HttpSession session = request.getSession();

	        String Member_id = request.getParameter("Member_id");
	        String pw = request.getParameter("pw");
	        
	        MemberDAO dao = new MemberDAO();
	        MemberDTO dto = new MemberDTO(Member_id, pw);

	        MemberDTO result = dao.login(dto);

	        System.out.println(result);
	        
	        if (result != null) {
	        	// 여기서 셋어트리로 베이직 인포 다 불러와야함
	        	// 베이직 인포에서 받아와서 로그인서비로 가져와야함??
	        	session.setAttribute("user_id", Member_id);
	            response.sendRedirect("BoardDetail");
	            
	        } else {
	            response.sendRedirect("fail.html");
	        }

	}

}
