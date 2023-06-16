package com.example.demo.controller;

import com.example.demo.model.ProductType;
import com.example.demo.repository.IProductTypeRepository;
import com.example.demo.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/productType")
@CrossOrigin("*")
public class ProductTypeController {
    @Autowired
    private IProductTypeService productTypeService;

    @GetMapping("")
    public List<ProductType> list() {
        return  productTypeService.findAllProductType();
    }
}
