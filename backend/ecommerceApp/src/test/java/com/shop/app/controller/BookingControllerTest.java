package com.shop.app.controller;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import com.app.controller.BookingController;
import com.app.entity.Booking;
import com.app.entity.Payment;
import com.app.exception.NotFoundException;
import com.app.repository.BookingRepository;
import com.app.repository.PaymentRepository;
import com.app.service.BookingService;

class BookingControllerTest {
	
	@InjectMocks
	BookingController bookingController;
	
	@Mock
	BookingService bookingService;
	
	@Mock
	BookingRepository bookingRepository;
	
	Booking b=new Booking(new Date(), new Date(), 3, "packed");
	
	Booking b1=new Booking(new Date(), new Date(), 3, "Delivered");
	ArrayList<Booking> book=new ArrayList<Booking>();
	@BeforeEach
	void setUp() throws Exception {
		
		MockitoAnnotations.initMocks(this);
	}

	@Test
	final void testBooking() throws NotFoundException {
		when(bookingService.book(b)).thenReturn(b);
		ResponseEntity<Booking> book=bookingController.booking(b);
		assertNotNull(book);
	}
	
	@Test
	final void testBooking_Exception() throws NotFoundException {
		when(bookingService.book(b)).thenThrow(NotFoundException.class);
		assertThrows(NotFoundException.class, ()->bookingController.booking(b));
	}

	@Test
	final void testView() throws NotFoundException {
		when(bookingRepository.findByBookId(1)).thenReturn(b);
		ResponseEntity<Booking> booking=bookingController.view(1);
		assertNotNull(booking.getBody());
	}
	
	@Test
	final void testView_Exception() throws NotFoundException {
		when(bookingRepository.findByBookId(1)).thenReturn(null);
		assertThrows(NotFoundException.class,()->bookingController.view(1));
	}

	@Test
	final void testChangeStatus() {
		book.add(b1);
		when(bookingService.changeStatus(1,1,"Delivered")).thenReturn(book);
		ResponseEntity<ArrayList<Booking>> booking=bookingController.changeStatus(1,1,"Delivered");
		assertEquals( booking.getBody().get(0).getStatus(),"Delivered");
	}

}
