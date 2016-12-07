package carsell.services;

import carsell.exceptions.NotFoundException;
import carsell.models.Account;
import carsell.models.User;
import carsell.repo.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class AccountService {
    private AccountRepository accountRepository;

    public Account createAccount (User user) {
        return this.accountRepository.save(new Account(user));
    }

    @Transactional
    public void increaseBalance (Long accountId, Integer balance) {
        Account account = findAccount(accountId);
        account.addToBalance(balance);
        this.accountRepository.save(account);
    }

    @Transactional
    public void decreaseBalance (Long userId, Integer balance) {
        Account account = findAccount(userId);
        account.removeFromBalance(balance);
        this.accountRepository.save(account);
    }

    public Boolean availableOnBalance (Long userId, Integer summ) {
        return getBalance(userId) >= summ;
    }

    public Integer getBalance (Long userId) {
        Account account = findAccount(userId);
        return account.getBalance();
    }

    private Account findAccount (Long userId) {
        Optional<Account> optionalAccount = this.accountRepository.findByUserId(userId);
        if (optionalAccount.isPresent()) {
            return optionalAccount.get();
        } else {
            throw new NotFoundException("Account");
        }
    }

    @Autowired
    public AccountService (AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }
}
