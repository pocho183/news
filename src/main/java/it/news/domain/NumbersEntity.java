package it.news.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

@Entity
public class NumbersEntity {

	@Id
	@SequenceGenerator(name="NumbersSequenceGenerator", allocationSize=1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="NumbersSequenceGenerator")
	private Long id;
	@Column(columnDefinition = "boolean default false")
	private Boolean status;
	@Column(columnDefinition = "TEXT")
	private String volume;
	@Column(columnDefinition = "TEXT")
	private String numero;
	@Column(columnDefinition = "TEXT")
	private String date;
	@OneToMany(mappedBy="numbers", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<NewsEntity> news = new ArrayList<NewsEntity>();
	
	public Long getId() {
		return id;
	}	
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	public String getVolume() {
		return volume;
	}
	public void setVolume(String volume) {
		this.volume = volume;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public List<NewsEntity> getNews() {
		return news;
	}
	public void setNews(List<NewsEntity> news) {
		this.news = news;
	}
	public void addNews(NewsEntity news) {
		if(!this.news.contains(news)) {
			news.setNumbers(this);
			this.news.add(news);
		}
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		NumbersEntity other = (NumbersEntity) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
