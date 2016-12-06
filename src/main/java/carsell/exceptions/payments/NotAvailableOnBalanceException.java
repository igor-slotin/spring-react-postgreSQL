package carsell.exceptions.payments;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class NotAvailableOnBalanceException extends RuntimeException {
    public NotAvailableOnBalanceException () {
        super("Not enough money on account");
    }
}
