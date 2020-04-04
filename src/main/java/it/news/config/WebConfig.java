package it.news.config;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.handler.HandlerMappingIntrospector;

@Configuration
@EnableWebMvc
@ComponentScan({ "it.news.controller", "it.news.service", "it.news.data", "it.news.mapping" })
public class WebConfig implements WebMvcConfigurer {
	
	private Logger logger = LoggerFactory.getLogger(WebConfig.class);
	
	@Autowired
	Environment env;
	
	@Bean(name="multipartResolver") 
    public CommonsMultipartResolver getResolver() throws IOException{
        CommonsMultipartResolver resolver = new CommonsMultipartResolver();
        resolver.setMaxUploadSizePerFile(10000000);//10MB
        return resolver;
    }
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		
		// External folder of the project, http:localhost:8080/images/picture.png
		registry.addResourceHandler("/images/**").addResourceLocations(env.getProperty("path.images"));
		// Internal sources
		registry.addResourceHandler("**.css").addResourceLocations("/css/").setCachePeriod(86400);
		registry.addResourceHandler("**.html").addResourceLocations("/html/").setCachePeriod(86400);
		registry.addResourceHandler("/img/**").addResourceLocations("/img/").setCachePeriod(86400);
		registry.addResourceHandler("/fonts/**").addResourceLocations("/fonts/").setCachePeriod(86400);
		registry.addResourceHandler("**.js").addResourceLocations("/js/").setCachePeriod(86400);
	}
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedMethods("*").allowedHeaders("*").allowedOrigins(env.getProperty("origins.allowed"));
	}
	
	@Bean
	public HandlerMappingIntrospector mvcHandlerMappingIntrospector() {
		return new HandlerMappingIntrospector();
	}
	
}
