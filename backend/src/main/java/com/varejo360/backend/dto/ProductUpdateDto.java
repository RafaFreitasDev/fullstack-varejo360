package com.varejo360.backend.dto;

import jakarta.validation.constraints.NotNull;

public class ProductUpdateDto {
//    @NotNull(message = "Value can not be null")
//    private Long user_id;


    private String code;


    private String name;


//    public Long getUser_id() {
//        return user_id;
//    }
//
//    public void setUser_id(Long user_id) {
//        this.user_id = user_id;
//    }

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
}
