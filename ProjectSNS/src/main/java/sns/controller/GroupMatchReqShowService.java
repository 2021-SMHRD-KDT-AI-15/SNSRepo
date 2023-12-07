package sns.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sns.model.MatchDAO;
import sns.model.MatchDTO;

@WebServlet("/GroupMatchReqShowService")
public class GroupMatchReqShowService extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		HttpSession session = request.getSession();
		
		String group_id = (String) session.getAttribute("group_id");
		
		MatchDAO dao = new MatchDAO();
		
		ArrayList<MatchDTO> ptg_list = new ArrayList<>();
		ArrayList<MatchDTO> gtg_list = new ArrayList<>();
		
		ptg_list = dao.req_list_ptg(group_id);
		gtg_list = dao.req_list_gtg(group_id);
		
		request.setAttribute("ptg_list", ptg_list);
		request.setAttribute("gtg_list", gtg_list);
		RequestDispatcher rd = request.getRequestDispatcher("GroupMatchReqList.jsp");
		rd.forward(request, response);
	}

}
