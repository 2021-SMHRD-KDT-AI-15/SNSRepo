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
import sns.model.commentDAO;
import sns.model.commentDTO;

@WebServlet("/BoardDetail")
public class BoardDetail extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		BoardDAO b_dao = new BoardDAO();
		commentDAO c_dao = new commentDAO();

		ArrayList<BoardDTO> b_list = b_dao.list();

		ArrayList<commentDTO> c_list = c_dao.c_list();

		request.setAttribute("result", b_list);
		request.setAttribute("c_result", c_list);
		RequestDispatcher rd = request.getRequestDispatcher("RBoardMain.jsp");
		rd.forward(request, response);

	}

}
