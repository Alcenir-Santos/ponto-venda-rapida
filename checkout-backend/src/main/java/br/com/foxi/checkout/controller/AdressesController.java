package br.com.foxi.checkout.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.foxi.checkout.domain.Adresses;
import br.com.foxi.checkout.service.AdressesService;

@RestController
@RequestMapping(value = "/adresses")
public class AdressesController {
	@Autowired
	private AdressesService adressesService;

	@PreAuthorize("hasRole('ROLE_MANAGERS')")
	@RequestMapping(value = "/findzipcode/{zipCode}", method = RequestMethod.GET)
	public ResponseEntity<Adresses> findZipCode(@PathVariable String zipCode) {

		Adresses adresses = adressesService.findZipCode(zipCode);

		return ResponseEntity.ok().body(adresses);
	}
	
	@PreAuthorize("hasRole('ROLE_MANAGERS')")
    @RequestMapping(value = "/find/{id}", method = RequestMethod.GET)
    public ResponseEntity<Adresses> findById(@PathVariable Integer id) {
        Adresses list = adressesService.find(id);
        return ResponseEntity.ok().body(list);
    }

}
