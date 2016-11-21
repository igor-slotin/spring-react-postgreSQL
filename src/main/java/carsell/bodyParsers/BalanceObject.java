package carsell.bodyParsers;

public class BalanceObject {
    private Integer balance;

    public void setBalance(String balance) {
        this.balance = Integer.parseInt(balance);
    }

    public Integer getBalance () {
        return balance;
    }

    public BalanceObject (String balance) {
        this.balance = Integer.parseInt(balance);
    }

    BalanceObject() {}
}
