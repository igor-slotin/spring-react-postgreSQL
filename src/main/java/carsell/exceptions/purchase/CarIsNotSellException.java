package carsell.exceptions.purchase;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class CarIsNotSellException extends RuntimeException {
    public CarIsNotSellException (Long carId) {
        super("Car with id: " + carId + " is not selling now");
    }
}
