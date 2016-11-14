package carsell.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Account {
    @Id
    @GeneratedValue
    private Long id;

    @OneToOne
    private User user;

    private Integer balance;

    public Integer getBalance() {
        return balance;
    }

    public Integer addToBalance(Integer summ) {
        this.balance += summ;
        return this.balance;
    }

    public Integer removeFromBalance(Integer summ) {
        this.balance -= summ;
        return this.balance;
    }

    public Account(User user, Integer balance) {
        this.user = user;
        this.balance = balance;
    }

    Account() {}
}
