package sns.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sns.model.BoardDTO;
import sns.model.commentDAO;
import sns.model.commentDTO;

@WebServlet("/commentOut")
public class commentOut extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		int comment_id = 0;
		
		ArrayList<commentDTO> b_list = new ArrayList<>();
		commentDAO dao = new commentDAO();
		int count = dao.c_count();
		
		for(int i = 1; i <= count; i++) {
			comment_id = i;
		
			// 카운트 수정해야함..
			
		commentDTO result = dao.detail(comment_id);
		
		// 결과값으로 설정을 하는거니까
		
		b_list.add(result);
		
		}
		
		request.setAttribute("c_result", b_list);
		RequestDispatcher rd = request.getRequestDispatcher("BoardMain.jsp");
		rd.forward(request, response);
	
	}

}
