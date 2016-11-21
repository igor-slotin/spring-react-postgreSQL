package carsell.exceptions.user;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
public class IncorrectUserParamsException extends RuntimeException {
    public IncorrectUserParamsException() {
        super("Login or password is incorrect");
    }
}