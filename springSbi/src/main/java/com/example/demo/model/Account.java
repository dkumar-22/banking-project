package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Accounts")

public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long userId;
	
	@Column (name = "accountNo")
	private String accountNo;
	
	@Column (name = "accountType")
	private String accountType;
	
	@Column (name = "balance")
	private long balance;
	
	public Account(long userId, String accountNo, String accountType, long balance) {
		super();
		this.userId = userId;
		this.accountNo = accountNo;
		this.accountType = accountType;
		this.balance = balance;
	}
	
	public Account() {
//		super();
		// TODO Auto-generated constructor stub
	}

	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	public long getBalance() {
		return balance;
	}
	public void setBalance(long balance) {
		this.balance = balance;
	}
	
	
	
}
