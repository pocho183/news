package it.news.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import it.news.domain.SSOUserEntity;
import it.news.model.SSOUser;
import it.news.repository.SSOUserRepository;
import it.news.security.model.User;

@Service
public class SecurityService implements UserDetailsService {
	
	private Logger logger = LoggerFactory.getLogger(SecurityService.class);
	
	@Value(value = "${app.code}")
	private String applicationCode;
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
	
	private User createUser(SSOUser remoteUser) {
		User user = new User();
		user.setName(remoteUser.name);
		user.setSurname(remoteUser.surname);
		user.setUsername(remoteUser.username);
		user.setEmail(remoteUser.email);
		return user;
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		SSOUserEntity credentials = repositorySSOUser.findByUsername(username);
		if (credentials == null) {
	        throw new UsernameNotFoundException(username);
	    }
	    return new User(credentials.getUsername());
	}
}