package com.app.service;

import java.util.ArrayList;

import com.app.entity.Product;
import com.app.exception.NotFoundException;
import com.app.model.ProductResponse;

public interface ProductService {

	ArrayList<Product> findCategory(String category) throws NotFoundException;

	ArrayList<Product> findCategoryOrProduct(String s) throws NotFoundException;

	ProductResponse findProduct(int id) throws NotFoundException;

}
