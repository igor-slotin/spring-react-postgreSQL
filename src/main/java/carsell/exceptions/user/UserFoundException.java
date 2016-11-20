package carsell.exceptions.user;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
public class UserFoundException extends RuntimeException {
    public UserFoundException(String username) {
        super("user with username '" + username + "' already exist.");
    }
}
