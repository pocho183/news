package it.news.mapping;

import static java.lang.annotation.RetentionPolicy.RUNTIME;
import java.lang.annotation.Retention;

@Retention(RUNTIME)
public @interface FieldOverride {

	FieldBinding origin();
	
	String override();
}