package sns.model;

public class MatchDTO {

	private String member_id;
	private String group_id;
	private String name;
	private String img;
	private String dis;
	private String gender;
	private int rating_person;
	private int rating_group;
	private String group_info;
	private String area;
	private String interest;


	public MatchDTO(String member_id, String group_id, String name, String img, String dis, String gender,
			int rating_person, int rating_group, String group_info, String area, String interest) {
		this.member_id = member_id;
		this.group_id = group_id;
		this.name = name;
		this.img = img;
		this.dis = dis;
		this.gender = gender;
		this.rating_person = rating_person;
		this.rating_group = rating_group;
		this.group_info = group_info;
		this.area = area;
		this.interest = interest;
	}

	public MatchDTO(String member_id, String name, String dis, String gender, int rating_person) {
		this.member_id = member_id;
		this.name = name;
		this.dis = dis;
		this.gender = gender;
		this.rating_person = rating_person;
	}

	public MatchDTO(String member_id, String name, String img, String dis, String gender, int rating_person) {
		this.member_id = member_id;
		this.name = name;
		this.img = img;
		this.dis = dis;
		this.gender = gender;
		this.rating_person = rating_person;
	}

	public MatchDTO(String gender, int rating_person, String area, String interest) {
		this.gender = gender;
		this.rating_person = rating_person;
		this.area = area;
		this.interest = interest;
	}

	public MatchDTO(String group_id, int rating_group, String group_info) {
		this.group_id = group_id;
		this.rating_group = rating_group;
		this.group_info = group_info;
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

	public int getRating_person() {
		return rating_person;
	}

	public void setRating_person(int rating_person) {
		this.rating_person = rating_person;
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

	public int getRating_group() {
		return rating_group;
	}

	public void setRating_group(int rating_group) {
		this.rating_group = rating_group;
	}

	public String getGroup_info() {
		return group_info;
	}

	public void setGroup_info(String group_info) {
		this.group_info = group_info;
	}

}
