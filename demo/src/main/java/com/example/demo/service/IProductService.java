package com.example.demo.service;

import com.example.demo.dto.ProductDTO;
import com.example.demo.model.Product;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    List<Product> showList();

    Product findById(long id);
    Product updateProduct(ProductDTO product);

    void addProduct(ProductDTO product);

    void deleteProduct(int id);

    List<Product> findProductByName(Pageable pageable, String name);
}
