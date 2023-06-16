package com.example.demo.controller;

import com.example.demo.dto.ProductDTO;
import com.example.demo.model.Product;
import com.example.demo.model.ProductType;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/product2")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("")
    public List<Product> list(@PageableDefault(size = 3) Pageable pageable, @RequestParam(required = false, defaultValue = "") String name) {
        return productService.findProductByName(pageable, name);
    }



    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteProduct(@PathVariable Integer id) {
        productService.deleteProduct(id);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Product getProduct(@PathVariable Integer id) {
        return productService.findById(id);
    }

    @PostMapping("")
    public ResponseEntity<?> saveBook(@Validated @RequestBody ProductDTO productDTO, BindingResult bindingResult) {
        if (!bindingResult.hasErrors()) {
            productService.addProduct(productDTO);
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> errors = bindingResult.getFieldErrors();
            for (FieldError error : errors) {
                if (!map.containsKey(error.getField())) {
                    map.put(error.getField(), error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PatchMapping("/update")
    public ResponseEntity<Product> update( @RequestBody ProductDTO product) {
        return new ResponseEntity<>(productService.updateProduct(product), HttpStatus.OK);
    }

}
