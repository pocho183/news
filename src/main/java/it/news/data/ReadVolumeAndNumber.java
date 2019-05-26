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
public class ReadVolumeAndNumber {
	
	@Autowired
	private NewspaperRepository repositoryNewspaper;
	@Autowired
	private Publish publish;

	public VolumeAndNumber readVolumeAndNumber() {
		List<NumbersEntity> topic = repositoryNewspaper.findByStatus(true);
		VolumeAndNumber edition = null;

		if(!topic.isEmpty()) {		
			/* Set Volume and number published */
			for(NumbersEntity objEntity : topic) {			
				edition = new VolumeAndNumber();
				edition.setVolume(objEntity.getVolume());
				edition.setNumber(objEntity.getNumero());
			}
		}
		/* At the first time start the DB, begin with number 1 volume 1*/
		else {
			edition = new VolumeAndNumber();
			edition.setVolume("1");
			edition.setNumber("1");
			publish.volumeAndNumber(edition);
		}
		return edition;
	}
}
