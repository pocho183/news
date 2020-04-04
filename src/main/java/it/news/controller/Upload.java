package it.news.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.servlet.annotation.MultipartConfig;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
@MultipartConfig
public class Upload {
	
	@Autowired
	Environment env;
	
	private Logger logger = LoggerFactory.getLogger(DispatcherWeb.class);
	
	@RequestMapping(value = "/upload", method = RequestMethod.POST)
	@ResponseBody
	@CrossOrigin(origins = "*")
	public ResponseEntity<Object> singleFileUpload(@RequestParam("file") MultipartFile file) {
		if (file != null && file.isEmpty()) {
			logger.error("File not exist !");
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		else {
			try {
				// Get the file and save it somewhere
				byte[] bytes = file.getBytes();
				Path path = Paths.get( env.getProperty("path.images") + File.separator + file.getOriginalFilename());
				Files.write(path, bytes);
				return new ResponseEntity<>(HttpStatus.OK);
			} catch (IOException e) {
				e.printStackTrace();
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}	
	}
}


