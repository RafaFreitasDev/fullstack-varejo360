package com.varejo360.backend.controller;

import com.varejo360.backend.dto.UserDto;
import com.varejo360.backend.infra.security.TokenService;
import com.varejo360.backend.model.User;
import com.varejo360.backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:5173","http://localhost:3000"})
@RestController
@RequestMapping("/users")
public class UserController {
    //conectar o serviço que a gente criou
    private final UserService userService;

    @Autowired
    private TokenService tokenService;

    //constructor
    public UserController(UserService userService) {
        this.userService = userService;
    }

    //setar rota de criação
    @PostMapping
    public ResponseEntity<User> createUser(@Valid @RequestBody final UserDto userData){
        userData.setPassword(new BCryptPasswordEncoder().encode(userData.getPassword()));
        User createdUser = userService.createUser(userData);

        return  new ResponseEntity<User>(createdUser, HttpStatus.CREATED);
    }

    //setar rota de leitura
    //@GetMapping("/read"), poderia fazer assim para modificar o endpoint (/users/read)
    @GetMapping
    public  ResponseEntity<List<User>> readUsers(){
        final List<User> allUsers = userService.readUsers();

        return new ResponseEntity<List<User>>(allUsers, HttpStatus.OK);
    }

    @CrossOrigin(origins = {"http://localhost:5173","http://localhost:3000"})
    @GetMapping("/profile")
    public ResponseEntity<User> getProfile(@RequestHeader("Authorization") String token) {
        token = token.replace("Bearer ", "");
        Long userId = tokenService.getUserIdFromToken(token);
        final User user = userService.getProfile(userId);

        return new ResponseEntity<User>(user, HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<User> retrieveUser(@PathVariable final String id) {

        final User user = userService.retrieveUser(Long.parseLong(id));

        return new ResponseEntity<User>(user, HttpStatus.OK);

    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@Valid @RequestBody final UserDto userData, @PathVariable final String id) {
        userData.setPassword(new BCryptPasswordEncoder().encode(userData.getPassword()));
        //convertendo id (String) para Long
        final User updatedUser = userService.updateUser(userData, Long.parseLong(id));

        return new ResponseEntity<User>(updatedUser, HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable final String id) {

        userService.deleteUser(Long.parseLong(id));

        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);

    }
}