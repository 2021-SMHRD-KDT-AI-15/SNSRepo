package sns.model;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import sns.db.SqlSessionManager;

public class MatchDAO {
	
	SqlSessionFactory sqlSessionFactory = SqlSessionManager.getFactiory();

	ArrayList<MatchDTO> a_list = new ArrayList<>();
	
	public ArrayList<MatchDTO> user_list(MatchDTO dto) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		a_list = (ArrayList) sqlSession.selectList("filter_basic", dto);
		
		sqlSession.close();
		
		return a_list;
	}
	
	
}