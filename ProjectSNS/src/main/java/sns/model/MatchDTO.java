package sns.model;

public class MatchDTO {

	private String id;
	private String member_id;
	private String req_id;
	private String group_id;
	private String name;
	private String img;
	private String dis;
	private String gender;
	private String group_info;
	private String area;
	private String interest;
	private int rating;
	
	public MatchDTO() {
	}

	public MatchDTO(String member_id, String name, String img, String dis, String gender, int rating) {
		this.member_id = member_id;
		this.name = name;
		this.img = img;
		this.dis = dis;
		this.gender = gender;
		this.rating = rating;
	}

	public MatchDTO(String id) {
		this.id = id;
	}

	public MatchDTO(String id, String req_id) {
		this.id = id;
		this.req_id = req_id;
	}
	
	public MatchDTO(String gender, int rating, String area, String interest) {
		this.gender = gender;
		this.rating = rating;
		this.area = area;
		this.interest = interest;
	}

	public MatchDTO(int rating, String area, String interest) {
		this.rating = rating;
		this.area = area;
		this.interest = interest;
	}

	public MatchDTO(String member_id, String name, String dis, String gender, int rating) {
		this.member_id = member_id;
		this.name = name;
		this.dis = dis;
		this.gender = gender;
		this.rating = rating;
	}

	public MatchDTO(String group_id, String group_info, int rating) {
		this.group_id = group_id;
		this.group_info = group_info;
		this.rating = rating;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getDis() {
		return dis;
	}

	public void setDis(String dis) {
		this.dis = dis;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getGroup_info() {
		return group_info;
	}

	public void setGroup_info(String group_info) {
		this.group_info = group_info;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getInterest() {
		return interest;
	}

	public void setInterest(String interest) {
		this.interest = interest;
	}

	public String getReq_id() {
		return req_id;
	}

	public void setReq_id(String req_id) {
		this.req_id = req_id;
	}

}
