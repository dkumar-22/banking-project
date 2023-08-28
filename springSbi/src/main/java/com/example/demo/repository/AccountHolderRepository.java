package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.AccountHolder;

@Repository
public interface AccountHolderRepository extends JpaRepository<AccountHolder, String> {
    public AccountHolder findByCustomerID(String customerID);

    public List<AccountHolder> findByisActive(Boolean isActive);

    public AccountHolder findByAccountNo(String accountNo);
}
