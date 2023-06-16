package com.example.demo.service.impl;

import com.example.demo.model.ProductType;
import com.example.demo.repository.IProductTypeRepository;
import com.example.demo.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {

    @Autowired
    private IProductTypeRepository productTypeRepository;
    @Override
    public List<ProductType> showProductType() {
        return productTypeRepository.findAll();
    }

    @Override
    public ProductType findProductTypeById(int id) {
        return null;
    }

    @Override
    public List<ProductType> findAllProductType() {
        return  productTypeRepository.findAllProductType();
    }
}
