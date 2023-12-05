package sns.model;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import sns.db.SqlSessionManager;

public class MatchDAO {
	
	SqlSessionFactory sqlSessionFactory = SqlSessionManager.getFactiory();

	ArrayList<MatchDTO> p_list = new ArrayList<>();
	ArrayList<MatchDTO> g_list = new ArrayList<>();
	ArrayList<MatchDTO> m_list = new ArrayList<>();
	
	public ArrayList<MatchDTO> user_list(MatchDTO p_dto) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		p_list = (ArrayList) sqlSession.selectList("filter_basic", p_dto);
		
		sqlSession.close();
		
		return p_list;
	}
	
	public ArrayList<MatchDTO> group_list(MatchDTO g_dto) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		g_list = (ArrayList) sqlSession.selectList("filter_group", g_dto);
		
		sqlSession.close();
		
		return g_list;
	}

	public void match_moim_ptp(MatchDTO dto) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.insert("ptp_match_req", dto);
		
		sqlSession.close();
	}
	
	public void match_group_ptg(MatchDTO dto) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.insert("ptg_match_req", dto);
		
		sqlSession.close();
	}
	
	public ArrayList<MatchDTO> req_ptp_list(String user_id) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		p_list = (ArrayList) sqlSession.selectList("req_ptp", user_id);
		
		sqlSession.close();
		
		return p_list;
	}

	public ArrayList<MatchDTO> req_mtp_list(String user_id) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		p_list = (ArrayList) sqlSession.selectList("req_mtp", user_id);
		
		sqlSession.close();
		
		return m_list;
	}

	public ArrayList<MatchDTO> req_gtp_list(String user_id) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		g_list = (ArrayList) sqlSession.selectList("req_gtp", user_id);
		
		sqlSession.close();
		
		return g_list;
	}

	public void new_moim(MatchDTO dto) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.insert("new_moim", dto);
		sqlSession.insert("moim_add", dto);
		
		sqlSession.close();
	}

	public void moim_add(MatchDTO dto) {
		// TODO Auto-generated method stub
		
	}

	public void group_add(MatchDTO dto) {
		// TODO Auto-generated method stub
		
	}

	public void ptp_delete(MatchDTO dto) {
		// TODO Auto-generated method stub
		
	}

	public void mtp_delete(MatchDTO dto) {
		// TODO Auto-generated method stub
		
	}

	public void gtp_delete(MatchDTO dto) {
		// TODO Auto-generated method stub
		
	}
	
	
	
	
}