package com.app.service;

import java.util.ArrayList;

import com.app.entity.Booking;
import com.app.exception.NotFoundException;

public interface BookingService {

	Booking book(Booking booking) throws NotFoundException;
	
	ArrayList<Booking> changeStatus(int id, int sellerId, String status);

	ArrayList<Booking> viewOrders(int userId) ;

	ArrayList<Booking> viewOrderStatus(int userId);

}
