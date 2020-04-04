package it.news.model;

import java.util.ArrayList;
import java.util.List;

import it.news.domain.NewsEntity;
import it.news.mapping.TypeBinding;

@TypeBinding(binding = NewsEntity.class)
public class ArticleModel {
	
	private String volume;
	private String number;
	private Integer article;
	private String title;
	private String subtitle;
	private List<Paragraph> paragraph = new ArrayList<>();
	private String figure;
	private String nameFigure;
	private String sign;
	
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
	public Integer getArticle() {
		return article;
	}
	public void setArticle(Integer article) {
		this.article = article;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getSubtitle() {
		return subtitle;
	}
	public void setSubtitle(String subtitle) {
		this.subtitle = subtitle;
	}
	public List<Paragraph> getParagraph() {
		return paragraph;
	}
	public void setParagraph(List<Paragraph> paragraph) {
		this.paragraph = paragraph;
	}
	public String getFigure() {
		return figure;
	}
	public void setFigure(String figure) {
		this.figure = figure;
	}
	public String getNameFigure() {
		return nameFigure;
	}
	public void setNameFigure(String nameFigure) {
		this.nameFigure = nameFigure;
	}
	public String getSign() {
		return sign;
	}
	public void setSign(String sign) {
		this.sign = sign;
	}	
	public void addParagraph(Paragraph par) {
		paragraph.add(par);
	}
}
