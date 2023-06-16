package com.example.demo.dto;


import com.example.demo.model.ProductType;

import javax.validation.constraints.Digits;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

public class ProductDTO {
    private Integer id;
    @NotBlank(message = "Trường này không được để trống")
    private String idProduct;
    @NotBlank(message = "Trường này không được để trống")
    private String more;
    @NotBlank(message = "Trường này không được để trống")
    private String price;
    @NotBlank(message = "Trường này không được để trống")
    @Size(max = 100, message = "Tên sách không dài quá 100 ký tự")
    private String name;
    private String date;
    @Positive(message = "Số lượng sách phải là số nguyên dương")
    @Digits(fraction = 0, message = "Số lượng sách phải là số nguyên", integer = 10)
    private Integer quantity;
    private ProductType productType;

    public ProductDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(String idProduct) {
        this.idProduct = idProduct;
    }

    public String getMore() {
        return more;
    }

    public void setMore(String more) {
        this.more = more;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }
}