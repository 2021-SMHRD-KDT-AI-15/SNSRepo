package sns.model;

public class GroupDTO {

	private String group_id;
	private String group_info;
	private int rating_group;
	private String member_id;
	private String interest;
	private int mmr;
	private String img;
	
	public GroupDTO(String group_id, String group_info, String interest, int mmr, String member_id) {
		this.group_id = group_id;
		this.group_info = group_info;
		this.interest = interest;
		this.mmr = mmr;
		this.member_id = member_id;
	}

	public GroupDTO(String group_id, String group_info, String img) {
		this.group_id = group_id;
		this.group_info = group_info;
		this.img = img;
	}

	public GroupDTO(String group_id, String member_id) {
		this.group_id = group_id;
		this.member_id = member_id;
	}

	public GroupDTO(String group_id, String group_info, int rating_group, int mmr, String img, String member_id) {
		this.group_id = group_id;
		this.group_info = group_info;
		this.rating_group = rating_group;
		this.mmr = mmr;
		this.img = img;
		this.member_id = member_id;
	}

	
	
	
	
	public String getGroup_id() {
		return group_id;
	}

	public void setGroup_id(String group_id) {
		this.group_id = group_id;
	}

	public String getGroup_info() {
		return group_info;
	}

	public void setGroup_info(String group_info) {
		this.group_info = group_info;
	}

	public int getRating_group() {
		return rating_group;
	}

	public void setRating_group(int rating_group) {
		this.rating_group = rating_group;
	}

	public String getMember_id() {
		return member_id;
	}

	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}

	public String getInterest() {
		return interest;
	}

	public void setInterest(String interest) {
		this.interest = interest;
	}

	public int getMmr() {
		return mmr;
	}

	public void setMmr(int mmr) {
		this.mmr = mmr;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}
	
	
}
