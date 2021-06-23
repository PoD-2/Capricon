package com.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Image {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int imgId;
	private String filename;
	private String fileUrl;
	private String fileType;
	private long size;
	@ManyToOne
	@JoinColumn(name="productId")
	private Product product;
	
	public Image() {
		super();
	}
	
	public Image(String filename, String fileUrl, String fileType, long size) {
		super();
		this.filename = filename;
		this.fileUrl = fileUrl;
		this.fileType = fileType;
		this.size = size;
	}
	
	public Image(String filename, String fileUrl, String fileType, long size, Product product) {
		super();
		this.filename = filename;
		this.fileUrl = fileUrl;
		this.fileType = fileType;
		this.size = size;
		this.product = product;
	}
	
	public int getImgId() {
		return imgId;
	}
	public void setImgId(int imgId) {
		this.imgId = imgId;
	}
	
	@JsonBackReference
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
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
