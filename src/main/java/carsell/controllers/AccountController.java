package carsell.controllers;

import carsell.bodyParsers.BalanceObject;
import carsell.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/account")
public class AccountController {
    private final AccountService accountService;

    @RequestMapping(method = RequestMethod.PUT, value = "/{userId}")
    ResponseEntity<?> increaseBalance (@PathVariable Long userId, @RequestBody BalanceObject balanceObject) {
        accountService.increaseBalance(userId, balanceObject.getBalance());
        return ResponseEntity.ok("Added");
    }

    @Autowired
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }
}


