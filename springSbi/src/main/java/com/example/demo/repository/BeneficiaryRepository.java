package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Beneficiary;

@Repository
public interface BeneficiaryRepository extends JpaRepository<Beneficiary,String> {
    public List<Beneficiary> findByAccountNo(String accountNo);
    public List<Beneficiary> findByReceiverAccNo(String receiverAccNo);
    public List<Beneficiary> findByNickname(String nickname);
    public List<Beneficiary> findByName(String name);
}
