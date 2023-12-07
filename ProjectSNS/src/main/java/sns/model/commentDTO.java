package sns.model;

public class commentDTO {

	private String content_id;
	private String comment_id;
	private String Member_id;
	private String p_comment;
	
	
	
	
	
	
	public commentDTO(String content_id, String comment_id, String member_id, String p_comment) {
		this.content_id = content_id;
		this.comment_id = comment_id;
		Member_id = member_id;
		this.p_comment = p_comment;
	}
	
	
	
	
	
	public String getContent_id() {
		return content_id;
	}
	public void setContent_id(String content_id) {
		this.content_id = content_id;
	}
	public String getComment_id() {
		return comment_id;
	}
	public void setComment_id(String comment_id) {
		this.comment_id = comment_id;
	}
	public String getMember_id() {
		return Member_id;
	}
	public void setMember_id(String member_id) {
		Member_id = member_id;
	}
	public String getP_comment() {
		return p_comment;
	}
	public void setP_comment(String p_comment) {
		this.p_comment = p_comment;
	}

	
	
	
	
	
	
}
