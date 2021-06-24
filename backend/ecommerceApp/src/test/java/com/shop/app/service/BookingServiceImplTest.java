package com.shop.app.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.Date;
import java.util.ArrayList;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.app.entity.Address;
import com.app.entity.Booking;
import com.app.entity.Payment;
import com.app.entity.Product;
import com.app.entity.Seller;
import com.app.entity.User;
import com.app.exception.NotFoundException;
import com.app.repository.BookingRepository;
import com.app.repository.ProductRepository;
import com.app.repository.SellerRepository;
import com.app.repository.UserRepository;
import com.app.service.BookingServiceImpl;

class BookingServiceImplTest {
	@InjectMocks
	BookingServiceImpl bookingService;
	
	@Mock
	BookingRepository bookingRepository;
	
	@Mock
	ProductRepository productRepository;
	
	@Mock
	UserRepository userRepository;
	
	@Mock
	SellerRepository sellerRepository;

	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
	}
	Date date=new Date(0);
	Address address=new Address();
	Seller seller=new Seller("Haris","Haris_company","haris@gmail.com","sandy@gmail.com","12345","1234567890","0987654321");
	Product p=new Product("Macbook","electronics","pink",900,3,"Laptop",seller);
	User user=new User("b","b@gmail.com","b123","987654321");

	Payment payment=new Payment(date,"12345678",1245,"card","success");	
	Booking booking=new Booking(user,p,seller,date,date,2,payment,address,"Delivered");
	ArrayList<Booking> booking1= new ArrayList<Booking>(0);

	
	@Test
	final void testBook() throws NotFoundException {
		when(productRepository.findByProductId(booking.getProduct().getProductId())).thenReturn(p);
		when(userRepository.findByUserId(booking.getUser().getUserId())).thenReturn(user);
		when(bookingRepository.save(booking)).thenReturn(booking);
		assertEquals(bookingService.book(booking),booking);
	}
	
	@Test
	final void testBook_Exception() throws NotFoundException {
		booking.setQty(4);	
		when(productRepository.findByProductId(booking.getProduct().getProductId())).thenReturn(p);
		assertThrows(NotFoundException.class,()->bookingService.book(booking));
		
	}


	@Test
	final void testChangeStatus() {
		
		when(bookingRepository.findByBookId(1)).thenReturn(booking);
		when(bookingRepository.save(booking)).thenReturn(booking);
		when(sellerRepository.findBySellerId(seller.getSellerId())).thenReturn(seller);
		bookingService.changeStatus(1,seller.getSellerId(),"delivered");
		assertEquals(booking.getStatus(),"delivered");		
	}

	@Test
	final void testViewOrderStatus() {
			when(bookingRepository.findByUserAndStatusNotIgnoreCase(user,"Delivered")).thenReturn(booking1);
			assertEquals(bookingService.viewOrderStatus(user.getUserId()),booking1);
	}

	@Test
	final void testViewOrders() {
		when(bookingRepository.findByUserAndStatusIgnoreCase(user,"Delivered")).thenReturn(booking1);
		assertEquals(bookingService.viewOrders(user.getUserId()),booking1);

	}

}