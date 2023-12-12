package sns.model;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import sns.db.SqlSessionManager;

public class BoardDAO {

	SqlSessionFactory sqlSessionFactory = SqlSessionManager.getFactiory();

	ArrayList<BoardDTO> b_list = new ArrayList<>();

	public int upload(BoardDTO dto) {

		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		int cnt = sqlSession.insert("upload", dto);
		
		System.out.println(cnt);

		sqlSession.close();

		return cnt;
	}

	public BoardDTO detail(int num) {

		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		BoardDTO dto = sqlSession.selectOne("detail", num);

		sqlSession.close();

		return dto;
	}

	public ArrayList<BoardDTO> list() {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		b_list = (ArrayList) sqlSession.selectList("list");

		sqlSession.close();

		return b_list;

	}

	public int count() {

		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		int count = sqlSession.selectOne("count");

		sqlSession.close();

		return count;

	}

}
