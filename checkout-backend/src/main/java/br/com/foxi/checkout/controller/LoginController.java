package br.com.foxi.checkout.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.foxi.checkout.dto.Login;
import br.com.foxi.checkout.dto.Session;
import br.com.foxi.checkout.service.LoginService;

@RestController
public class LoginController {
   
	@Autowired
	private LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<Session> logar(@RequestBody Login login) throws Exception{
        Session sessao = loginService.login(login);
        return ResponseEntity.ok().body(sessao);
    }
    
}
