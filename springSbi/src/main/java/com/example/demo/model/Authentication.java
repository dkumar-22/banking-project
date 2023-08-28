package com.example.demo.model;

public class Authentication {
    private String customerID;
    private String password;

    public Authentication() {
    }

    public Authentication(String customerID, String password) {
        this.customerID = customerID;
        this.password = password;
    }

    public String getCustomerID() {
        return this.customerID;
    }

    public void setCustomerID(String customerID) {
        this.customerID = customerID;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
