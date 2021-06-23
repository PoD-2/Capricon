package com.app.entity;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(uniqueConstraints= {@UniqueConstraint(columnNames= {"userId","emailId"})})
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int userId;
	private String userName;
	private String password;
	private String emailId;
	private String phoneNumber;
	@ManyToMany(cascade=CascadeType.ALL,targetEntity=Product.class)
	@JoinColumn(name="userId")
	private List<Product> wish=new ArrayList<>();
	@ManyToMany(cascade=CascadeType.ALL,targetEntity=Product.class)
	@JoinColumn(name="userId")
	private List<Product> cart=new ArrayList<>();
	public User() {
		super();
	}
	
	public User(String userName,  String emailId, String password, String phoneNumber) {
		super();
		this.userName = userName;
		this.password = password;
		this.emailId = emailId;
		this.phoneNumber = phoneNumber;
	}
	
	public User(String userName, String password, String emailId, String phoneNumber, List<Product> wish,
			List<Product> cart) {
		super();
		this.userName = userName;
		this.password = password;
		this.emailId = emailId;
		this.phoneNumber = phoneNumber;
		this.wish = wish;
		this.cart = cart;
	}

	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public List<Product> getWish() {
		return wish;
	}

	public void setWish(List<Product> wish) {
		this.wish = wish;
	}
	public List<Product> getCart() {
		return cart;
	}

	public void setCart(List<Product> cart) {
		this.cart = cart;
	}

	public void addWish(Product product) {
		this.wish.add(product);
		
	}
	public void addCart(Product product) {
		this.cart.add(product);
		
	}

	public void removeWish(Product product) {
		this.wish.remove(product);
		
	}
	
	public void removeCart(Product product) {
		this.cart.remove(product);
		
	}
	
}
