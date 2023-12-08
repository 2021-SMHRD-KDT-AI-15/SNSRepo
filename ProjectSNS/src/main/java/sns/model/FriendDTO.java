package sns.model;

public class FriendDTO {
	
	private String member_id; 
	private String name;
	private String mail;
	private String birth;
	private String img;
	private String dis;
	private String gender; 
	private String location;
	private int rating_person;
	private String friend_id;
	
	public FriendDTO(String member_id, String name, String mail, String birth, String img, String dis, String gender,
			String location, int rating_person) {
		this.member_id = member_id;
		this.name = name;
		this.mail = mail;
		this.birth = birth;
		this.img = img;
		this.dis = dis;
		this.gender = gender;
		this.location = location;
		this.rating_person = rating_person;
	}
	
	public FriendDTO(String member_id, String friend_id) {
		this.member_id = member_id;
		this.friend_id = friend_id;
	}

	public String getMember_id() {
		return member_id;
	}
	public void setMember_id(String member_id) {
		this.member_id = member_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getBirth() {
		return birth;
	}
	public void setBirth(String birth) {
		this.birth = birth;
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
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public int getRating_person() {
		return rating_person;
	}
	public void setRating_person(int rating_person) {
		this.rating_person = rating_person;
	}

	public String getFriend_id() {
		return friend_id;
	}

	public void setFriend_id(String friend_id) {
		this.friend_id = friend_id;
	}
	
}

