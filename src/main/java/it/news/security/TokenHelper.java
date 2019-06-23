package it.news.security;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.TextCodec;
import it.news.controller.SecurityController;
import it.news.security.model.Account;
import it.news.security.model.User;

@Component
public class TokenHelper {

	private Logger logger = LoggerFactory.getLogger(TokenHelper.class);
	
	@Value("${app.name}")
	private String APP_NAME;
	@Value("${jwt.secret}")
	private String SECRET;
	@Value("${jwt.expires_in}")
	private int EXPIRES_IN;
	private SignatureAlgorithm SIGNATURE_ALGORITHM = SignatureAlgorithm.HS256;

	public String getUsernameFromToken(String token) {
		String username;
		try {
			final Claims claims = getClaimsFromToken(token);
			username = claims.getSubject();
		} catch (Exception e) {
			username = null;
		}
		return username;
	}

	public String generateToken(String username) {
		String jws = Jwts.builder().setIssuer(APP_NAME).setSubject(username).setIssuedAt(generateCurrentDate()).setExpiration(generateExpirationDate()).signWith(SIGNATURE_ALGORITHM, TextCodec.BASE64.encode(SECRET)).compact();
		return jws;
	}

	public String createToken(User user) {
		Map<String, Object> claims = new HashMap<String, Object>();
		claims.put("user", user);
		return Jwts.builder().setIssuer(APP_NAME).setSubject(user.getUsername()).addClaims(claims).setIssuedAt(generateCurrentDate()).setExpiration(generateExpirationDate()).signWith(SIGNATURE_ALGORITHM, TextCodec.BASE64.encode(SECRET)).compact();
	}

	public Claims getClaimsFromToken(String token) {
		Claims claims;
		try {
			claims = Jwts.parser().setSigningKey(TextCodec.BASE64.encode(SECRET)).parseClaimsJws(token.substring(token.indexOf(" ")).trim()).getBody();
		} catch (Exception e) {
			claims = null;
			e.printStackTrace();
		}
		return claims;
	}

	private long getCurrentTimeMillis() {
		return System.currentTimeMillis();
	}

	private Date generateCurrentDate() {
		return new Date(getCurrentTimeMillis());
	}

	private Date generateExpirationDate() {
		return new Date(getCurrentTimeMillis() + EXPIRES_IN * 1000);
	}

	public Boolean validateToken(String token, UserDetails userDetails) {
		Account user = (Account)userDetails;
		final String username = getUsernameFromToken(token);
		return (username.equals(user.getUsername()) && !(isTokenExpired(token))
				/*
				 * && !(this.
				 * isCreatedBeforeLastPasswordReset(
				 * created,
				 * user.getLastPasswordReset()))
				 */);
	}

	public Date getCreatedDateFromToken(String token) {
		Date created;
		try {
			final Claims claims = getClaimsFromToken(token);
			created = new Date((Long)claims.get("created"));
		} catch (Exception e) {
			created = null;
		}
		return created;
	}

	public Date getExpirationDateFromToken(String token) {
		Date expiration;
		try {
			final Claims claims = getClaimsFromToken(token);
			expiration = claims.getExpiration();
		} catch (Exception e) {
			expiration = null;
		}
		return expiration;
	}

	private Boolean isTokenExpired(String token) {
		final Date expiration = getExpirationDateFromToken(token);
		return expiration.before(generateCurrentDate());
	}

	private Boolean isCreatedBeforeLastPasswordReset(Date created, Date lastPasswordReset) {
		return (lastPasswordReset != null && created.before(lastPasswordReset));
	}
}