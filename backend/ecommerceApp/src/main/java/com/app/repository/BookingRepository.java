package com.app.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Booking;
import com.app.entity.Seller;
import com.app.entity.User;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer>{

	Booking findByBookId(int id);

	ArrayList<Booking> findBySellerAndStatusNot(Seller findBySellerId, String string);
	
	ArrayList<Booking> findBySellerAndStatus(Seller findBySellerId, String string);

	ArrayList<Booking> findByUserAndStatusNotIgnoreCase(User findByUserId, String string);

	ArrayList<Booking> findByUserAndStatusIgnoreCase(User findByUserId, String string);

}
