package sns.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import sns.model.GroupDTO;
import sns.model.MatchDAO;
import sns.model.MatchDTO;

@WebServlet("/ReqDeniedService")
public class GroupReqDeniedService extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		HttpSession session = request.getSession();
		MatchDAO dao = new MatchDAO();
		
		String group_id = (String) session.getAttribute("group_id");
		
		String ptg_id = request.getParameter("ptg_id");
		String gtg_id = request.getParameter("gtg_id");
		
		if(ptg_id != null) {
			MatchDTO mdto = new MatchDTO(group_id, ptg_id);
			dao.ptg_delete(mdto);
		}else if(gtg_id != null) {
			MatchDTO mdto = new MatchDTO(group_id, gtg_id);
			dao.gtg_delete(mdto);
		}

		response.sendRedirect("GroupMainService.jsp");
		
	}

}
