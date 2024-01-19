package com.varejo360.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id;


    @JoinColumn(nullable = false, referencedColumnName = "id")
    private User user;

    @Column(nullable = false, unique = true)
    private String code;

    @Column(length = 30, nullable = false, unique = true)
    private String name;


    public Product(){
    }

    public Product(User user, String code, String name) {
        this.user = user;
        this.code = code;
        this.name = name;
    }

    public long getId() {
        return id;
    }


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", user=" + user +
                ", code=" + code +
                ", name='" + name + '\'' +
                '}';
    }
}
