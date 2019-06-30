package it.news.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.news.security.TokenHelper;
import it.news.security.model.Account;
import it.news.security.model.User;
import it.news.service.SecurityService;

@RestController
public class SecurityController {
	
	private Logger logger = LoggerFactory.getLogger(SecurityController.class);
	
	@Autowired
	private TokenHelper tokenHelper;
	@Autowired
	private SecurityService service;
	
	@RequestMapping(value = "/postLogin", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "*")
	public ResponseEntity<LoginResponse> login(@RequestBody Account login) {
		logger.debug("Called login");
		User user = service.login(login.getUsername(), login.getPassword());
		logger.debug("Called username " + user.getUsername());
		if(user != null) {
			String token = tokenHelper.createToken(user);
			logger.debug("Token " + token);
			return ResponseEntity.ok().body(new LoginResponse(token));
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	}

	private static class LoginResponse {
		
	    public String token;
	
	    public LoginResponse(final String token) {
	        this.token = token;
	    }    
	}
}