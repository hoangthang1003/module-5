package com.example.demo.repository;

import com.example.demo.model.Product;
import com.example.demo.model.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductTypeRepository extends JpaRepository<ProductType,Integer> {
    @Query(value = "select * from product_type where id = :id", nativeQuery = true)
    Product findProductTypeById(@Param("id") Long id);

    @Query(value = "select * from product_type", nativeQuery = true)
    List<ProductType> findAllProductType();
}
