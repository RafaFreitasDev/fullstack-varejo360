package com.varejo360.backend.service;

import com.varejo360.backend.dto.UserDto;
import com.varejo360.backend.exception.AppException;
import com.varejo360.backend.model.User;
import com.varejo360.backend.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class UserService {
    private  final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(final UserDto userData){
        if(userRepository.existsUserByEmail(userData.getEmail())){
            throw new AppException("Email already exists", HttpStatus.CONFLICT);
        }

        final User user = new User(userData.getName(), userData.getEmail(), userData.getPassword());

        return userRepository.save(user);
    }

    public List<User> readUsers() {
        return userRepository.findAll();
    }

    public User getProfile(final long id) {
        return userRepository.findById(id).orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));
    }

    //(throws Exception) isso é necessário pelo "new Exception
    public User retrieveUser(final long id) {

        //esse tipo de tratamento de erro fecha o app, vamos modifica-lo
        return userRepository.findById(id).orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));

    }

    public User updateUser(final UserDto userData, final long id) {

        final User foundUser = userRepository.findById(id).orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));

        foundUser.setName(userData.getName());
        foundUser.setEmail(userData.getEmail());
        foundUser.setPassword(userData.getPassword());

        return userRepository.save(foundUser);

    }

    public void deleteUser(final long id) {

        final User foundUser = userRepository.findById(id).orElseThrow(() -> new AppException("User not found", HttpStatus.NOT_FOUND));

        userRepository.delete(foundUser);

    }
}
