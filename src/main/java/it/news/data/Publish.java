package it.news.data;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.news.domain.NumbersEntity;
import it.news.model.VolumeAndNumber;
import it.news.repository.NewspaperRepository;

@Service
@Transactional
public class Publish {
	
	@Autowired
	private NewspaperRepository repositoryNewspaper;

	public void volumeAndNumber(VolumeAndNumber obj) {
		
		/* Un-publish all article */
		List<NumbersEntity> statusNews = repositoryNewspaper.findByStatus(true);
		if(!statusNews.isEmpty()) {		
			/* Set Volume and number published */
			for(NumbersEntity objEntity : statusNews) {
				objEntity.setStatus(false);
				repositoryNewspaper.save(objEntity);	
			}
		}
		
		List<NumbersEntity> topic = repositoryNewspaper.findByVolumeAndNumero(obj.getVolume(), obj.getNumber());

		if(topic.isEmpty()) {			
			NumbersEntity ne = new NumbersEntity();
			ne.setVolume(obj.getVolume());
			ne.setNumero(obj.getNumber());
			ne.setStatus(true);
			ne.setDate(obj.getDate());
			repositoryNewspaper.save(ne);		
		}
		else {
			for (NumbersEntity ne : topic) {
				ne.setVolume(obj.getVolume());
				ne.setNumero(obj.getNumber());
				ne.setStatus(true);
				ne.setDate(obj.getDate());
				repositoryNewspaper.save(ne);
			}
		}
	}
}
