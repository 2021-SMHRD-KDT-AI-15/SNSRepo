package sns.model;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import sns.db.SqlSessionManager;

public class GroupDAO {

	SqlSessionFactory sqlSessionFactory = SqlSessionManager.getFactiory();

	ArrayList<GroupDTO> group_list = new ArrayList<>();
	ArrayList<GroupMemberDTO> group_member_list = new ArrayList<>();

	public int newGroup(GroupDTO dto) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		int cnt = sqlSession.insert("new_group_1", dto);
		sqlSession.insert("new_group_2", dto);
		sqlSession.insert("new_group_3", dto);
		
		sqlSession.close();
		
		return cnt;
	}

	public ArrayList<GroupDTO> group_list(String user_id) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		group_list = (ArrayList) sqlSession.selectList("my_group_list", user_id);
		
		sqlSession.close();
		
		return group_list;
	}

	public GroupDTO get_group_info(String group_id) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		GroupDTO group_main = sqlSession.selectOne("get_group_info", group_id);
		
		sqlSession.close();
		
		return group_main;
	}

	public ArrayList<GroupMemberDTO> get_group_member_list(String group_id) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		group_member_list = (ArrayList) sqlSession.selectList("get_group_member_list", group_id);
		
		sqlSession.close();
		
		return group_member_list;
	}

	public void group_member_kick(GroupDTO dto) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.delete("group_member_kick", dto);
		
		sqlSession.close();
	}

	public int group_id_change(GroupChangeDTO dto) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		int cnt = sqlSession.update("group_id_change", dto);
		
		sqlSession.close();
		
		return cnt;
	}

	public void group_info_change(GroupChangeDTO dto) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.update("group_info_change", dto);
		
		sqlSession.close();
	}

	public void group_withdrawal(GroupDTO dto) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.delete("group_withdrawal", dto);
		
		sqlSession.close();
	}

	public void group_dissolve(String group_id) {
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		
		sqlSession.delete("group_dissolve_1", group_id);
		sqlSession.delete("group_dissolve_2", group_id);
		
		sqlSession.close();
	}
	
}
