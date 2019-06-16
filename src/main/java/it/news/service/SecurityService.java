package it.news.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import it.news.controller.SecurityController;
import it.news.domain.SSOUserEntity;
import it.news.repository.SSOUserRepository;
import it.news.security.model.User;

@Service
public class SecurityService implements UserDetailsService {
	
	private Logger logger = LoggerFactory.getLogger(SecurityService.class);
	
	@Value(value = "${app.code}")
	private String applicationCode;
//	@Autowired
//	private ObjectMapper objectMapper;
	@Autowired
	private SSOUserRepository repositorySSOUser;
	
	public User login(String username, String password) {
		try {
			SSOUserEntity credentials = repositorySSOUser.findByUsernameAndPassword(username, password);
			SSOUser remoteUser = new SSOUser();
			remoteUser.setId(credentials.getId());
			remoteUser.setApplicationId(credentials.getApplicationId());
			remoteUser.setUsername(credentials.getUsername());
			remoteUser.setName(credentials.getName());
			remoteUser.setSurname(credentials.getSurname());
			remoteUser.setEmail(credentials.getEmail());
			return createUser(remoteUser);
		} catch(Exception e) {
			logger.error("Login not authorized !");
		}
		return null;
	}
	
	public User authenticate(String token) {
//		HttpUriRequest request = RequestBuilder.post(cameraSSO + "/authenticate").addParameter("token", token).addParameter("applicationCode", applicationCode).build();
//		try {
//			CloseableHttpResponse response = HttpClients.createDefault().execute(request);
//			HttpEntity entity = response.getEntity();
//			SSOUser remoteUser = objectMapper.readValue(entity.getContent(), SSOUser.class);
//			return createUser(remoteUser);
//		} catch(Exception e) {
//			e.printStackTrace();
//		}
		return null;
	}
	
	private User createUser(SSOUser remoteUser) {
		User user = new User();
		user.setName(remoteUser.name);
		user.setSurname(remoteUser.surname);
		user.setUsername(remoteUser.username);
		user.setEmail(remoteUser.email);
		return user;
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) {
//		HttpUriRequest request = RequestBuilder.get(cameraSSO + "/load/" + username).build();
//		try {
//			CloseableHttpResponse response = HttpClients.createDefault().execute(request);
//			HttpEntity entity = response.getEntity();
//			SSOUser remoteUser = objectMapper.readValue(entity.getContent(), SSOUser.class);
//			Account account = new Account(remoteUser.username, "", "");
//			return account;
//		} catch(Exception e) {
//			e.printStackTrace();
//		}
		return null;
	}
	
	public static class SSOUser {
		public Long id;
		public Long applicationId;
		public String username;
		public String name;
		public String surname;
		public String email;
		public boolean enabled;
		
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
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
		public boolean isEnabled() {
			return enabled;
		}
		public void setEnabled(boolean enabled) {
			this.enabled = enabled;
		}
	}
}