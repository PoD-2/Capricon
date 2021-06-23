package com.shop.app.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.dao.DataIntegrityViolationException;

import com.app.entity.Product;
import com.app.entity.User;
import com.app.exception.ExistingUserException;
import com.app.exception.NotFoundException;
import com.app.exception.UserNotFoundException;
import com.app.model.ProductResponse;
import com.app.model.UserResponse;
import com.app.repository.ProductRepository;
import com.app.repository.UserRepository;
import com.app.service.UserServiceImpl;

class UserServiceImplTest {

	@InjectMocks
	UserServiceImpl userService;
	
	@Mock
	UserRepository userRepository;
	@Mock
	ProductRepository productRepository;
	ArrayList<Product> p=new ArrayList<>();
	Product p1=new Product("Macbook","electronics","pink",900,3,"Laptop");
	ProductResponse p2=new ProductResponse(1,"Macbook","electronics","pink",900,3,"Laptop");
	
	@BeforeEach
	void setUp() throws Exception {
		
		MockitoAnnotations.initMocks(this);
		
	}
	User user=new User("b","b@gmail.com","b123","987654321");
	
	@Test
	final void testValidate() throws UserNotFoundException  {
		
		when(userRepository.findByEmailIdAndPassword("b@gmail.com", "b123")).thenReturn(user);
		UserResponse user1=userService.validate(user);
		assertEquals(user.getEmailId(),user1.getEmailId());
	}
	
	@Test
	final void testValidate_Exception() throws UserNotFoundException {
		when(userRepository.findByEmailIdAndPassword("b@gmail.com", "b123")).thenReturn(null);
		assertThrows(UserNotFoundException.class,()->userService.validate(user));
	}
	@Test
	final void testRegister() throws ExistingUserException {
		when(userRepository.save(user)).thenReturn(user);
		UserResponse user1=userService.register(user);
		assertEquals(user.getEmailId(),user1.getEmailId());
	}
	
	@Test
	final void testRegister_Exception() throws ExistingUserException {
		when(userRepository.save(user)).thenThrow(DataIntegrityViolationException.class);
		assertThrows(UserNotFoundException.class,()->userService.validate(user));
		
	}
	
	@Test
	final void testAddWish() {
		when(userRepository.findByUserId(1)).thenReturn(user);
		when(productRepository.findByProductId(12345)).thenReturn(p1);
		List<Product> product=userService.addWish(1,12345);
		assertEquals(product.get(0),p1);			
	}
	
	@Test
	final void testAddCart() {
		when(userRepository.findByUserId(1)).thenReturn(user);
		when(productRepository.findByProductId(12345)).thenReturn(p1);
		List<Product> product=userService.addCart(1,12345);
		assertEquals(product.get(0),p1);	
		
	}

	
	
	@Test
	final void testRemoveWish_Exception() throws NotFoundException {
		when(userRepository.findByUserId(1)).thenReturn(user);
		when(productRepository.findByProductId(12345)).thenReturn(p1);
		assertThrows(NotFoundException.class,()->userService.removeWish(1,12345));
		
	}

	@Test
	final void testRemoveCart_Exception() throws NotFoundException {
		when(userRepository.findByUserId(1)).thenReturn(user);
		when(productRepository.findByProductId(12345)).thenReturn(p1);
		assertThrows(NotFoundException.class,()->userService.removeCart(1,12345));
				
	}	

	@Test
	final void testViewWish() throws NotFoundException {
		p.add(p1);
		user.addWish(p1);
		when(userRepository.findByUserId(1)).thenReturn(user);
		assertEquals(userService.viewWish(1),p);
		
		
	}
	
	@Test
	final void testViewWish_Exception() throws NotFoundException {
		
		when(userRepository.findByUserId(1)).thenReturn(user);
		assertThrows(NotFoundException.class,()->userService.viewWish(1));
		
		
	}

	@Test
	final void testViewCart() throws NotFoundException {
		p.add(p1);
		user.addCart(p1);
		when(userRepository.findByUserId(1)).thenReturn(user);
		assertEquals(userService.viewCart(1),p);
		
	}
	
	@Test
	final void testViewCart_Exception() throws NotFoundException {
		
		when(userRepository.findByUserId(1)).thenReturn(user);
		assertThrows(NotFoundException.class,()->userService.viewCart(1));
		
	}



}