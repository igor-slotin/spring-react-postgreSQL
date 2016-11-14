package carsell;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@Configuration
@ComponentScan
@EnableAutoConfiguration
public class Application {

//    @Bean
//    CommandLineRunner init(UserRepository sellerRepository, CarRepository carRepository) {
//        return (event) -> Arrays.asList("seller1,seller2".split(","))
//                .forEach( val -> {
//                    User seller = sellerRepository.save(new User(val, "123"));
//                    carRepository.save(new Car(seller, "awesomeCar", 1988, "black"));
//                });
//    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}