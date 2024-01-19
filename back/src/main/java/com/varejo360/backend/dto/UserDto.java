package com.varejo360.backend.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class UserDto {
    @NotEmpty(message = "Name can not be empty")
    @Size(max = 30, message = "Name must be lower than 30 characters long")
    private String name;

    @NotEmpty(message = "Name can not be empty")
    @Size(max = 30, message = "Email must be lower than 30 characters long")
    private String email;

    @NotEmpty(message = "Password can not be empty")
    private String password;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
