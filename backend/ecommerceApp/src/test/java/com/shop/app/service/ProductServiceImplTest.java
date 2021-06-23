package com.shop.app.service;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import com.app.entity.Product;
import com.app.exception.NotFoundException;
import com.app.model.ProductResponse;
import com.app.repository.ProductRepository;
import com.app.service.ProductServiceImpl;


class ProductServiceImplTest {
	
	@InjectMocks
	ProductServiceImpl productService;
	
	
	@Mock
	ProductRepository productRepository;
	
	ArrayList<Product> p=new ArrayList<>();
	Product p1=new Product("Macbook","electronics","pink",900,3,"Laptop");
	ProductResponse p2=new ProductResponse(1,"Macbook","electronics","pink",900,3,"Laptop");


	@BeforeEach
	void setUp() throws Exception {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	final void testFindCategory() throws NotFoundException {
		p.add(p1);
		when(productRepository.findByCategoryContainingIgnoreCase("a")).thenReturn(p);
		assertEquals(productService.findCategory("a"),p);	
		
	}
	
	@Test
	final void testFindCategory_exception() throws NotFoundException {
		when(productRepository.findByCategoryContainingIgnoreCase("a")).thenReturn(p);
		assertThrows(NotFoundException.class,()->productService.findCategory("a"));
				
	}

	@Test
	final void testFindCategoryOrProduct() throws NotFoundException {
		p.add(p1);
		when(productRepository.findByCategoryContainingOrProductNameContainingIgnoreCase("a","a")).thenReturn(p);
		assertEquals(productService.findCategoryOrProduct("a"),p);	
	
	}
	
	@Test
	final void testFindCategoryOrProduct_exception() throws NotFoundException {
		when(productRepository.findByCategoryContainingOrProductNameContainingIgnoreCase("a","a")).thenReturn(p);
		assertThrows(NotFoundException.class,()->productService.findCategoryOrProduct("a"));		
	}

	@Test
	final void testFindProduct() throws NotFoundException {
		
		when(productRepository.findByProductId(1)).thenReturn(p1);
		assertEquals(productService.findProduct(1).getProductName(),p2.getProductName());		
	}
	
	@Test
	final void testFindProduct_exception() throws NotFoundException {
		when(productRepository.findByProductId(1)).thenReturn(null);
		assertThrows(NotFoundException.class,()->productService.findProduct(1));	
		
	}

}