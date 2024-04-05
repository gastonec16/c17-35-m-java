package com.NoCountry.Patrick.sCoins.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.NoCountry.Patrick.sCoins.entities.User;



//TO DO: IMPLEMENTAR JPA
public interface UserRepository extends JpaRepository<User,Long>{

    //TO DO: SALVAR EN BD
    @SuppressWarnings("unchecked")
    public User save(User user);
    
}
