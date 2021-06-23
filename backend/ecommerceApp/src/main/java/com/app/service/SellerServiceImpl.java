package com.app.service;

import java.util.ArrayList;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.app.entity.Booking;
import com.app.entity.Image;
import com.app.entity.Product;
import com.app.entity.Seller;
import com.app.exception.ExistingUserException;
import com.app.exception.UserNotFoundException;
import com.app.model.SellerResponse;
import com.app.repository.BookingRepository;
import com.app.repository.ImageRepository;
import com.app.repository.ProductRepository;
import com.app.repository.SellerRepository;

@Service
public class SellerServiceImpl implements SellerService{

    private FileStorageService fileStorageService;

    private ImageRepository imageRepository;

	private SellerRepository sellerRepository;

	private ProductRepository productRepository;

	private BookingRepository bookingRepository;

	public SellerServiceImpl(SellerRepository sellerRepository, ProductRepository productRepository,
			BookingRepository bookingRepository, FileStorageService fileStorageService, ImageRepository imageRepository) {
		super();
		this.sellerRepository = sellerRepository;
		this.productRepository = productRepository;
		this.bookingRepository = bookingRepository;
		this.fileStorageService=fileStorageService;
		this.imageRepository=imageRepository;
	}

	@Override
	public SellerResponse register(Seller seller) throws ExistingUserException {
		try {
			sellerRepository.save(seller);
			return new SellerResponse(seller.getSellerId(), seller.getCompanyName(), seller.getCsEmailId(),
					seller.getCsPhoneNumber(), seller.getAddress(), seller.getProducts());

		} catch (DataIntegrityViolationException e) {
			throw new ExistingUserException("Seller Already Existing");
		}

	}

	@Override
	public SellerResponse validate(Seller seller) throws UserNotFoundException {
		Seller s = sellerRepository.findByEmailIdAndPassword(seller.getEmailId(), seller.getPassword());
		if (s != null) {
			return new SellerResponse(s.getSellerId(), s.getCompanyName(), s.getCsEmailId(), s.getCsPhoneNumber(),
					s.getAddress(), s.getProducts());
		} else {
			throw new UserNotFoundException("Seller Not Found");
		}
	}

	@Override
	public SellerResponse addProduct(int sellerId, Product product, ArrayList<MultipartFile> file) {
		
		for (int i = 0; i < file.size(); i++) {
			String filename = fileStorageService.storeFile(file.get(i));
			String fileUrl = ServletUriComponentsBuilder.fromCurrentContextPath().path("/files/").path(filename)
					.toUriString();
			Image img = new Image(filename, fileUrl, file.get(i).getContentType(), file.get(i).getSize());
			imageRepository.save(img);
			product.addImage(img);
			img.setProduct(product);
			productRepository.save(product);
		}
		Seller s = sellerRepository.findBySellerId(sellerId);
		s.addProduct(product);
		product.setSeller(s);
		sellerRepository.save(s);

		return new SellerResponse(s.getSellerId(), s.getCompanyName(), s.getCsEmailId(), s.getCsPhoneNumber(),
				s.getAddress(), s.getProducts());

	}

	@Override
	public ArrayList<Product> viewProduct(int sellerId) {

		return productRepository.findBySeller(sellerRepository.findBySellerId(sellerId));

	}

	@Override
	public SellerResponse changeQty(int sellerId, int productId, int qty) {

		Seller s = sellerRepository.findBySellerId(sellerId);
		Product p = productRepository.findByProductId(productId);
		p.setQty(p.getQty()+qty);
		productRepository.save(p);
		return new SellerResponse(s.getSellerId(), s.getCompanyName(), s.getCsEmailId(), s.getCsPhoneNumber(),
				s.getAddress(), s.getProducts());

	}

	@Override
	public ArrayList<Booking> orderStatus(int sellerId) {

		return bookingRepository.findBySellerAndStatusNot(sellerRepository.findBySellerId(sellerId), "delivered");
	}

	@Override
	public ArrayList<Booking> orderHistory(int sellerId) {

		return bookingRepository.findBySellerAndStatus(sellerRepository.findBySellerId(sellerId), "delivered");
	}

}
