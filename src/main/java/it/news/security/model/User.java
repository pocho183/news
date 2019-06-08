package it.news.security.model;

import java.util.ArrayList;
import java.util.List;

public class User {

	private String username;
	private String name;
	private String surname;
	private String email;
	private List<String> functions = new ArrayList<String>();
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public List<String> getFunctions() {
		return functions;
	}
	
	public void addFunction(String function) {
		if(!functions.contains(function))
			functions.add(function);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}