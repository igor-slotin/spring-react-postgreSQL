package carsell.controllers;

import carsell.models.Car;
import carsell.models.User;
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

    private final CarRepository carRepository;
    private final UserRepository userRepository;
    private final CarService carService;

    @RequestMapping(method = RequestMethod.GET, value = "/all")
    Collection<Car> getCar() {
        return this.carService.getSellCars();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{userId}/add")
    ResponseEntity<?> addCar(@PathVariable Long userId, @RequestBody Car input) {
        User user = getSeller(userId);
        if (user != null) {
            try {
                Car car = carRepository.save(
                        new Car(user, input.getModel(), input.getYear(), input.getColor(), input.getPrice())
                );
                return ResponseEntity.ok(car);
            } catch (Exception e) {
                return ResponseEntity.status(404).build();
            }
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }

    private User getSeller (Long userId) {
        return this.userRepository.findOne(userId);
    }

    @Autowired
    public CarController(CarRepository carRepository, UserRepository userRepository) {
        this.carRepository = carRepository;
        this.userRepository = userRepository;
        this.carService = new CarService(carRepository, userRepository);
    }
}
