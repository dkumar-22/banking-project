package com.example.demo.model;

import java.sql.Date;

// import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "transactions")

public class Transaction {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long transactionID;
	@Column(name = "senderAccNo")
	private String senderAccNo;
	@Column(name = "receiverAccNo")
	private String receiverAccNo;
	@Column(name = "amount")
	private double amount;
	@Column(name = "transactionType")
	private String transactionType;
	@Column(name = "message")
	private String message;
	@Column(name = "transDate")
	private Date transDate;

	public Transaction() {

	}

	public Transaction(String senderAccNo, String receiverAccNo, double amount, String transactionType,
			String msg, Date transDate) {
		super();
		this.senderAccNo = senderAccNo;
		this.receiverAccNo = receiverAccNo;
		this.amount = amount;
		this.transactionType = transactionType;
		message = msg;
		this.transDate = transDate;

	}

	public long getTransactionID() {
		return transactionID;
	}

	public void setTransactionID(long transactionID) {
		this.transactionID = transactionID;
	}

	public String getSenderAccNo() {
		return senderAccNo;
	}

	public void setSenderAccNo(String senderAccNo) {
		this.senderAccNo = senderAccNo;
	}

	public String getReceiverAccNo() {
		return receiverAccNo;
	}

	public void setReceiverAccNo(String receiverAccNo) {
		this.receiverAccNo = receiverAccNo;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionDetails) {
		this.transactionType = transactionDetails;
	}

	public Date getTransDate() {
		return transDate;
	}

	public void setTransDate(Date transDate) {
		this.transDate = transDate;

	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String msg) {
		message = msg;
	}

	public Date getDate() {
		return transDate;
	}

	public void setDate(Date date) {
		transDate = date;
	}

}
