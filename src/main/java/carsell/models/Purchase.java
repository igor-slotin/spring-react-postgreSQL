package carsell.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Purchase {
    @Id
    @GeneratedValue
    private Long id;

    @JsonIgnore
    @ManyToOne
    private User seller;

    @JsonIgnore
    @ManyToOne
    private User buyer;

    @OneToOne
    private Car car;

    @OneToOne
    public Payments payments;

    private boolean purchasePayed = false;

    public Payments getPayments() {
        return payments;
    }

    public void setPayments(Payments payments) {
        this.payments = payments;
    }

    public boolean isPurchasePayed() {
        return purchasePayed;
    }

    public void setPurchasePayed(boolean purchasePayed) {
        this.purchasePayed = purchasePayed;
    }

    public User getSeller() {
        return seller;
    }

    public void setSeller(User seller) {
        this.seller = seller;
    }

    public User getBuyer() {
        return buyer;
    }

    public void setBuyer(User buyer) {
        this.buyer = buyer;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public Purchase(User seller, User buyer, Car car) {
        this.car = car;
        this.seller = seller;
        this.buyer = buyer;
    }

    Purchase() {}
}
