package it.news.model;

import java.util.List;

public class NumberModel {

	private String volume;
	private String number;
	private List<ArticleModel> articles;
	
	public String getVolume() {
		return volume;
	}
	public void setVolume(String volume) {
		this.volume = volume;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public List<ArticleModel> getArticles() {
		return articles;
	}
	public void setArticles(List<ArticleModel> articles) {
		this.articles = articles;
	}
	
}
