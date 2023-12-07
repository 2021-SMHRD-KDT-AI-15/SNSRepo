package sns.model;

public class GroupChangeDTO {
	
	private String group_id;
	private String new_input;
	
	public GroupChangeDTO(String group_id, String new_input) {
		this.group_id = group_id;
		this.new_input = new_input;
	}

	public String getGroup_id() {
		return group_id;
	}

	public void setGroup_id(String group_id) {
		this.group_id = group_id;
	}

	public String getNew_input() {
		return new_input;
	}

	public void setNew_input(String new_input) {
		this.new_input = new_input;
	}

	
	
	
	
	
}
