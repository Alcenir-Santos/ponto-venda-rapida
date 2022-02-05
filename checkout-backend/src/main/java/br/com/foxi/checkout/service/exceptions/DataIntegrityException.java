package br.com.foxi.checkout.service.exceptions;

public class DataIntegrityException extends RuntimeException {

	private static final long serialVersionUID = -2687676761803780390L;
	
	public DataIntegrityException(String message) {
		super(message);
	}
	public DataIntegrityException(String message, Throwable cause) {
		super(message, cause);
	}
}	
