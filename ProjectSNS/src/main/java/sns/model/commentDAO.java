package sns.model;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import sns.db.SqlSessionManager;

public class commentDAO {

	ArrayList<commentDTO> b_list = new ArrayList<>();
	ArrayList<commentDTO> c_list = new ArrayList<>();
	SqlSessionFactory sqlSessionFactory = SqlSessionManager.getFactiory();

	public int c_upload(commentDTO dto) {

		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		int cnt = sqlSession.insert("c_upload", dto);

		System.out.println(cnt);

		sqlSession.close();

		return cnt;
	}

	public int c_count() {

		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		int count = sqlSession.selectOne("c_count");

		sqlSession.close();

		return count;
	}

	public ArrayList<commentDTO> list() {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		b_list = (ArrayList) sqlSession.selectList("list");

		sqlSession.close();

		return b_list;

	}

	public commentDTO detail(int num) {

		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		commentDTO dto = sqlSession.selectOne("c_detail", num);

		sqlSession.close();

		return dto;
	}

	public ArrayList<commentDTO> c_list() {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		c_list = (ArrayList) sqlSession.selectList("c_list");

		sqlSession.close();

		return c_list;
	}

}
