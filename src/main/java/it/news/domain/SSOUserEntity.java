package it.news.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class SSOUserEntity {

	@Id
	@SequenceGenerator(name="SSOUserSequenceGenerator", allocationSize=1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="SSOUserSequenceGenerator" )
	public Long id;
	@Column(columnDefinition = "BIGINT")
	public Long applicationId;
	@Column(columnDefinition = "TEXT")
	public String authorities;
	@Column(columnDefinition = "TEXT")
	public String username;
	@Column(columnDefinition = "TEXT")
	public String password;
	@Column(columnDefinition = "TEXT")
	public String name;
	@Column(columnDefinition = "TEXT")
	public String surname;
	@Column(columnDefinition = "TEXT")
	public String email;
	@Column(columnDefinition = "boolean default true")
	public boolean enabled;
	
	public Long getId() {
		return id;
	}
	public Long getApplicationId() {
		return applicationId;
	}
	public void setApplicationId(Long applicationId) {
		this.applicationId = applicationId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
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
	public String getAuthorities() {
		return authorities;
	}
	public void setAuthorities(String authorities) {
		this.authorities = authorities;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public boolean isEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		SSOUserEntity other = (SSOUserEntity) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
