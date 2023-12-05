package sns.model;

public class BoardDTO {

	private String member_id;
	private String group_id;
	private int content_id;
	private String title;
	private String content;
	private String date_created;
	private String attachment;
	private String like_count;

	
	
	public BoardDTO(String member_id, String group_id, int content_id, String title, String content, String date_created,
			String attachment, String like_count) {
		this.member_id = member_id;
		this.group_id = group_id;
		this.content_id = content_id;
		this.title = title;
		this.content = content;
		this.date_created = date_created;
		this.attachment = attachment;
		this.like_count = like_count;
	}

	
	public BoardDTO(String member_id, String title, String content, String attachment, String like_count) {
		this.member_id = member_id;
		this.title = title;
		this.content = content;
		this.attachment = attachment;
		this.like_count = like_count;
	}


	public String getMember_id() {
		return member_id;
	}



	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}



	public String getGroup_id() {
		return group_id;
	}



	public void setGroup_id(String group_id) {
		this.group_id = group_id;
	}



	public int getContent_id() {
		return content_id;
	}



	public void setContent_id(int content_id) {
		this.content_id = content_id;
	}



	public String getTitle() {
		return title;
	}



	public void setTitle(String title) {
		this.title = title;
	}



	public String getContent() {
		return content;
	}



	public void setContent(String content) {
		this.content = content;
	}



	public String getDate_created() {
		return date_created;
	}



	public void setDate_created(String date_created) {
		this.date_created = date_created;
	}



	public String getAttachment() {
		return attachment;
	}



	public void setAttachment(String attachment) {
		this.attachment = attachment;
	}



	public String getLike_count() {
		return like_count;
	}



	public void setLike_count(String like_count) {
		this.like_count = like_count;
	}

	
	
	
	
	
	
	
	
}
