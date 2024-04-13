package com.NoCountry.Patrickscoin.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.NoCountry.Patrickscoin.entities.Wallet;

public interface WalletRepository extends JpaRepository<Wallet, Serializable> {

}
