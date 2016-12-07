package carsell.services;

import carsell.exceptions.payments.NotAvailableOnBalanceException;
import carsell.models.Payments;
import carsell.models.Purchase;
import carsell.models.User;
import carsell.repo.PaymentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentsService {
    private final PaymentsRepository paymentsRepository;
    private final AccountService accountService;

    public Payments createPayments (User seller, User buyer, Purchase purchase, Integer summ) {
        if (!accountService.availableOnBalance(buyer.getId(), summ)) {
            throw new NotAvailableOnBalanceException();
        }

        accountService.decreaseBalance(buyer.getId(), summ);
        accountService.increaseBalance(seller.getId(), summ);
        return paymentsRepository.save(new Payments(purchase, summ));
    }


    @Autowired
    public PaymentsService (PaymentsRepository paymentsRepository, AccountService accountService) {
        this.paymentsRepository = paymentsRepository;
        this.accountService = accountService;
    }

}
