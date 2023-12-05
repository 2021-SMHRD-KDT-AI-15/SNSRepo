package sns.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sns.model.MatchDAO;
import sns.model.MatchDTO;

@WebServlet("/ReqAcceptService")
public class ReqAcceptService extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		HttpSession session = request.getSession();
		MatchDAO dao = new MatchDAO();
		
		String user_id = (String) session.getAttribute("user_id");
		
		String ptp_id = request.getParameter("ptp_id");
		String mtp_id = request.getParameter("mtp_id");
		String gtp_id = request.getParameter("gtp_id");
		
		if(ptp_id != null) {
			MatchDTO dto = new MatchDTO(user_id, ptp_id);
			dao.new_moim(dto);
			dao.ptp_delete(dto);
		}else if(mtp_id != null) {
			MatchDTO dto = new MatchDTO(user_id, mtp_id);
			dao.moim_add(dto);
			dao.mtp_delete(dto);
		}else if(gtp_id != null) {
			MatchDTO dto = new MatchDTO(user_id, gtp_id);
			dao.group_add(dto);
			dao.gtp_delete(dto);
		}
		
	}

}
