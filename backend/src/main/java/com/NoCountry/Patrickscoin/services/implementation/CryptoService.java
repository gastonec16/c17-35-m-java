package com.NoCountry.Patrickscoin.services.implementation;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.NoCountry.Patrickscoin.dto.request.CryptoDto;
import com.NoCountry.Patrickscoin.entities.enumeration.CryptoName;

@Service
public class CryptoService {

    @Autowired
    private WebClient webClient;

    public List<CryptoDto> getAllCrypto(){
        List<CryptoName> nameCryptos = Arrays.asList(CryptoName.values());
        List<CryptoDto> cryptoDtos = new ArrayList<>();

        for (CryptoName name : nameCryptos) {
            cryptoDtos.add(getCryptoByName(name));
        }
        return cryptoDtos;
    }

    public CryptoDto getCryptoByName(CryptoName name){

        HashMap<?,?> jsonMap = webClient.get()
            .uri("/{name}/ARS", name)
            .retrieve()
            .bodyToMono(HashMap.class)
            .log()
            .block();

        @SuppressWarnings("rawtypes")
        HashMap<?,?> jsonCrypto = (HashMap)jsonMap.values().iterator().next();

        if(!jsonCrypto.isEmpty()){
            return new CryptoDto(
                (double) jsonMap.get("ask"),
                (double) jsonMap.get("totalAsk"),
                (double) jsonMap.get("bid")
            );
        }else
            return null;
    }
}
