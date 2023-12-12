package sns.model;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import sns.db.SqlSessionManager;

public class MatchDAO {
	
	SqlSessionFactory sqlSessionFactory = SqlSessionManager.getFactiory();

	ArrayList<MatchDTO> p_list = new ArrayList<>();
	ArrayList<MatchDTO> g_list = new ArrayList<>();
	
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

	public void match_ptp(MatchDTO dto) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.insert("match_ptp", dto);
		
		sqlSession.close();
	}
	
	public void match_ptg(MatchDTO dto) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.insert("match_ptg", dto);
		
		sqlSession.close();
	}
	
	public void match_gtp(MatchDTO dto) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.insert("match_gtp", dto);
		
		sqlSession.close();
	}
	
	public void match_gtg(MatchDTO dto) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.insert("match_gtg", dto);
		
		sqlSession.close();
	}
	
	public ArrayList<MatchDTO> req_list_ptp(String user_id) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		p_list = (ArrayList) sqlSession.selectList("req_list_ptp", user_id);
		
		sqlSession.close();
		
		return p_list;
	}

	public ArrayList<MatchDTO> req_list_gtp(String user_id) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		g_list = (ArrayList) sqlSession.selectList("req_list_gtp", user_id);
		
		sqlSession.close();
		
		return g_list;
	}
	
	public ArrayList<MatchDTO> req_list_ptg(String group_id) {
		
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		p_list = (ArrayList) sqlSession.selectList("req_list_ptg", group_id);
		
		sqlSession.close();
		
		return p_list;
	}
	
	public ArrayList<MatchDTO> req_list_gtg(String group_id) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		g_list = (ArrayList) sqlSession.selectList("req_list_gtg", group_id);
		
		sqlSession.close();
		
		return g_list;
	}

	public void new_group(MatchDTO dto) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.insert("new_random_group_1", dto);
		sqlSession.insert("new_random_group_2", dto);
		sqlSession.insert("new_random_group_3", dto);
		
		sqlSession.close();
	}

	public void group_new_member(GroupDTO dto) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.insert("group_new_member", dto);
		
		sqlSession.close();
	}

	public void ptp_delete(MatchDTO dto) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.delete("ptp_delete", dto);
		
		sqlSession.close();
	}
	
	public void gtp_delete(MatchDTO dto) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.delete("gtp_delete", dto);
		
		sqlSession.close();
	}
	
	public void ptg_delete(MatchDTO dto) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.delete("ptg_delete", dto);
		
		sqlSession.close();
	}
	
	public void gtg_delete(MatchDTO dto) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.delete("gtg_delete", dto);
		
		sqlSession.close();
	}

	public void gtg_leader_chat(MatchDTO dto) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.insert("gtg_leader_chat", dto);
		
		sqlSession.close();
	}

}