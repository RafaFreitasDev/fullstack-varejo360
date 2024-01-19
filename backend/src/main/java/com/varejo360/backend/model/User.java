package com.varejo360.backend.model;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Entity
@Table(name = "users")
public class User implements UserDetails{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 30, nullable = false)
    private String name;

    @Column(length = 30, nullable = false, unique = true)
    private String email;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String password;

    public User() {
    }

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public long getId() {
        return id;
    }


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

    //o spring vai consultar as roles que o usuário tem para autorização
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    //aqui pega o "login"
    @Override
    public String getUsername() {
        return email;
    }

    //se a conta do usuário não está expirado
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    //se o usuário não está bloqueado
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    //se a credencial não está expirada
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    //se o usuário está ativo
    @Override
    public boolean isEnabled() {
        return true;
    }
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
