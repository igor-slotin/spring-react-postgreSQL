package carsell.exceptions.car;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class SaveCarException extends RuntimeException {
    public SaveCarException () {
        super("Something went wrong. Please correct all inputs and try again");
    }
}
