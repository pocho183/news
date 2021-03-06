package it.news.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.security.web.authentication.preauth.RequestHeaderAuthenticationFilter;

import it.news.controller.DispatcherWeb;

public class TokenAuthenticationFilter extends RequestHeaderAuthenticationFilter {

	private Logger logger = LoggerFactory.getLogger(TokenAuthenticationFilter.class);

	@Value("${jwt.header}")
	private String AUTH_HEADER;
	@Autowired
	TokenHelper tokenHelper;
	@Autowired
	UserDetailsService accountService;

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws ServletException, IOException {
		String error = "";
		String authToken = ((HttpServletRequest)request).getHeader(AUTH_HEADER);
		System.out.println("TOKEN [" + authToken + "]");
		if(authToken != null) {
			// Get username from token
			String username = tokenHelper.getUsernameFromToken(authToken);
			logger.debug("Username from token [" + username + "]");
			if(username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
				UserDetails userDetails = accountService.loadUserByUsername(username);
				if(tokenHelper.validateToken(authToken, userDetails)) {
					TokenBasedAuthentication authentication = new TokenBasedAuthentication(userDetails);
					authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails((HttpServletRequest)request));
					SecurityContextHolder.getContext().setAuthentication(authentication);
				}
			} else {
				error = "Username from token can't be found.";
			}
		} else {
			error = "Authentication failed - no Bearer token provided.";
		}
		if(!error.equals("")) {
			logger.error(error);
		}
		filterChain.doFilter(request, response);
	}
}