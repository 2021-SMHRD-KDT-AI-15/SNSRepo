package sns.model;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import sns.db.SqlSessionManager;

public class MemberDAO {

	SqlSessionFactory sqlSessionFactory = SqlSessionManager.getFactiory();
	
	public int join(MemberDTO dto) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		int cnt = sqlSession.insert("join", dto);
			
		sqlSession.close();
		
		return cnt;
	}
	
	public MemberDTO login(MemberDTO dto) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true); 
		
		MemberDTO result = sqlSession.selectOne("login", dto);
		
		System.out.println("DAO login 상태");
		System.out.println(result);
		
		sqlSession.close();
		
		return result;
	}
	
}
