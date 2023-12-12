package sns.model;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import sns.db.SqlSessionManager;

public class ChatDAO {
	
	SqlSessionFactory sqlSessionFactory = SqlSessionManager.getFactiory();
	
	ArrayList<ChatDTO> chat_room_list = new ArrayList<>();
	
	public ArrayList<ChatDTO> chat_room_list(String user_id) {

		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		chat_room_list = (ArrayList) sqlSession.selectList("chat_room_list", user_id);

		sqlSession.close();

		return chat_room_list;

	}

}
