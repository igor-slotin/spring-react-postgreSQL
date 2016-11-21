package carsell.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Payments {
    @Id
    @GeneratedValue
    private Long id;

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

    @JsonIgnore
    @OneToOne
    private Purchase purchase;

    private Integer summ;

    public Payments(Purchase purchase, Integer summ) {
        this.purchase = purchase;
        this.summ = summ;
    }

    Payments() {}
}
