package com.NoCountry.Patrickscoin.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.NoCountry.Patrickscoin.entities.User;



//TO DO: IMPLEMENTAR JPA
public interface UserRepository extends JpaRepository<User, Serializable>{

    //TO DO: SALVAR EN BD
    @SuppressWarnings("unchecked")
    public User save(User user);
    
}
