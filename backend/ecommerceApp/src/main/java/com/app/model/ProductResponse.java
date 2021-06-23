package com.app.model;

import java.util.ArrayList;
import java.util.List;

import com.app.entity.Image;
import com.app.entity.Seller;

public class ProductResponse {
	
	private int productId;
	private String productName;
	private String category;
	private String color;
	private long price;
	private int qty;
	private String descr;
	private Seller seller;
	private List<Image> images=new ArrayList<>();
	
	public ProductResponse(int productId, String productName, String category, String color, long price, int qty,
			String descr) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.category = category;
		this.color = color;
		this.price = price;
		this.qty = qty;
		this.descr = descr;
	}
	
	public ProductResponse(int productId, String productName, String category, String color, long price, int qty,
			String descr, Seller seller, List<Image> images) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.category = category;
		this.color = color;
		this.price = price;
		this.qty = qty;
		this.descr = descr;
		this.seller = seller;
		this.images=images;
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

	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller) {
		this.seller = seller;
	}

	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}
	
}
