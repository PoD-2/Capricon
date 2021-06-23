package com.shop.app.controller;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import com.app.controller.ProductController;
import com.app.entity.Product;
import com.app.exception.NotFoundException;
import com.app.model.ProductResponse;
import com.app.service.ProductService;

class ProductControllerTest {
	
	@InjectMocks
	ProductController productController;
	
	@Mock
	ProductService productService;
	
	ArrayList<Product> p=new ArrayList<>();
	Product p1=new Product("Macbook","electronics","pink",900,3,"Laptop");
	ProductResponse p2=new ProductResponse(1,"Macbook","electronics","pink",900,3,"Laptop");
	

	@BeforeEach
	void setUp() throws Exception {
		
		MockitoAnnotations.initMocks(this);
	}

	@Test
	final void testHome() throws NotFoundException {
		p.add(p1);
		when(productService.findCategory("c")).thenReturn(p);
		ResponseEntity<ArrayList<Product>> pro=productController.home("c");
		assertNotNull(pro);			
	}
	
	@Test
	final void testHome_Exception() throws NotFoundException {
	
		when(productService.findCategory("z")).thenThrow(NotFoundException.class);
		assertThrows(NotFoundException.class, ()->productController.home("z"));			
	}

	@Test
	final void testSearch() throws NotFoundException {
		p.add(p1);
		when(productService.findCategoryOrProduct("c")).thenReturn(p);
		ResponseEntity<ArrayList<Product>> pro=productController.search("c");
		assertNotNull(pro);
	}
	
	@Test
	final void testSearch_Exception() throws NotFoundException {
	
		when(productService.findCategoryOrProduct("z")).thenThrow(NotFoundException.class);
		assertThrows(NotFoundException.class, ()->productController.search("z"));
	}

	@Test
	final void testFindProduct() throws NotFoundException {
		p.add(p1);
		when(productService.findProduct(1)).thenReturn(p2);
		ResponseEntity<ProductResponse> pr=productController.findProduct(1);
		assertEquals(pr.getBody().getProductId(),1);
	}	

	@Test
	final void testFindProduct_Exception() throws NotFoundException {
		p.add(p1);
		when(productService.findProduct(1)).thenThrow(NotFoundException.class);
		assertThrows(NotFoundException.class,()->productController.findProduct(1));
	}	

}
