package it.news.service;

import java.util.List;

import it.news.model.ArticleModel;
import it.news.model.NumberModel;
import it.news.model.VolumeAndNumber;

public interface PaperService {
	
	public VolumeAndNumber readVolumeAndNumber();
	
	public List<ArticleModel> readNewspaper(NumberModel obj);
	
	public void saveNewspaper(ArticleModel obj);
	
	public void publish(VolumeAndNumber obj);
	
	public List<String> listImages();

	String deleteImage(String namePicture);
}
