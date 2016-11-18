package carsell.services;

import carsell.exceptions.car.CarNotFoundException;
import carsell.exceptions.car.SaveCarException;
import carsell.models.Car;
import carsell.models.User;
import carsell.repo.CarRepository;
import carsell.repo.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class CarService {
    private final CarRepository carRepository;
    private UserService userService;

    public Collection<Car> getSellCars() {
        return this.carRepository.findByIsSell(true);
    }

    public Car addCar(Long userId, Car input) {
        User user = this.userService.getUser(userId);
        return this.saveCar(new Car(user, input.getModel(), input.getYear(), input.getColor(), input.getPrice()));
    }

    public Car updateIsSell(Long userId, Long carId) {
        User user = this.userService.getUser(userId);
        Optional<Car> car = this.carRepository.findById(carId);
        if (car.isPresent()) {
            Car carObj = car.get();
            Boolean isSell = carObj.getIsSell();
            carObj.setIsSell(!isSell);
            return this.carRepository.save(carObj);
        } else {
            throw new CarNotFoundException(carId);
        }
    }

    private Car saveCar (Car car) {
        try {
            return this.carRepository.save(car);
        } catch (SaveCarException e) {
            throw new SaveCarException();
        }
    }

    public CarService(CarRepository carRepository, UserRepository userRepository) {
        this.carRepository = carRepository;
        this.userService = new UserService(userRepository);
    }
}
