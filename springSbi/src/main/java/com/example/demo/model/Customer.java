package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long CustomerID;
	
	@Column(name="FirstName")
	private String FirstName;
	
	@Column(name="LastName")
	private String LastName;
	
	@Column(name="Password")
	private String Password;
	
	@Column(name="Address")
	private String Address;
	
	@Column(name="DOB")
	private int DOB;
	
	@Column(name="ContactNo")
	private String ContactNo;

	@Column(name="Email")
	private String Email;
	
	//Default constructor
	public Customer() {
		
	}
	
	//Parameterised
	

	public long getCustomerID() {
		return CustomerID;
	}

	public Customer(String firstName, String lastName, String password, String address, int dOB, String contactNo,
			String email) {
		super();
		FirstName = firstName;
		LastName = lastName;
		Password = password;
		Address = address;
		DOB = dOB;
		ContactNo = contactNo;
		Email = email;
	}

	public void setCustomerID(long customerID) {
		CustomerID = customerID;
	}

	public String getFirstName() {
		return FirstName;
	}

	public void setFirstName(String firstName) {
		FirstName = firstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public int getDOB() {
		return DOB;
	}

	public void setDOB(int dOB) {
		DOB = dOB;
	}

	public String getContactNo() {
		return ContactNo;
	}

	public void setContactNo(String contactNo) {
		ContactNo = contactNo;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}
	
	//getter-setter
}