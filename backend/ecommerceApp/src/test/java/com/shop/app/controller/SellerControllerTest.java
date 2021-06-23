package com.shop.app.controller;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import com.app.controller.SellerController;
import com.app.entity.Seller;
import com.app.exception.ExistingUserException;
import com.app.exception.UserNotFoundException;
import com.app.model.SellerResponse;
import com.app.service.SellerService;

class SellerControllerTest {

	@InjectMocks
	SellerController sellerController;
	
	@Mock
	SellerService sellerService;
	
	Seller seller=new Seller("b","b.pvt","b@gmail.com","bcs@gmail.com","b123","987654321","9999999999");
	SellerResponse sellerResponse=new SellerResponse(1,"b.pvt","bcs@gmail.com","9999999999");
	
	@BeforeEach
	void setUp() throws Exception {
		
		MockitoAnnotations.initMocks(this);
	}

	@Test
	final void testRegistration() throws ExistingUserException {
		when(sellerService.register(seller)).thenReturn(sellerResponse);
		ResponseEntity<SellerResponse> seller1=sellerController.registration(seller);
		assertEquals(seller.getCsEmailId(),seller1.getBody().getCsEmailId());
		assertEquals(seller.getCsPhoneNumber(),seller1.getBody().getCsPhoneNumber());
		
	}
	
	@Test
	final void testRegistration_Exception() throws ExistingUserException {
		when(sellerService.register(seller)).thenThrow(ExistingUserException.class);
		assertThrows(ExistingUserException.class,()->sellerController.registration(seller));
		
	}

	@Test
	final void testLogin() throws UserNotFoundException {
		when(sellerService.validate(seller)).thenReturn(sellerResponse);
		ResponseEntity<SellerResponse> seller1=sellerController.login(seller);
		assertNotNull(seller1.getBody());
	}
	
	@Test
	final void testLogin_Exception() throws UserNotFoundException {
		when(sellerService.validate(seller)).thenThrow(UserNotFoundException.class);
		assertThrows(UserNotFoundException.class,()->sellerController.login(seller));
	}

	

}
