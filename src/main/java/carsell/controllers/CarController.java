package carsell.controllers;

import carsell.models.Car;
import carsell.repo.CarRepository;
import carsell.repo.UserRepository;
import carsell.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/car")
public class CarController {
    private final CarService carService;

    @RequestMapping(method = RequestMethod.GET)
    Collection<Car> getCar() {
        return this.carService.getSellCars();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{userId}")
    ResponseEntity<?> addCar(@PathVariable Long userId, @RequestBody Car input) {
        return ResponseEntity.ok(this.carService.addCar(userId, input));
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{userId}/{carId}")
    ResponseEntity<?> updateIsSell(@PathVariable Long userId, @PathVariable Long carId) {
        return ResponseEntity.ok(this.carService.updateIsSell(userId, carId));
    }

    @Autowired
    public CarController(CarService carService) {
        this.carService = carService;
    }
}
