package com.example.demo.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    public List<Transaction> findBySenderAccNo(String senderAccNo);

    public List<Transaction> findByReceiverAccNo(String receiverAccNo);

    // Find rows between two date values
    @Query("SELECT t FROM Transaction t WHERE t.transDate BETWEEN ?1 AND ?2 AND (t.senderAccNo=?3 OR t.receiverAccNo=?3)")
    public List<Transaction> findByReceiverAccNoOrSenderAccNo(Date startDate, Date endDate, String accno);

}
