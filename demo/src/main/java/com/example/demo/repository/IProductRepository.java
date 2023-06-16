package com.example.demo.repository;

import com.example.demo.dto.ProductDTO;
import com.example.demo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {

    @Query(value ="select * from product",nativeQuery = true)
    List<Product> showList();
    @Query(value = "select * from product where id = :id", nativeQuery = true)
    Product findById(@Param("id") Long id);

    @Modifying
    @Transactional
    @Query(value = "delete from product where id = :id", nativeQuery = true)
    void deleteProduct(@Param("id") int id);
    @Query("select p from Product p where p.name like %:name%")

    List<Product> findByName(@Param("name") String name);
    @Modifying
    @Transactional
    @Query(value = "insert into product (id, name,more, quantity,price,date,product_type) " +
            "values (:id, :name,:more, :quantity, :price,:date, :product_type)", nativeQuery = true)
    Product addProduct(ProductDTO product);


}
