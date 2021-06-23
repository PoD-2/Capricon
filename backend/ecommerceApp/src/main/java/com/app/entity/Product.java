package com.app.entity;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int productId;
	private String productName;
	private String category;
	private String color;
	private long price;
	private int qty;
	private String descr;
	@ManyToOne
	@JoinColumn(name="sellerId")
	private Seller seller;
	@OneToMany(cascade=CascadeType.ALL, mappedBy="product")
	private List<Image> images=new ArrayList<>();
	

	public Product() {
		super();
	}
	
	public Product(String productName, String category, String color, long price, int qty, String descr) {
		super();
		this.productName = productName;
		this.category = category;
		this.color = color;
		this.price = price;
		this.qty = qty;
		this.descr = descr;
		
	}

	public Product(String productName, String category, String color, long price, int qty, String descr, 
			Seller seller) {
		super();
		this.productName = productName;
		this.category = category;
		this.color = color;
		this.price = price;
		this.qty = qty;
		this.descr = descr;
		
		this.seller = seller;
	}
	
	
	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public String getDescr() {
		return descr;
	}

	public void setDescr(String descr) {
		this.descr = descr;
	}

	@JsonBackReference
	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller) {
		this.seller = seller;
	}


	@JsonManagedReference
	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}

	public void addImage(Image image) {
		this.images.add(image);
		
	}
	
	
}
