package com.app.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Product;
import com.app.entity.User;
import com.app.exception.ExistingUserException;
import com.app.exception.NotFoundException;
import com.app.exception.UserNotFoundException;
import com.app.model.UserResponse;
import com.app.service.UserService;

@CrossOrigin
@RestController
@RequestMapping
public class LoginController{
	
	private UserService userService;
	
	public LoginController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@PostMapping("/register")
	public ResponseEntity<UserResponse> registration(@RequestBody User user) throws ExistingUserException{
		return new ResponseEntity<UserResponse>(userService.register(user), HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public ResponseEntity<UserResponse> login(@RequestBody User user) throws UserNotFoundException{
		return new ResponseEntity<UserResponse>(userService.validate(user),HttpStatus.OK);
	}
	
	@PostMapping("/addWish")
	public ResponseEntity<List<Product>> addWish(@RequestParam int userId, @RequestParam int productId) {
		return new ResponseEntity<List<Product>>(userService.addWish(userId,productId),HttpStatus.CREATED); 
	}
	
	@DeleteMapping("/removeWish")
	public ResponseEntity<List<Product>> removeWish(@RequestParam int userId, @RequestParam int productId) throws NotFoundException {
		return new ResponseEntity<List<Product>>(userService.removeWish(userId,productId),HttpStatus.OK); 
	}
	
	@GetMapping("/viewWish")
	public ResponseEntity<List<Product>> viewWish(@RequestParam int userId) throws NotFoundException {
		return new ResponseEntity<List<Product>>(userService.viewWish(userId),HttpStatus.OK); 
	}
	
	@PostMapping("/addCart")
	public ResponseEntity<List<Product>> addCart(@RequestParam int userId, @RequestParam int productId) {
		return new ResponseEntity<List<Product>>(userService.addCart(userId,productId),HttpStatus.CREATED); 
	}
	
	@DeleteMapping("/removeCart")
	public ResponseEntity<List<Product>> removeCart(@RequestParam int userId, @RequestParam int productId)  throws NotFoundException  {
		return new ResponseEntity<List<Product>>(userService.removeCart(userId,productId),HttpStatus.OK); 
	}
	
	@GetMapping("/viewCart")
	public ResponseEntity<List<Product>> viewCart(@RequestParam int userId) throws NotFoundException {
		return new ResponseEntity<List<Product>>(userService.viewCart(userId),HttpStatus.OK); 
	}
	
	
}
