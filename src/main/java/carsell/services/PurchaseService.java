package carsell.services;

import carsell.exceptions.purchase.CarIsNotSellException;
import carsell.exceptions.purchase.SameUserException;
import carsell.models.Car;
import carsell.models.Payments;
import carsell.models.Purchase;
import carsell.models.User;
import carsell.repo.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PurchaseService {
    private final UserService userService;
    private final CarService carService;
    private final PurchaseRepository purchaseRepository;
    private final PaymentsService paymentsService;

    @Transactional
    public User buyCar (Long userId, Long carId) {
        User buyer = userService.getUser(userId);
        Car sellCar = carService.getCar(carId);
        User seller = sellCar.getUser();

        if (userService.compareUsers(userId, seller.getId())) {
            throw new SameUserException();
        }

        if (!sellCar.getIsSell()) {
            throw new CarIsNotSellException(carId);
        }

        Purchase purchase = purchaseRepository.save(new Purchase(seller, buyer, sellCar));
        Payments payments = paymentsService.createPayments(seller, buyer, purchase, sellCar.getPrice());
        carService.buyCar(userId, carId);
        purchase.setPayments(payments);
        purchase.setPurchasePayed(true);
        purchaseRepository.save(purchase);

        return this.userService.getUser(userId);
    }

    @Autowired
    public PurchaseService (PurchaseRepository purchaseRepository, UserService userService, CarService carService,
                            PaymentsService paymentsService) {
        this.purchaseRepository = purchaseRepository;
        this.userService = userService;
        this.carService = carService;
        this.paymentsService = paymentsService;
    }
}
