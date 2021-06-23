package com.shop.app.service;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.Date;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.app.entity.Payment;
import com.app.repository.PaymentRepository;
import com.app.service.PaymentServiceImpl;


class PaymentServiceImplTest {
	
	@InjectMocks
	PaymentServiceImpl paymentService;
	@Mock
	PaymentRepository paymentRepository;

	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
	}
	
	Date date = new Date();
	Payment payment=new Payment(date,"12345678",1245,"card","success");

	
	@Test
	final void testChangeStatus() {
		when(paymentRepository.findByPaymentId(1)).thenReturn(payment);
		assertEquals(paymentService.changeStatus(1),payment);		
	}

}