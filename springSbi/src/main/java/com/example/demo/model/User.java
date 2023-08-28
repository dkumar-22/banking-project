package com.example.demo.model;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

// import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Entity
@Table(name = "Credentials")
public class User implements UserDetails {

	@Id
	private String id;

	@Column(name = "customerID", nullable = false, unique = true)
	private String customerID;

	@Column(name = "password")
	private String password;

	@Column(name = "transactionPassword")
	private String transactionPassword;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}

	@Override
	public String getUsername() {
		return customerID;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	// Default constructor
	// public User() {

	// }

	// //Parameterised

	// public String getCustomerID() {
	// return customerID;
	// }

	// public String getID() {
	// return id;
	// }

	// public User(String id, String password, String CustomerID, String
	// TransactionPassword) {
	// super();
	// this.password = password;
	// this.transactionPassword = TransactionPassword;
	// this.id = id;
	// this.customerID = CustomerID;
	// }

	// public void setCustomerID(String customerID) {
	// this.customerID = customerID;
	// }

	// public void setID(String ID) {
	// id = ID;
	// }

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	// public String getTransactionPassword() {
	// return transactionPassword;
	// }

	// public void setTransactionPassword(String Transactionpassword) {
	// transactionPassword = Transactionpassword;
	// }

	// getter-setter
}
