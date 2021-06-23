package com.shop.app.controller;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.Date;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import com.app.controller.PaymentController;
import com.app.entity.Payment;
import com.app.exception.NotFoundException;
import com.app.repository.PaymentRepository;
import com.app.service.PaymentService;

class PaymentControllerTest {
	
	@InjectMocks
	PaymentController paymentController;
	
	@Mock
	PaymentService paymentService;
	
	@Mock
	PaymentRepository paymentRepository;
	
	Payment pay=new Payment(new Date(),"",9000,"cod","not paid");
	Payment p=new Payment(new Date(),"",9000,"cod","paid");

	@BeforeEach
	void setUp() throws Exception {
		
		MockitoAnnotations.initMocks(this);
	}


	@Test
	final void testChangeStatus() {
		when(paymentService.changeStatus(1)).thenReturn(p);
		ResponseEntity<Payment> payment=paymentController.changeStatus(1);
		assertEquals(payment.getBody().getStatus(),"paid");
	}

	@Test
	final void testView() throws NotFoundException {
		when(paymentRepository.findByPaymentId(1)).thenReturn(pay);
		ResponseEntity<Payment> payment=paymentController.view(1);
		assertNotNull(payment.getBody());
	}
	
	@Test
	final void testView_Exception() throws NotFoundException {
		when(paymentRepository.findByPaymentId(1)).thenReturn(null);
		assertThrows(NotFoundException.class, ()->paymentController.view(1));
	}

}
