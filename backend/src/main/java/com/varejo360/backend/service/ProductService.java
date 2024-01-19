package com.varejo360.backend.service;

import com.varejo360.backend.dto.ProductDto;
import com.varejo360.backend.dto.ProductUpdateDto;
import com.varejo360.backend.exception.AppException;
import com.varejo360.backend.model.Product;
import com.varejo360.backend.model.User;
import com.varejo360.backend.repository.ProductRepository;
import com.varejo360.backend.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    private  final UserRepository userRepository;

    public ProductService(ProductRepository productRepository, UserRepository userRepository){
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    private void checkCodeAndName(final ProductDto productData){
        if(productRepository.existsProductByCode(productData.getCode())){
            throw new AppException("Code already exists", HttpStatus.CONFLICT);
        }
        if(productRepository.existsProductByName(productData.getName())){
            throw new AppException("Name already exists", HttpStatus.CONFLICT);
        }
    }

    public Product createProduct(final ProductDto productData, Long userId) {
        checkCodeAndName(productData);

        final User foundUser = userRepository.findById(userId).orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));

        final Product newProduct = new Product(foundUser, productData.getCode(), productData.getName());

        return productRepository.save(newProduct);
    }

    public List<Product> readProducts() {return productRepository.findAll();};

    public Page<Product> listProducts(int page, int size, String sortField, String sortDir) {
        Sort sort = Sort.by(sortField);
        sort = sortDir.equalsIgnoreCase("asc") ? sort.ascending() : sort.descending();
        Pageable pageable = PageRequest.of(page, size,sort);
        return productRepository.findAll(pageable);
    }


    public Product retrieveProduct(final long id) {

        //esse tipo de tratamento de erro fecha o app, vamos modifica-lo
        return productRepository.findById(id).orElseThrow(() -> new AppException("Product not found", HttpStatus.NOT_FOUND));

    }

    public Product updateProduct(final ProductUpdateDto productData, final long id, final long userId) {
//        checkCodeAndName(productData);

        final Product foundProduct = productRepository.findById(id).orElseThrow(() -> new AppException("Product not found", HttpStatus.NOT_FOUND));

        final User foundUser = userRepository.findById(userId).orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));

        foundProduct.setUser(foundUser);
        foundProduct.setCode(productData.getCode());
        foundProduct.setName(productData.getName());


        return productRepository.save(foundProduct);

    }

    public void deleteProduct(final long id) {

        final Product foundProduct = productRepository.findById(id).orElseThrow(() -> new AppException("Product not found", HttpStatus.NOT_FOUND));

        productRepository.delete(foundProduct);

    }
}
