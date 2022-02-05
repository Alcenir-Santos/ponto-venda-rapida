package br.com.foxi.checkout.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.foxi.checkout.domain.Costumer;

@Repository
public interface CostumerRepository extends JpaRepository<Costumer, Integer> {
    
    @Transactional(readOnly = true)
    Costumer findByDocument(String doc);
    @Transactional(readOnly = true)
    Costumer findByDocumentAndId(String doc, Integer id);
}
