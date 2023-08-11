package com.example.demo.model;

import java.sql.Date;

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
	private long TransactionID;
	@Column(name="SenderAccNo")
	private long SenderAccNo;
	@Column(name="ReceiverAccNo")
	private long ReceiverAccNo;
	@Column(name="Amount")
	private double Amount;
	@Column(name="TransactionDetails")
	private String TransactionDetails;
	@Column(name="TransDate")
	private String TransDate;
	
	public Transaction() {
		
	}
	
	public Transaction(long senderAccNo, long receiverAccNo, double amount, String transactionDetails,
			String transDate) {
		super();
		SenderAccNo = senderAccNo;
		ReceiverAccNo = receiverAccNo;
		Amount = amount;
		TransactionDetails = transactionDetails;
		TransDate=transDate;
		
	}
	
	public long getTransactionID() {
		return TransactionID;
	}
	public void setTransactionID(long transactionID) {
		TransactionID = transactionID;
	}
	public long getSenderAccNo() {
		return SenderAccNo;
	}
	public void setSenderAccNo(long senderAccNo) {
		SenderAccNo = senderAccNo;
	}
	public long getReceiverAccNo() {
		return ReceiverAccNo;
	}
	public void setReceiverAccNo(long receiverAccNo) {
		ReceiverAccNo = receiverAccNo;
	}
	public double getAmount() {
		return Amount;
	}
	public void setAmount(double amount) {
		Amount = amount;
	}
	public String getTransactionDetails() {
		return TransactionDetails;
	}
	public void setTransactionDetails(String transactionDetails) {
		TransactionDetails = transactionDetails;
	}
	public String getTransDate() {
		return TransDate;
	}
	public void setTransDate(String transDate) {
		TransDate =transDate;
		
	}
	
	

}
