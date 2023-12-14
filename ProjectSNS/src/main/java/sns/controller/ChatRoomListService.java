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

import sns.model.ChatDAO;
import sns.model.ChatDTO;

@WebServlet("/ChatRoomListService")
public class ChatRoomListService extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		request.setCharacterEncoding("UTF-8");

		HttpSession session = request.getSession();

		String user_id = (String) session.getAttribute("user_id");

		ChatDAO dao = new ChatDAO();

		ArrayList<ChatDTO> chat_room_list = new ArrayList<>();

		chat_room_list = dao.chat_room_list(user_id);

		request.setAttribute("chat_room_list", chat_room_list);

		RequestDispatcher rd = request.getRequestDispatcher("ChatRoomList.jsp");

		rd.forward(request, response);
	}

}
