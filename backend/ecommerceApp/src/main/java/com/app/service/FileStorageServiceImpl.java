package com.app.service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.app.FileStorageProperties;
import com.app.exception.FileNotFoundException;
import com.app.exception.FileStorageException;

@Service
public class FileStorageServiceImpl implements FileStorageService{

	private final Path fileLocation;

	@Autowired
	public FileStorageServiceImpl(FileStorageProperties fileProperties) {

		this.fileLocation = Paths.get(fileProperties.getUploadDir()).toAbsolutePath();

		try {
			Files.createDirectories(this.fileLocation);
		} catch (Exception e) {
			throw new FileStorageException("Could not be created");
		}

	}

	public String storeFile(MultipartFile file) {

		String filename = StringUtils.cleanPath(file.getOriginalFilename());
		try {
			Path target = this.fileLocation.resolve(filename);
			Files.copy(file.getInputStream(), target, StandardCopyOption.REPLACE_EXISTING);
			return filename;
		} catch (IOException e) {
			throw new FileStorageException("Colud not store file");
		}
	}

	public Resource loadFile(String filename) {

		try {
			Path filePath = this.fileLocation.resolve(filename).normalize();
			Resource resource = new UrlResource(filePath.toUri());
			if (resource.exists()) {
				return resource;
			} else {
				throw new FileNotFoundException("File Not Found");
			}

		} catch (MalformedURLException e) {
			throw new FileNotFoundException("File Not Found");

		}
	}

}
