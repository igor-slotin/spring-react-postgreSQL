package carsell.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Car {
    @JsonIgnore
    @ManyToOne
    private User user;

    @Id
    @GeneratedValue
    public Long id;

    Car() {}

    public Car(User user, String model, Integer year, String color, Integer price) {
        this.user = user;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
    }

    public String model;
    public Integer year;
    public String color;
    public Integer price;
    public Boolean isSell = false;


    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public String getModel() {
        return model;
    }

    public Integer getYear() {
        return year;
    }
    public Integer getPrice() {
        return price;
    }

    public void setIsSell (Boolean isSell) {
        this.isSell = isSell;
    }
    public Boolean getIsSell () {
        return isSell;
    }

    public String getColor() {
        return color;
    }
}
