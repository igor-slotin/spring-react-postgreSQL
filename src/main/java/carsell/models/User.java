package carsell.models;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {
    @OneToMany(mappedBy = "user")
    public Set<Car> cars = new HashSet<>();

    @OneToMany(mappedBy = "buyer")
    private Set<Purchase> purchases = new HashSet<>();

    @OneToMany(mappedBy = "seller")
    private Set<Purchase> sells = new HashSet<>();

    @OneToOne(mappedBy = "user")
    private Account account;

    @Id
    @GeneratedValue
    public Long id;

    public String password;

    public String username;

    public Set<Car> getCars() {
        return cars;
    }

    public void setCars(Set<Car> cars) {
        this.cars = cars;
    }

    public Set<Purchase> getPurchases() {
        return purchases;
    }

    public void setPurchases(Set<Purchase> purchases) {
        this.purchases = purchases;
    }

    public Set<Purchase> getSells() {
        return sells;
    }

    public void setSells(Set<Purchase> sells) {
        this.sells = sells;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public User(String name, String password) {
        this.username = name;
        this.password = password;
    }

    User() {}
}
