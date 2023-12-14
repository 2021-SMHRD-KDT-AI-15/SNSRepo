package sns.model;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import sns.db.SqlSessionManager;

public class ProfileDAO {

	SqlSessionFactory sqlSessionFactory = SqlSessionManager.getFactiory();
	
	public ProfileDTO get_user_info(String user_id) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		ProfileDTO user_info = sqlSession.selectOne("get_user_info", user_id);
		
		sqlSession.close();
		
		return user_info;
	}

}
