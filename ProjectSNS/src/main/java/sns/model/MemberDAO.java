package sns.model;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import sns.db.SqlSessionManager;

public class MemberDAO {

	SqlSessionFactory sqlSessionFactory = SqlSessionManager.getFactiory();
	
	//회원가입 메소드
	public int join(MemberDTO dto) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		int cnt = sqlSession.insert("join", dto);
		
		sqlSession.close();
		
		return cnt;
	}
	
	
	
	//로그인 메소드
	public MemberDTO login(MemberDTO dto) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true); 
		
		MemberDTO result = sqlSession.selectOne("login", dto);
		
		System.out.println("DAO login 상태");
		System.out.println(result);
		
		
		sqlSession.close();
		
		return result;
	}
	
}
