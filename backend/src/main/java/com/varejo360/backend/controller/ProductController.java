package com.varejo360.backend.controller;

import com.varejo360.backend.dto.ProductDto;
import com.varejo360.backend.dto.ProductUpdateDto;
import com.varejo360.backend.infra.security.TokenService;
import com.varejo360.backend.model.Product;
import com.varejo360.backend.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.security.core.Authentication;


import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:5173","http://localhost:3000"})
@RequestMapping("/product")
public class ProductController {
    final ProductService productService;

    @Autowired
    private TokenService tokenService;

    public ProductController(ProductService productService){
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@Valid @RequestBody final ProductDto productData, @RequestHeader("Authorization") String token) throws Exception {
        token = token.replace("Bearer ", "");
        Long userId = tokenService.getUserIdFromToken(token);

        final Product  createdProduct = productService.createProduct(productData,userId);

        return new ResponseEntity<Product>(createdProduct, HttpStatus.CREATED);
    }

    @GetMapping
    public  ResponseEntity<List<Product>> readProducts(){
        final List<Product> allProducts = productService.readProducts();

        return new ResponseEntity<List<Product>>(allProducts, HttpStatus.OK);
    }

    @GetMapping("/pag")
    public ResponseEntity<Page<Product>> listProducts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "name") String sortField,
            @RequestParam(defaultValue = "asc") String sortDir) {
        Page<Product> productsPage = productService.listProducts(page, size, sortField, sortDir);
        return new ResponseEntity<>(productsPage, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> retrieveProduct(@PathVariable final String id) {

        final Product product = productService.retrieveProduct(Long.parseLong(id));

        return new ResponseEntity<Product>(product, HttpStatus.OK);

    }

    @CrossOrigin(origins = {"http://localhost:5173","http://localhost:3000"})
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@Valid @RequestBody final ProductUpdateDto productData, @PathVariable final String id, @RequestHeader("Authorization") String token) {
        token = token.replace("Bearer ", "");
        Long userId = tokenService.getUserIdFromToken(token);
        //convertendo id (String) para Long
        final Product updatedProduct = productService.updateProduct(productData, Long.parseLong(id), userId);

        return new ResponseEntity<Product>(updatedProduct, HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable final String id) {

        productService.deleteProduct(Long.parseLong(id));

        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);

    }

}
