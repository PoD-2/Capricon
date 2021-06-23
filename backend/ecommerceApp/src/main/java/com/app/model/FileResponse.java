package com.app.model;

public class FileResponse {
	
	private String filename;
	private String fileUrl;
	private String fileType;
	private long size;
	public FileResponse(String filename, String fileUrl, String fileType, long size) {
		super();
		this.filename = filename;
		this.fileUrl = fileUrl;
		this.fileType = fileType;
		this.size = size;
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public String getFileUrl() {
		return fileUrl;
	}
	public void setFileUrl(String fileUrl) {
		this.fileUrl = fileUrl;
	}
	public String getFileType() {
		return fileType;
	}
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}
	public long getSize() {
		return size;
	}
	public void setSize(long size) {
		this.size = size;
	}
	
	
	

}
