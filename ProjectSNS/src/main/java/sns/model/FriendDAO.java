package sns.model;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import sns.db.SqlSessionManager;


public class FriendDAO {
	
	SqlSessionFactory sqlSessionFactory = SqlSessionManager.getFactiory();
	
	ArrayList<FriendDTO> friend_list = new ArrayList<>();

	public ArrayList<FriendDTO> friend_list(String user_id) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		friend_list = (ArrayList) sqlSession.selectList("friend_list", user_id);
		
		sqlSession.close();
		
		return friend_list;
	}

	public void friend_delete(FriendDTO dto) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.delete("friend_delete1", dto);
		sqlSession.delete("friend_delete2", dto);
		
		sqlSession.close();
		
	}
	
}
