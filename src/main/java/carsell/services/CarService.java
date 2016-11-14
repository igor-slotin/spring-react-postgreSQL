package carsell.services;

import carsell.models.Car;
import carsell.repo.CarRepository;
import carsell.repo.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class CarService {
    private final CarRepository carRepository;
    private final UserRepository userRepository;

    public Collection<Car> getSellCars() {
        return this.carRepository.findByIsSell(true);
    }

    public CarService(CarRepository carRepository, UserRepository userRepository) {
        this.carRepository = carRepository;
        this.userRepository = userRepository;
    }
}
