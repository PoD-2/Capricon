package com.app.controller;

import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Booking;
import com.app.exception.NotFoundException;
import com.app.repository.BookingRepository;
import com.app.service.BookingService;

@CrossOrigin
@RestController
@RequestMapping("/booking")
public class BookingController {
	
	private BookingService bookingService;
	
	private BookingRepository bookingRepository;
	
	public BookingController(BookingService bookingService, BookingRepository bookingRepository) {
		super();
		this.bookingService = bookingService;
		this.bookingRepository=bookingRepository;
	}

	@PostMapping
	public ResponseEntity<Booking> booking(@RequestBody Booking booking) throws NotFoundException{
		
		return new ResponseEntity<Booking>(bookingService.book(booking),HttpStatus.CREATED);
	}
	
	@GetMapping("/view")
	public ResponseEntity<Booking> view(@RequestParam int id) throws NotFoundException{
			Booking b=bookingRepository.findByBookId(id);
		if(b!=null)
		{
			return new ResponseEntity<Booking>(b,HttpStatus.FOUND);
		}
		else
		{
			throw new NotFoundException("Booking details Not Found");
		}
	}
	
	@PutMapping("/changeStatus")
	public ResponseEntity<ArrayList<Booking>> changeStatus(@RequestParam int id, @RequestParam int sellerId, @RequestParam String status){
		
		return new ResponseEntity<ArrayList<Booking>>(bookingService.changeStatus(id, sellerId, status), HttpStatus.OK);
	}
	
	@GetMapping("/{userId}/orders")
	public ResponseEntity<ArrayList<Booking>> orders(@PathVariable int userId)  {
		return new ResponseEntity<ArrayList<Booking>>(bookingService.viewOrders(userId),HttpStatus.OK); 
	}
	
	@GetMapping("/{userId}/orderStatus")
	public ResponseEntity<ArrayList<Booking>> orderStatus(@PathVariable int userId) {
		return new ResponseEntity<ArrayList<Booking>>(bookingService.viewOrderStatus(userId),HttpStatus.OK); 
	}

}
