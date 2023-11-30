package sns.model;

public class MemberDTO {

	private String Member_id; 
	private String pw;
	private String name;
	private String mail;
	private String birth;
	private String img;
	private String dis;
	private String gender; 
	private String location;
	private String rating_person;
	
	
	public MemberDTO(String Member_id, String pw, String name, String mail, String birth, String img, String dis,
			String gender, String location, String rating_person) {
		this.Member_id = Member_id;
		this.pw = pw;
		this.name = name;
		this.mail = mail;
		this.birth = birth;
		this.img = img;
		this.dis = dis;
		this.gender = gender;
		this.location = location;
		this.rating_person = rating_person;
	}
	
	public MemberDTO(String Member_id, String pw) {
		this.Member_id = Member_id;
		this.pw = pw;
	}
	
	public MemberDTO() {
		
	}

	
	public String getMember_id() {
		return Member_id;
	}

	public void setMember_id(String Member_id) {
		Member_id = Member_id;
	}

	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
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

	public String getRating_person() {
		return rating_person;
	}

	public void setRating_person(String rating_person) {
		this.rating_person = rating_person;
	}


	
}
