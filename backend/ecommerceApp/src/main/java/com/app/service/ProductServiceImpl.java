package com.app.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Product;
import com.app.exception.NotFoundException;
import com.app.model.ProductResponse;
import com.app.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductRepository productRepository;

	@Override
	public ArrayList<Product> findCategory(String category) throws NotFoundException {
		ArrayList<Product> p= productRepository.findByCategoryContainingIgnoreCaseAndQtyGreaterThan(category,0);
		if(!p.isEmpty())
			return p;
		else
			throw new NotFoundException("Product Not Found");
		
	}

	@Override
	public ArrayList<Product> findCategoryOrProduct(String s) throws NotFoundException {
		ArrayList<Product> p= productRepository.findByCategoryContainingOrProductNameContainingIgnoreCaseAndQtyGreaterThan(s,s,0);
		if(!p.isEmpty())
			return p;
		else
			throw new NotFoundException("Product Not Found");
		
	}

	@Override
	public ProductResponse findProduct(int id) throws NotFoundException {
		Product p=productRepository.findByProductId(id);
		if(p!= null) {
		ProductResponse response=new ProductResponse(p.getProductId(), p.getProductName(), p.getCategory(), p.getColor(), p.getPrice(),
				p.getQty(), p.getDescr(), p.getSeller(), p.getImages());
		return response;
		}
		else {
			throw new NotFoundException("Product Not Found");
		}
		
	}

}
