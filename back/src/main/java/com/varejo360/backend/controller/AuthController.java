package com.varejo360.backend.controller;

import com.varejo360.backend.dto.AuthDto;
import com.varejo360.backend.dto.LoginResponseDto;
import com.varejo360.backend.infra.security.TokenService;
import com.varejo360.backend.model.User;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:5173","http://localhost:3000"})
@RequestMapping("login")
public class AuthController {

    //temos que falar pro spring security onde ele vai pegar isso daqui. Vamos criar no SecurityConfig
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping
    public ResponseEntity login(@RequestBody @Valid AuthDto loginData) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(loginData.getEmail(), loginData.getPassword());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((User) auth.getPrincipal());

        // Criar um objeto LoginResponseDto para retornar o token
        LoginResponseDto loginResponseDto = new LoginResponseDto();
        loginResponseDto.setToken(token);

        return new ResponseEntity<>(loginResponseDto, HttpStatus.OK);
    }
}
