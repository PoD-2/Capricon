package com.app.service;

import java.util.List;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.app.entity.Product;
import com.app.entity.User;
import com.app.exception.ExistingUserException;
import com.app.exception.NotFoundException;
import com.app.exception.UserNotFoundException;
import com.app.model.UserResponse;
import com.app.repository.ProductRepository;
import com.app.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	private UserRepository userRepository;
	
	private ProductRepository productRepository;

	public UserServiceImpl(UserRepository userRepository, ProductRepository productRepository) {
		super();
		this.userRepository = userRepository;
		this.productRepository=productRepository;
	}

	@Override
	public UserResponse register(User user) throws ExistingUserException {
		try {
			userRepository.save(user);
			return new UserResponse(user.getUserId(),user.getUserName(),user.getEmailId(), user.getPhoneNumber());
			
		} catch (DataIntegrityViolationException e) {
			throw new ExistingUserException("User Already Existing");
		}
	
	}

	@Override
	public UserResponse validate(User user) throws UserNotFoundException {
		
		User u = userRepository.findByEmailIdAndPassword(user.getEmailId(), user.getPassword());
		if(u!=null)
		{
			return new UserResponse(u.getUserId(),u.getUserName(),u.getEmailId(),u.getPhoneNumber());
		}
		else
		{
			throw new UserNotFoundException("User Not Found");
		}
	}

	@Override
	public List<Product> addWish(int userId, int productId) {
		
		User u=userRepository.findByUserId(userId);
		u.addWish(productRepository.findByProductId(productId));
		userRepository.save(u);
		return (List<Product>) u.getWish();
	}

	@Override
	public List<Product> addCart(int userId, int productId) {
		User u=userRepository.findByUserId(userId);
		u.addCart(productRepository.findByProductId(productId));
		userRepository.save(u);
		return (List<Product>) u.getCart();
	}

	@Override
	public List<Product> removeWish(int userId, int productId) throws NotFoundException {
		User u=userRepository.findByUserId(userId);
		u.removeWish(productRepository.findByProductId(productId));
		userRepository.save(u);
		List<Product> wish= u.getWish();
		if(!wish.isEmpty()) {
			return wish;
		}
		else
		{
			throw new NotFoundException("Wishlist is Empty");
		}
	}
	
	@Override
	public List<Product> removeCart(int userId, int productId) throws NotFoundException{
		User u=userRepository.findByUserId(userId);
		u.removeCart(productRepository.findByProductId(productId));
		userRepository.save(u);
		List<Product> cart=u.getCart();
		if(!cart.isEmpty()) {
			return cart;
		}
		else {
			throw new NotFoundException("Cart is Empty");
		}
	}

	@Override
	public List<Product> viewWish(int userId) throws NotFoundException {
		List<Product> wish=userRepository.findByUserId(userId).getWish();
		if(!wish.isEmpty()) {
			return wish;
		}
		else {
			throw new NotFoundException("Wishlist is Empty");
		}
	}

	@Override
	public List<Product> viewCart(int userId) throws NotFoundException{
		List<Product> cart=userRepository.findByUserId(userId).getCart();
		if(!cart.isEmpty()) {
			return cart;
		}
		else {
			throw new NotFoundException("Cart is Empty");
		}
	}
}
