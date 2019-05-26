package it.news.data;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.news.domain.NewsEntity;
import it.news.domain.NumbersEntity;
import it.news.model.ArticleModel;
import it.news.model.Paragraph;
import it.news.repository.NewspaperRepository;

@Service
@Transactional
public class PopulateDB {

	@Autowired
	private NewspaperRepository repositoryNewspaper;

	public void insertData(ArticleModel obj) {

		boolean semaphore = false;
		List<NumbersEntity> numbNews = repositoryNewspaper.findByVolumeAndNumero(obj.getVolume(), obj.getNumber());

		if (numbNews.isEmpty()) {
			
			writeAll(obj);			
		} 
		else {
			for (NumbersEntity ne : numbNews) {

				List<NewsEntity> newsEn = ne.getNews();
				
				if (newsEn.isEmpty()) {

					NewsEntity news = new NewsEntity();
					news.setArticle(obj.getArticle());
					news.setTitle(obj.getTitle());
					news.setSubtitle(obj.getSubtitle());

					List<Paragraph> paragraph = (obj.getParagraph());
					for (Paragraph par : paragraph) {
						news.setP1(par.getOne());
						news.setP2(par.getTwo());
						news.setP3(par.getThree());
					}

					news.setFigure(obj.getFigure());
					news.setNameFigure(obj.getNameFigure());
					news.setSign(obj.getSign());
					ne.addNews(news);

					repositoryNewspaper.save(ne);

				} else {

					for (NewsEntity news : newsEn) {

						if (!semaphore) {
							if (news.getArticle().equals(obj.getArticle())) {
								news.setArticle(obj.getArticle());
								news.setTitle(obj.getTitle());
								news.setSubtitle(obj.getSubtitle());

								List<Paragraph> paragraph = (obj.getParagraph());
								for (Paragraph par : paragraph) {
									news.setP1(par.getOne());
									news.setP2(par.getTwo());
									news.setP3(par.getThree());
								}

								news.setFigure(obj.getFigure());
								news.setNameFigure(obj.getNameFigure());
								news.setSign(obj.getSign());
								ne.addNews(news);

								repositoryNewspaper.save(ne);
								semaphore = true;
							}
						}
					}
					if(!semaphore) {
						
						NewsEntity news = new NewsEntity();
						news.setArticle(obj.getArticle());
						news.setTitle(obj.getTitle());
						news.setSubtitle(obj.getSubtitle());

						List<Paragraph> paragraph = (obj.getParagraph());
						for (Paragraph par : paragraph) {
							news.setP1(par.getOne());
							news.setP2(par.getTwo());
							news.setP3(par.getThree());
						}

						news.setFigure(obj.getFigure());
						news.setNameFigure(obj.getNameFigure());
						news.setSign(obj.getSign());
						ne.addNews(news);

						repositoryNewspaper.save(ne);
					}
					semaphore = false;
				}
			}
		}
	}
	
	/** Write all the article with volume and number **/
	
	public void writeAll(ArticleModel obj) {
		
		NumbersEntity ne = new NumbersEntity();
		ne.setVolume(obj.getVolume());
		ne.setNumero(obj.getNumber());
		ne.setStatus(false);

		NewsEntity news = new NewsEntity();
		news.setArticle(obj.getArticle());
		news.setTitle(obj.getTitle());
		news.setSubtitle(obj.getSubtitle());

		List<Paragraph> paragraph = (obj.getParagraph());
		for (Paragraph par : paragraph) {
			news.setP1(par.getOne());
			news.setP2(par.getTwo());
			news.setP3(par.getThree());
		}

		news.setFigure(obj.getFigure());
		news.setNameFigure(obj.getNameFigure());
		news.setSign(obj.getSign());
		ne.addNews(news);

		repositoryNewspaper.save(ne);
	}
}
