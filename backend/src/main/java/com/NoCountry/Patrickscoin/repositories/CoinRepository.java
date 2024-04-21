package com.NoCountry.Patrickscoin.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.NoCountry.Patrickscoin.entities.Coin;

@Repository
public interface CoinRepository extends JpaRepository <Coin, Long> {

}
