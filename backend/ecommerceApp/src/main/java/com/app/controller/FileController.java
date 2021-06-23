package com.app.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.FileStorageService;

@CrossOrigin
@RestController
@RequestMapping("/files")
public class FileController {
	
	@Autowired
	private FileStorageService fileStorageService;

	
	@GetMapping("/{filename:.*}")
	public ResponseEntity<Resource> downloadFile(@PathVariable String filename, HttpServletRequest request){
		
		Resource resource=fileStorageService.loadFile(filename);
		String type=null;
		try {
			type=request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
		}catch(IOException e) {
			System.out.println("Could not determine fileType");
		}
		
		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(type))
				.body(resource);
	}

}
