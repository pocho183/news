package it.news.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

@Entity
public class NewsEntity implements Serializable {
	
private static final long serialVersionUID = -1692574369658447660L;
	
	@Id
	@SequenceGenerator(name="NewsSequenceGenerator", allocationSize=1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="NewsSequenceGenerator" )
	private Long id;
	@Column(columnDefinition = "BIGINT")
	private Integer article;
	@Column(columnDefinition = "TEXT")
	private String title;
	@Column(columnDefinition = "TEXT")
	private String subtitle;
	@Column(columnDefinition = "TEXT")
	private String p1;
	@Column(columnDefinition = "TEXT")
	private String p2;
	@Column(columnDefinition = "TEXT")
	private String p3;
	private String figure;
	@Column(columnDefinition = "TEXT")
	private String nameFigure;
	@Column(columnDefinition = "TEXT")
	private String sign;
	@ManyToOne
	private NumbersEntity numbers;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
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
	public String getP1() {
		return p1;
	}
	public void setP1(String p1) {
		this.p1 = p1;
	}
	public String getP2() {
		return p2;
	}
	public void setP2(String p2) {
		this.p2 = p2;
	}
	public String getP3() {
		return p3;
	}
	public void setP3(String p3) {
		this.p3 = p3;
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
	public NumbersEntity getNumbers() {
		return numbers;
	}
	public void setNumbers(NumbersEntity numbers) {
		this.numbers = numbers;
	}
}
