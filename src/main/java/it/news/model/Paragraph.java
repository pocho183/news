package it.news.model;

import it.news.domain.NewsEntity;
import it.news.mapping.FieldBinding;
import it.news.mapping.TypeBinding;

@TypeBinding(binding = NewsEntity.class)
public class Paragraph {
	@FieldBinding(binding = "p1")
	private String one;
	@FieldBinding(binding = "p2")
	private String two;
	@FieldBinding(binding = "p3")
	private String three;
	
	public String getOne() {
		return one;
	}
	public void setOne(String one) {
		this.one = one;
	}
	public String getTwo() {
		return two;
	}
	public void setTwo(String two) {
		this.two = two;
	}
	public String getThree() {
		return three;
	}
	public void setThree(String three) {
		this.three = three;
	}
}
