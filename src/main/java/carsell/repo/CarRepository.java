package carsell.repo;

import carsell.models.Car;
import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {
    Collection<Car> findByUserUsername(String username);

    Collection<Car> findByIsSell(Boolean isSell);
    Optional<Car> findById(Long id);
}
