package it.news.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import it.news.domain.NumbersEntity;

@Repository
public interface NewspaperRepository extends JpaRepository<NumbersEntity, Long> {
	
	public List<NumbersEntity> findByVolumeAndNumero(String volume, String number);
	
	public List<NumbersEntity> findByStatus(Boolean status);
	
}
