package br.com.foxi.checkout.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.foxi.checkout.domain.User;
import br.com.foxi.checkout.dto.Login;
import br.com.foxi.checkout.dto.Session;
import br.com.foxi.checkout.repository.UserRepository;
import br.com.foxi.checkout.security.JWTCreator;
import br.com.foxi.checkout.security.JWTObject;
import br.com.foxi.checkout.security.SecurityConfig;

@RestController
public class LoginController {
    @Autowired
    private PasswordEncoder encoder;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public Session logar(@RequestBody Login login){
        User user = userRepository.findByUsername(login.getUsername());
        if(user!=null) {
            boolean passwordOk =  encoder.matches(login.getPassword(), user.getPassword());
            if (!passwordOk) {
                throw new RuntimeException("Senha inválida para o login: " + login.getUsername());
            }
            //Estamos enviando um objeto Sessão para retornar mais informações do usuário
            Session sessao = new Session();
            sessao.setLogin(user.getUsername());

            JWTObject jwtObject = new JWTObject();
            jwtObject.setIssuedAt(new Date(System.currentTimeMillis()));
            jwtObject.setExpiration((new Date(System.currentTimeMillis() + SecurityConfig.EXPIRATION)));
            jwtObject.setRoles(user.getRoles());
            sessao.setToken(JWTCreator.create(SecurityConfig.KEY, jwtObject));
            return sessao;
        }else {
            throw new RuntimeException("Erro ao tentar fazer login");
        }
    }
}
