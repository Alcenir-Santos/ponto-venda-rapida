package br.com.foxi.checkout.service;

import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.Optional;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.foxi.checkout.domain.User;
import br.com.foxi.checkout.dto.Login;
import br.com.foxi.checkout.dto.Session;
import br.com.foxi.checkout.repository.UserRepository;
import br.com.foxi.checkout.security.JWTCreator;
import br.com.foxi.checkout.security.JWTObject;
import br.com.foxi.checkout.security.SecurityConfig;
import br.com.foxi.checkout.service.exceptions.AuthorizationException;
import br.com.foxi.checkout.service.exceptions.DataIntegrityException;
import br.com.foxi.checkout.service.exceptions.ObjectNotFoundException;

@Service
public class LoginService {
	@Autowired
	private PasswordEncoder encoder;
	@Autowired
	private UserRepository userRepository;

	public Session login(Login login) throws Exception {
		Session s = new Session();
		Optional<Session> sessao = Optional.empty();
		
		User user = userRepository.findByUsername(login.getUsername());
		boolean passwordOk = encoder.matches(login.getPassword(), user.getPassword());
		if (!passwordOk) {
			return sessao.orElseThrow(() -> new AuthorizationException("usuario ou senha invalido"));
		}else {
			Calendar c = Calendar.getInstance();
			c.setTimeZone(TimeZone.getTimeZone("GMT" + -3));
			Date data = c.getTime();
			s.setLogin(user.getUsername());
			sessao = Optional.of(s);
			JWTObject jwtObject = new JWTObject();
			jwtObject.setIssuedAt(data);
			c.add(Calendar.MILLISECOND, SecurityConfig.EXPIRATION);
			data = c.getTime();
			jwtObject.setExpiration(data);
			jwtObject.setRoles(user.getRoles());
			s.setToken(JWTCreator.create(SecurityConfig.KEY, jwtObject));
			System.out.println(data);
			return sessao.orElseThrow(() -> new AuthorizationException("usuario ou senha invalido"));
		}
	}
}
