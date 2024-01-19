package com.varejo360.backend.repository;

import com.varejo360.backend.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    boolean existsProductByCode(final String code);

    boolean existsProductByName(final String name);

    Page<Product> findAll(Pageable pageable);


}
