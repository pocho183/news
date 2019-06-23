package it.news.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import it.news.model.ArticleModel;
import it.news.model.NumberModel;
import it.news.model.VolumeAndNumber;
import it.news.service.PaperService;

@Controller
public class DispatcherWeb {
	
	private Logger logger = LoggerFactory.getLogger(DispatcherWeb.class);
	
	@Autowired
	private PaperService service;
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	@CrossOrigin(origins = "*")
	public String load () {
		return "home.html";
	}
	
	@RequestMapping(value = "/readVolumeAndNumber", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "*")
	public ResponseEntity<VolumeAndNumber> readVolumeAndNumber() {
		logger.debug("Called readVolumeAndNumber");
		VolumeAndNumber obj = service.readVolumeAndNumber();
		return new ResponseEntity<VolumeAndNumber>(obj, HttpStatus.OK);
    }
	
	@RequestMapping(value = "/readArticle", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "*")
	public ResponseEntity<List<ArticleModel>> readArticle(@RequestBody NumberModel obj) {
		logger.debug("Called readArticle");
		List<ArticleModel> am = service.readNewspaper(obj);
		return new ResponseEntity<List<ArticleModel>>(am, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/chargeDB", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "*")
	public ResponseEntity<Object> chargeDB(@RequestBody ArticleModel obj) {
		logger.debug("Called ChargeDB");
		service.saveNewspaper(obj);
		return new ResponseEntity<>(HttpStatus.OK);
    }
	
	@RequestMapping(value = "/publish", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "*")
	public ResponseEntity<VolumeAndNumber> publish(@RequestBody VolumeAndNumber obj) {
		logger.debug("Called Publish");
		service.publish(obj);
		return new ResponseEntity<VolumeAndNumber>(obj,HttpStatus.OK);
    }
	
	@RequestMapping(value = "/listImages", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "*")
	public ResponseEntity<List<String>> listImages() {
		logger.debug("Called listImages");
		List<String> list = service.listImages();
		return new ResponseEntity<List<String>>(list, HttpStatus.OK);
    }
	
	@RequestMapping(value = "/deleteImage", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "*")
	public ResponseEntity<Object> deleteImage(@RequestBody String namePicture) {
		logger.debug("Called deletePicture");
		service.deleteImage(namePicture);
		return new ResponseEntity<>(HttpStatus.OK);
    }
}