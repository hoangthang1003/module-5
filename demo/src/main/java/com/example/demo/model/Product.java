package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name="product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "productType",referencedColumnName = "id")
    @JsonManagedReference
    private ProductType productType;

    private String idProduct;
    private String name;
    private String more;
    private int quantity;
    private double price;
    private String date;

    public Product() {
    }

    public Product(ProductType productType, String idProduct, String name, String more, int quantity, double price, String date) {
        this.productType = productType;
        this.idProduct = idProduct;
        this.name = name;
        this.more = more;
        this.quantity = quantity;
        this.price = price;
        this.date = date;
    }

    public Product(int id, ProductType productType, String idProduct, String name, String more, int quantity, double price, String date) {
        this.id = id;
        this.productType = productType;
        this.idProduct = idProduct;
        this.name = name;
        this.more = more;
        this.quantity = quantity;
        this.price = price;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ProductType getProductType() {
        return productType;
    }

    public void setProductType(ProductType productType) {
        this.productType = productType;
    }

    public String getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(String idProduct) {
        this.idProduct = idProduct;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMore() {
        return more;
    }

    public void setMore(String more) {
        this.more = more;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
