package sns.model;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import sns.db.SqlSessionManager;

public class BoardDAO {

	SqlSessionFactory sqlSessionFactory = SqlSessionManager.getFactiory();
	
	public int upload(BoardDTO dto) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		int cnt = sqlSession.insert("upload", dto);
		System.out.println(cnt); 
		
		sqlSession.close();
		
		return cnt;
	}
	
}
