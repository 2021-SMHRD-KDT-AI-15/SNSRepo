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


@WebServlet("/MatchShowService")

public class MatchShowService extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		
		session.setAttribute("user_id", "ID1");
		
		String user_id = (String) session.getAttribute("user_id");
		
		MatchDAO dao = new MatchDAO();
		
		ArrayList<MatchDTO> ptp_list = new ArrayList<>();
		ArrayList<MatchDTO> mtp_list = new ArrayList<>();
		ArrayList<MatchDTO> gtp_list = new ArrayList<>();
		
		ptp_list = dao.req_ptp_list(user_id);
		mtp_list = dao.req_mtp_list(user_id);
		gtp_list = dao.req_gtp_list(user_id);
		
		request.setAttribute("ptp_list", ptp_list);
		request.setAttribute("mtp_list", mtp_list);
		request.setAttribute("gtp_list", gtp_list);
		RequestDispatcher rd = request.getRequestDispatcher("MatchReqList.jsp");
		rd.forward(request, response);
	}

}
