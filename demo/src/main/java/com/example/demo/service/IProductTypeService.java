package com.example.demo.service;

import com.example.demo.model.ProductType;

import java.util.List;

public interface IProductTypeService {
    List<ProductType> showProductType();

    ProductType findProductTypeById(int id);

    List<ProductType> findAllProductType();
}
