package com.shop.app.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.app.entity.Seller;
import com.app.exception.UserNotFoundException;
import com.app.model.SellerResponse;
import com.app.repository.SellerRepository;

import com.app.service.SellerServiceImpl;

class SellerServiceImplTest {

	@InjectMocks
	SellerServiceImpl sellerService;
	
	@Mock
	SellerRepository sellerRepository;
	
	
	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
	}



	@Test
	final void testValidate() throws UserNotFoundException {
		Seller seller=new Seller("Haris","Haris_company","haris@gmail.com","sandy@gmail.com","12345","1234567890","0987654321");
		when(sellerRepository.findByEmailIdAndPassword("haris@gmail.com", "12345")).thenReturn(seller);
		SellerResponse seller1=sellerService.validate(seller);
		assertEquals(seller.getCsEmailId(),seller1.getCsEmailId());
	}
	@Test
	final void testValidate_Exception() throws UserNotFoundException {
		Seller seller=new Seller("Haris","Haris_company","haris@gmail.com","sandy@gmail.com","12345","1234567890","0987654321");
		when(sellerRepository.findByEmailIdAndPassword("haris@gmail.com", "12345")).thenReturn(null);
		assertThrows(UserNotFoundException.class,()->sellerService.validate(seller));
	}

	

}