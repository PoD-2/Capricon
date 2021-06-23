package com.app.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Product;
import com.app.entity.Seller;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	Product findByProductId(int productId);

	ArrayList<Product> findByCategoryContainingIgnoreCase(String category);

	ArrayList<Product> findByCategoryContainingOrProductNameContainingIgnoreCase(String s, String s1);

	ArrayList<Product> findBySeller(Seller findBySellerId);

	ArrayList<Product> findByCategoryContainingIgnoreCaseAndQtyGreaterThan(String category, int i);

	ArrayList<Product> findByCategoryContainingOrProductNameContainingIgnoreCaseAndQtyGreaterThan(String s, String s2, int i);

}
