package it.news.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import it.news.domain.NewsEntity;

@Repository
public interface NewsRepository extends JpaRepository<NewsEntity, Long> {

	@Query(value = "SELECT a.* FROM numbersentity n INNER JOIN newsentity a on "
			+ "n.id = (select n.id from numbersentity n where n.volume = ?1 AND n.numero = ?2)  "
			+ "AND n.id = a.numbers_id order by a.article asc", nativeQuery=true)
	public List<NewsEntity> chargeArticles(String volume, String number);
}
