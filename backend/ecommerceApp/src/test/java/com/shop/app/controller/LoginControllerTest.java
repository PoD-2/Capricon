package com.shop.app.controller;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import com.app.controller.LoginController;
import com.app.entity.Product;
import com.app.entity.User;
import com.app.exception.ExistingUserException;
import com.app.exception.NotFoundException;
import com.app.exception.UserNotFoundException;
import com.app.model.ProductResponse;
import com.app.model.UserResponse;
import com.app.service.UserService;


class LoginControllerTest {
	
	@InjectMocks
	LoginController loginController;
	
	@Mock
	UserService userService;
	
	User user=new User("b","b@gmail.com","b123","987654321");
	UserResponse userResponse=new UserResponse("b","b@gmail.com","987654321");
	
	ArrayList<Product> p=new ArrayList<>();
	Product p1=new Product("Macbook","electronics","pink",900,3,"Laptop");
	ProductResponse p2=new ProductResponse(1,"Macbook","electronics","pink",900,3,"Laptop");
	
	
	@BeforeEach
	void setUp() throws Exception {
		
		MockitoAnnotations.initMocks(this);
	}


	@Test
	final void testRegistration() throws ExistingUserException {
		
		when(userService.register(user)).thenReturn(userResponse);
		ResponseEntity<UserResponse> user1=loginController.registration(user);
		assertEquals(user.getEmailId(),user1.getBody().getEmailId());
		assertEquals(user.getPhoneNumber(),user1.getBody().getPhoneNumber());
		assertEquals(user.getUserName(),user1.getBody().getUserName());
		
	}
	
	@Test
	final void testRegistration_Exception() throws ExistingUserException {
		
		when(userService.register(user)).thenThrow(ExistingUserException.class);
		assertThrows(ExistingUserException.class,()->loginController.registration(user));
	}

	@Test
	final void testLogin() throws UserNotFoundException {
		
		when(userService.validate(user)).thenReturn(userResponse);
		ResponseEntity<UserResponse> user1=loginController.login(user);
		assertEquals(user.getEmailId(),user1.getBody().getEmailId());
		assertEquals(user.getPhoneNumber(),user1.getBody().getPhoneNumber());
		assertEquals(user.getUserName(),user1.getBody().getUserName());
	}
	
	@Test
	final void testLogin_Exception() throws UserNotFoundException {
		
		when(userService.validate(user)).thenThrow(UserNotFoundException.class);
		assertThrows(UserNotFoundException.class,()->loginController.login(user));
		
	}

	@Test
	final void testAddWish() {
		p.add(p1);
		when(userService.addWish(1,1)).thenReturn(p);
		ResponseEntity<List<Product>> wish=loginController.addWish(1,1);
		assertEquals(wish.getBody().get(0).getProductName(),p1.getProductName());
		assertEquals(wish.getBody().get(0).getCategory(),p1.getCategory());
		assertEquals(wish.getBody().get(0).getColor(),p1.getColor());
		assertEquals(wish.getBody().get(0).getDescr(),p1.getDescr());
		assertEquals(wish.getBody().get(0).getPrice(),p1.getPrice());
		assertEquals(wish.getBody().get(0).getQty(),p1.getQty());
	}

	@Test
	final void testRemoveWish() throws NotFoundException {
		when(userService.removeWish(1, 1)).thenReturn(null);
		assertNull(loginController.removeWish(1, 1).getBody());
	}
	
	@Test
	final void testRemoveWish_Exception() throws NotFoundException {
		when(userService.removeWish(1, 1)).thenThrow(NotFoundException.class);
		assertThrows(NotFoundException.class, ()->loginController.removeWish(1, 1));
	}

	@Test
	final void testViewWish() throws NotFoundException {
		p.add(p1);
		when(userService.viewWish(1)).thenReturn(p);
		ResponseEntity<List<Product>> wish=loginController.viewWish(1);
		assertEquals(wish.getBody().get(0).getProductName(),p1.getProductName());
		assertEquals(wish.getBody().get(0).getCategory(),p1.getCategory());
		assertEquals(wish.getBody().get(0).getColor(),p1.getColor());
		assertEquals(wish.getBody().get(0).getDescr(),p1.getDescr());
		assertEquals(wish.getBody().get(0).getPrice(),p1.getPrice());
		assertEquals(wish.getBody().get(0).getQty(),p1.getQty());
	}
	
	@Test
	final void testViewWish_Exception() throws NotFoundException {
		when(userService.viewWish(1)).thenThrow(NotFoundException.class);
		assertThrows(NotFoundException.class, ()->loginController.viewWish(1));
	}

	@Test
	final void testAddCart() {
		p.add(p1);
		when(userService.addCart(1,1)).thenReturn(p);
		ResponseEntity<List<Product>> cart=loginController.addCart(1,1);
		assertEquals(cart.getBody().get(0).getProductName(),p1.getProductName());
		assertEquals(cart.getBody().get(0).getCategory(),p1.getCategory());
		assertEquals(cart.getBody().get(0).getColor(),p1.getColor());
		assertEquals(cart.getBody().get(0).getDescr(),p1.getDescr());
		assertEquals(cart.getBody().get(0).getPrice(),p1.getPrice());
		assertEquals(cart.getBody().get(0).getQty(),p1.getQty());
	}

	@Test
	final void testRemoveCart() throws NotFoundException {
		when(userService.removeCart(1, 1)).thenReturn(null);
		assertNull(loginController.removeCart(1, 1).getBody());
	}

	@Test
	final void testRemoveCart_Exception() throws NotFoundException {
		when(userService.removeCart(1, 1)).thenThrow(NotFoundException.class);
		assertThrows(NotFoundException.class,()->loginController.removeCart(1, 1));
	}
	
	@Test
	final void testViewCart() throws NotFoundException {
		p.add(p1);
		when(userService.viewCart(1)).thenReturn(p);
		ResponseEntity<List<Product>> cart=loginController.viewCart(1);
		assertEquals(cart.getBody().get(0).getProductName(),p1.getProductName());
		assertEquals(cart.getBody().get(0).getCategory(),p1.getCategory());
		assertEquals(cart.getBody().get(0).getColor(),p1.getColor());
		assertEquals(cart.getBody().get(0).getDescr(),p1.getDescr());
		assertEquals(cart.getBody().get(0).getPrice(),p1.getPrice());
		assertEquals(cart.getBody().get(0).getQty(),p1.getQty());
	}


	@Test
	final void testViewCart_Exception() throws NotFoundException {
		when(userService.viewCart(1)).thenThrow(NotFoundException.class);
		assertThrows(NotFoundException.class,()->loginController.viewCart(1));
	}

}
