package br.com.foxi.checkout.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.foxi.checkout.domain.City;

@Repository
public interface CityRepository extends JpaRepository<City, Integer> {
    
    @Transactional(readOnly = true)
	City findByName(String zipCode);
}
