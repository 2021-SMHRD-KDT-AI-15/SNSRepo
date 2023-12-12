package sns.model;

public class ChatDTO {
	private String chat_id;
	private String member_id;
	private String group_id;
	private String title;
	private String content;
	private String comment_time;
	private String attachment;
	
	public ChatDTO(String chat_id, String member_id, String group_id, String title) {
		this.chat_id = chat_id;
		this.member_id = member_id;
		this.group_id = group_id;
		this.title = title;
	}

	public ChatDTO(String chat_id, String member_id, String content, String comment_time, String attachment) {
		this.chat_id = chat_id;
		this.member_id = member_id;
		this.content = content;
		this.comment_time = comment_time;
		this.attachment = attachment;
	}
	
	public ChatDTO(String chat_id, String title) {
		this.chat_id = chat_id;
		this.title = title;
	}

	public ChatDTO() {
	}
	
	
}
