package it.news.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.news.security.TokenHelper;
import it.news.security.model.User;
import it.news.service.SecurityService;

@RestController
public class SecurityController {
	
	@Autowired
	private TokenHelper tokenHelper;
	@Autowired
	private SecurityService service;
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	@CrossOrigin(origins = "*")
	public ResponseEntity<LoginResponse> login(@RequestParam String username, @RequestParam String password) {
		User user = service.login(username, password);
		if(user != null) {
			String token = tokenHelper.createToken(user);
			return ResponseEntity.ok().body(new LoginResponse(token));
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	}
	
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	@CrossOrigin(origins = "*")
	public ResponseEntity<LoginResponse> authenticate(@RequestParam String token) {
		User user = service.authenticate(token);
		if(user != null) {
			String jwtToken = tokenHelper.createToken(user);
			return ResponseEntity.ok().body(new LoginResponse(jwtToken));
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