package carsell.services;

import carsell.exceptions.NotFoundException;
import carsell.exceptions.car.SaveCarException;
import carsell.models.Car;
import carsell.models.User;
import carsell.repo.CarRepository;
import carsell.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class CarService {
    private final CarRepository carRepository;
    private UserService userService;

    public Collection<Car> getSellCars() {
        return carRepository.findByIsSell(true);
    }

    public Car getCar(Long carId) {
        Optional<Car> optionalCar = carRepository.findById(carId);
        if (optionalCar.isPresent()) {
            return optionalCar.get();
        } else {
            throw new NotFoundException(carId, "Car");
        }
    }

    public Car addCar(Long userId, Car input) {
        User user = userService.getUser(userId);
        return saveCar(new Car(user, input.getModel(), input.getYear(), input.getColor(), input.getPrice()));
    }

    public Car buyCar (Long userId, Long carId) {
        Car car = getCar(carId);
        car.setUser(userService.getUser(userId));
        car.setIsSell(false);
        return carRepository.save(car);
    }

    private Car saveCar (Car car) {
        try {
            return carRepository.save(car);
        } catch (SaveCarException e) {
            throw new SaveCarException();
        }
    }

    public Car updateIsSell(Long userId, Long carId) {
        User user = userService.getUser(userId);
        Optional<Car> car = carRepository.findById(carId);
        if (car.isPresent()) {
            Car carObj = car.get();
            if (user.getUsername().equals(carObj.getUser().getUsername())) {
                Boolean isSell = carObj.getIsSell();
                carObj.setIsSell(!isSell);
                return carRepository.save(carObj);
            } else {
                throw new NotFoundException(carId, "Car");
            }
        } else {
            throw new NotFoundException(carId, "Car");
        }
    }


    @Autowired
    public CarService(CarRepository carRepository, UserService userService) {
        this.carRepository = carRepository;
        this.userService = userService;
    }
}
