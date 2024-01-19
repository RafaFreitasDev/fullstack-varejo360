package com.varejo360.backend.repository;

import com.varejo360.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsUserByEmail(final String email);

    UserDetails findByEmail(String email);

}
