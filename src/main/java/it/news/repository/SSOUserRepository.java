package it.news.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.news.domain.SSOUserEntity;

@Repository
public interface SSOUserRepository extends JpaRepository<SSOUserEntity, Long> {
	
	public SSOUserEntity findByUsernameAndPassword(String username, String password);

}
