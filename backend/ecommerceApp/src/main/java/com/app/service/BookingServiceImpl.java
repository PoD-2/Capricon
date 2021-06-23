package com.app.service;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.stereotype.Service;

import com.app.controller.PaymentController;
import com.app.entity.Booking;
import com.app.entity.Payment;
import com.app.entity.Product;
import com.app.exception.NotFoundException;
import com.app.repository.BookingRepository;
import com.app.repository.ProductRepository;
import com.app.repository.SellerRepository;
import com.app.repository.UserRepository;

@Service
public class BookingServiceImpl implements BookingService{

	private BookingRepository bookingRepository;
	
	private UserRepository userRepository;
	
	private ProductRepository productRepository;

	private SellerRepository sellerRepository;
	
	private PaymentController paymentController;
	
	public BookingServiceImpl(BookingRepository bookingRepository, UserRepository userRepository, ProductRepository productRepository,
			SellerRepository sellerRepository, PaymentController paymentController) {
		super();
		this.bookingRepository = bookingRepository;
		this.userRepository=userRepository;
		this.productRepository=productRepository;
		this.sellerRepository=sellerRepository;
		this.paymentController=paymentController;
	}


	@Override
	public Booking book(Booking booking) throws NotFoundException {
		
		Product p=productRepository.findByProductId(booking.getProduct().getProductId());
		
		if(booking.getQty()<=p.getQty())
		{
			booking.setBookDate(new Date());
			booking.setUser(userRepository.findByUserId(booking.getUser().getUserId()));
			p.setQty(p.getQty()-booking.getQty());
			booking.setProduct(p);
			booking.setSeller(p.getSeller());
			Payment pay=booking.getPayment();
		    if(!pay.getPaymentType().equals("cod"))
			pay.setPaymentDate(new Date());
		    pay.setStatus(pay.getStatus().toUpperCase());
		    booking.setPayment(pay);
		    Booking b=bookingRepository.save(booking);
		    return b;
		}
		else
		{
			throw new NotFoundException("Product Not Available");
		}
	}


	@Override
	public ArrayList<Booking> changeStatus(int id, int sellerId, String status) {
		Booking b=bookingRepository.findByBookId(id);
		b.setStatus(status);
		if(status.equalsIgnoreCase("Delivered")) {
			b.setDeliveryDate(new Date());
			if(b.getPayment().getStatus().equalsIgnoreCase("not paid")) {
				paymentController.changeStatus(b.getPayment().getPaymentId());
			}
		}
		bookingRepository.save(b);
		return bookingRepository.findBySellerAndStatusNot(sellerRepository.findBySellerId(sellerId), "delivered");
	}


	@Override
	public ArrayList<Booking> viewOrderStatus(int userId) {
		ArrayList<Booking> orders=bookingRepository.findByUserAndStatusNotIgnoreCase(userRepository.findByUserId(userId),"Delivered");
					return orders;			
		
	}


	@Override
	public ArrayList<Booking> viewOrders(int userId) {
		ArrayList<Booking> orders=bookingRepository.findByUserAndStatusIgnoreCase(userRepository.findByUserId(userId),"Delivered");
		
			return orders;			
		
	}
	

}
