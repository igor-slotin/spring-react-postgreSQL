package carsell.exceptions.purchase;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class SameUserException extends RuntimeException {
    public SameUserException () {
        super ("Buyer and car owner is same person");
    }
}
