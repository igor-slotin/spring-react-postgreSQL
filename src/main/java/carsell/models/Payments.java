package carsell.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Payments {
    @Id
    @GeneratedValue
    private Long id;

    public User getBuyer() {
        return buyer;
    }

    public void setBuyer(User buyer) {
        this.buyer = buyer;
    }

    public User getSeller() {
        return seller;
    }

    public void setSeller(User seller) {
        this.seller = seller;
    }

    public Purchase getPurchase() {
        return purchase;
    }

    public void setPurchase(Purchase purchase) {
        this.purchase = purchase;
    }

    public Integer getSumm() {
        return summ;
    }

    public void setSumm(Integer summ) {
        this.summ = summ;
    }

    @ManyToOne
    private User buyer;

    @ManyToOne
    private User seller;

    @OneToOne
    private Purchase purchase;

    private Integer summ;

    public Payments(Purchase purchase, User buyer, User seller, Integer summ) {
        this.purchase = purchase;
        this.buyer = buyer;
        this.seller = seller;
        this.summ = summ;
    }

    Payments() {}
}
