package com.example.demo.service.impl;


import com.example.demo.dto.ProductDTO;
import com.example.demo.model.Product;
import com.example.demo.repository.IProductRepository;
import com.example.demo.repository.IProductTypeRepository;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private IProductTypeRepository productTypeRepository;
    @Override
    public List<Product> showList() {
        return productRepository.showList();
    }

    @Override
    public Product findById(long id) {
        return productRepository.findById(id);
    }

    public Product updateProduct(ProductDTO product) {
        return productRepository.addProduct(product);
    }


    @Override
    public void addProduct(ProductDTO product) {
        productRepository.addProduct(product);
    }

    @Override
    public void deleteProduct(int id) {
        productRepository.deleteProduct(id);
    }

    @Override
    public List<Product> findProductByName(Pageable pageable, String name) {
        return productRepository.findByName(name);
    }
}
