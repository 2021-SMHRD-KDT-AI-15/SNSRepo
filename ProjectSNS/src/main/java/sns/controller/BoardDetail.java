package sns.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import sns.model.BoardDAO;
import sns.model.BoardDTO;

@WebServlet("/BoardDetail")
public class BoardDetail extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

//	int num = Integer.parseInt(request.getParameter("num"));
	
	int content_id = 0;
	
	ArrayList<BoardDTO> b_list = new ArrayList<>();
	BoardDAO dao = new BoardDAO();
	int count = dao.count();
	
	for(int i = 1; i <= count; i++) {
		content_id = i;
	
		// 카운트 수정해야함..
		
	BoardDTO result = dao.detail(content_id);
	
	// 결과값으로 설정을 하는거니까
	
	b_list.add(result);
	
	}
	
	System.out.println(b_list);
	request.setAttribute("result", b_list);
	RequestDispatcher rd = request.getRequestDispatcher("BoardMain.jsp");
	rd.forward(request, response);
	
	
	}

}
