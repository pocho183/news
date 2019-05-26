package it.news.config;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebMvc
@ComponentScan({ "it.news.controller", "it.news.service", "it.news.data" })
public class WebConfig extends WebMvcConfigurerAdapter {
	
	@Autowired
	Environment env;
	
	@Bean(name="multipartResolver") 
    public CommonsMultipartResolver getResolver() throws IOException{
        CommonsMultipartResolver resolver = new CommonsMultipartResolver();
        resolver.setMaxUploadSizePerFile(15000000);//10MB
        return resolver;
    }
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		
		// External folder of the project, http:localhost:8080/images/picture.png
		//logger.info("Path of external sources: [" + env.getProperty("images") + "]");
		//registry.addResourceHandler("/images/**").addResourceLocations(env.getProperty("images"));
		// Internal sources
		registry.addResourceHandler("**.css").addResourceLocations("/css/").setCachePeriod(86400);
		registry.addResourceHandler("**.html").addResourceLocations("/html/").setCachePeriod(86400);
		registry.addResourceHandler("/img/**").addResourceLocations("/img/").setCachePeriod(86400);
		registry.addResourceHandler("/fonts/**").addResourceLocations("/fonts/").setCachePeriod(86400);
		registry.addResourceHandler("**.js").addResourceLocations("/js/").setCachePeriod(86400);
	}
}
