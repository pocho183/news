package it.news.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import it.news.data.PopulateDB;
import it.news.data.Publish;
import it.news.data.ReadVolumeAndNumber;
import it.news.domain.NewsEntity;
import it.news.model.ArticleModel;
import it.news.model.NumberModel;
import it.news.model.Paragraph;
import it.news.model.VolumeAndNumber;
import it.news.repository.NewsRepository;

@Service
@Transactional
public class PaperServiceImpl implements PaperService {
	
	private Logger logger = LoggerFactory.getLogger(PaperServiceImpl.class);

	@Autowired
	Environment env;
	@Autowired
	private PopulateDB populate;
	@Autowired
	private ReadVolumeAndNumber read;
	@Autowired
	private Publish publish;
	@Autowired
	private NewsRepository repositoryNews;
	
	@Override
	public VolumeAndNumber readVolumeAndNumber() {
		return read.readVolumeAndNumber();
	}
	
	public void saveNewspaper(ArticleModel obj) {
		populate.insertData(obj);
	}
	
	@Override
	public void publish(VolumeAndNumber obj) {
		publish.volumeAndNumber(obj);
	}
	
	
	@Override
	public List<ArticleModel> readNewspaper(NumberModel obj) {
		
		List<ArticleModel> listArticle = new ArrayList<ArticleModel>();
		List<NewsEntity> artEn = repositoryNews.chargeArticles(obj.getVolume(), obj.getNumber());
		// Setting up of nine articles
		for(int index = 0; index < 9; index++) {
			int index_article = index + 1;
			try {
				NewsEntity ae = artEn.get(index);
				// Filling article by position
				if(ae.getArticle() == index_article) {
					ArticleModel am = new ArticleModel();
					
					// Set Articles
					am.setArticle(ae.getArticle());
					am.setTitle(ae.getTitle());
					am.setSubtitle(ae.getSubtitle());
					
					Paragraph par = new Paragraph();
					par.setOne(ae.getP1());
					par.setTwo(ae.getP2());
					par.setThree(ae.getP3());
					
					am.addParagraph(par);
					
					am.setFigure(ae.getFigure());
					am.setNameFigure(ae.getNameFigure());
					am.setSign(ae.getSign());
					
					listArticle.add(am);
				}
			}catch(Exception ex) {
				ArticleModel am = new ArticleModel();
				am.setArticle(index_article);
				
				Paragraph par = new Paragraph();
				par.setOne("");
				par.setTwo("");
				par.setThree("");
				
				am.addParagraph(par);
				listArticle.add(am);
			}
		}
		return listArticle;
	}
	
	@Override
	public List<String> listImages() {
		
		List<String> list = new ArrayList<>();
		
		File folder = new File(env.getProperty("path.images"));
        String[] files = folder.list();
		for (String file : files)
            list.add(file);
		return list;
	}
	
	@Override
	public String deleteImage(String namePicture) {
		
		String path = env.getProperty("path.images") + File.separator + namePicture;	
        File file = new File(path);
        if(file.delete()){
            logger.debug("The file " + namePicture + " has been deleted with success !");
            return "OK";
        }
        else {
        	logger.warn("The file " + namePicture + " doesn't exist");
        	return "KO";
        }
	}
}
