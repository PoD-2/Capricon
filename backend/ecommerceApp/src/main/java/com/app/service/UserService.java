package com.app.service;

import java.util.List;

import com.app.entity.Product;
import com.app.entity.User;
import com.app.exception.ExistingUserException;
import com.app.exception.NotFoundException;
import com.app.exception.UserNotFoundException;
import com.app.model.UserResponse;

public interface UserService {

	UserResponse register(User user) throws ExistingUserException;

	UserResponse validate(User user) throws UserNotFoundException;

	List<Product> addWish(int userId, int productId);

	List<Product> addCart(int userId, int productId);

	List<Product> removeWish(int userId, int productId) throws NotFoundException;

	List<Product> removeCart(int userId, int productId) throws NotFoundException;

	List<Product> viewWish(int userId) throws NotFoundException;

	List<Product> viewCart(int userId) throws NotFoundException;
	
}
