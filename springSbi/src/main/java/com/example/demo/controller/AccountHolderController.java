package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.AccountHolder;
import com.example.demo.repository.AccountHolderRepository;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AccountHolderController {

    @Autowired
    private AccountHolderRepository userRepository;

    // get all customers

    @GetMapping("/users")
    public List<AccountHolder> getAllCustomers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public AccountHolder getACustomers(@PathVariable(value = "id") String userID) throws ResourceNotFoundException {
        return userRepository.findById(userID)
                .orElseThrow(() -> new ResourceNotFoundException("User is not Available:" + userID));
    }

    @GetMapping("/exists/{id}")
    public Boolean whetherExists(@PathVariable(value = "id") String userID) throws ResourceNotFoundException {
        AccountHolder user = userRepository.findById(userID).get();
        if (user == null || user.getIsActive() == false)
            return false;
        else
            return true;
    }

    @GetMapping("/exists/acno/{id}")
    public Boolean whetherExistsByAccNo(@PathVariable(value = "id") String userID) throws ResourceNotFoundException {
        AccountHolder user = userRepository.findByAccountNo(userID);
        if (user == null || user.getIsActive() == false)
            return false;
        else
            return true;
    }

    @GetMapping("/user/active/{id}")
    public List<AccountHolder> getACustomers(@PathVariable(value = "id") Boolean userID)
            throws ResourceNotFoundException {
        return userRepository.findByisActive(userID);
    }

    @GetMapping("/get/user/{cid}")
    public AccountHolder getACustomersbyCID(@PathVariable(value = "cid") String cid) throws ResourceNotFoundException {
        AccountHolder user = userRepository.findByCustomerID(cid);
        if (user == null)
            throw new ResourceNotFoundException("User is not Available:" + cid);
        return user;
    }

    @GetMapping("/getbyaccno/{cid}")
    public AccountHolder getACustomerByAccNo(@PathVariable(value = "cid") String cid) throws ResourceNotFoundException {
        AccountHolder user = userRepository.findByAccountNo(cid);
        if (user == null)
            throw new ResourceNotFoundException("User is not Available:" + cid);
        return user;

    }

    @PostMapping("/sendUser")
    public AccountHolder createCustomer(@Validated @RequestBody AccountHolder newUser) {
        return userRepository.save(newUser);
    }

    @PutMapping("/transfer/{ac1}/{ac2}/{amt}")
    public String transferAmount(@PathVariable(value = "ac1") String ac1, @PathVariable(value = "ac2") String ac2,
            @PathVariable(value = "amt") Double amt) {
        if (amt < 0)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Amount cannot be negative");
        AccountHolder details1 = userRepository.findByAccountNo(ac1);
        if (details1 == null)
            throw new ResourceNotFoundException("Account Number is not Available:" + ac1);
        AccountHolder details2 = userRepository.findByAccountNo(ac2);
        if (details2 == null)
            throw new ResourceNotFoundException("Account Number is not Available:" + ac2);
        if (details1.getMinAccountBalance() < amt)
            return "Insufficient Balance";
        else {
            details1.setMinAccountBalance(details1.getMinAccountBalance() - amt);
            userRepository.save(details1);
            details2.setMinAccountBalance(details2.getMinAccountBalance() + amt);
            userRepository.save(details2);
            return "Transfer Successful";
        }
    }

    @PutMapping("/withdraw/{ac}/{amt}")
    public String transferAmount(@PathVariable(value = "ac") String ac,
            @PathVariable(value = "amt") Double amt) {
        if (amt < 0)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Amount cannot be negative");
        AccountHolder details1 = userRepository.findByAccountNo(ac);
        if (details1 == null)
            throw new ResourceNotFoundException("Account Number is not Available:" + ac);
        if (details1.getMinAccountBalance() < amt)
            return "Insufficient Balance";
        else {
            details1.setMinAccountBalance(details1.getMinAccountBalance() - amt);
            userRepository.save(details1);
            return "Withdrawal Successful";
        }
    }

    @PutMapping("/updateUser/{id}")
    public ResponseEntity<AccountHolder> updateCustomer(@PathVariable(value = "id") String userID,
            @Validated @RequestBody AccountHolder newUser) throws ResourceNotFoundException {
        AccountHolder updatedCustomer = userRepository.findById(userID)
                .orElseThrow(() -> new ResourceNotFoundException("User is not avaiable:" + userID));
        updatedCustomer.setCurrentAddress(newUser.getCurrentAddress());
        updatedCustomer.setPermanentAddress(newUser.getPermanentAddress());
        updatedCustomer.setOccupation(newUser.getOccupation());
        updatedCustomer.setContactNo(newUser.getContactNo());
        userRepository.save(updatedCustomer);

        return ResponseEntity.ok(updatedCustomer);
    }

    @PutMapping("/makeActive/{id}")
    public ResponseEntity<AccountHolder> makeActiveUser(@PathVariable(value = "id") String userID)
            throws ResourceNotFoundException {
        AccountHolder updatedCustomer = userRepository.findById(userID)
                .orElseThrow(() -> new ResourceNotFoundException("User is not avaiable:" + userID));
        updatedCustomer.setIsActive(true);
        userRepository.save(updatedCustomer);

        return ResponseEntity.ok(updatedCustomer);
    }

    @PutMapping("/makeInactive/{id}")
    public ResponseEntity<AccountHolder> makeInActiveUser(@PathVariable(value = "id") String userID)
            throws ResourceNotFoundException {
        AccountHolder updatedCustomer = userRepository.findById(userID)
                .orElseThrow(() -> new ResourceNotFoundException("User is not avaiable:" + userID));
        updatedCustomer.setIsActive(false);
        userRepository.save(updatedCustomer);

        return ResponseEntity.ok(updatedCustomer);
    }

    @DeleteMapping("/deleteUser/{id}")
    public Map<String, Boolean> deleteCustomer(@PathVariable(value = "id") String userID)
            throws ResourceNotFoundException {
        AccountHolder updatedCustomer = userRepository.findById(userID)
                .orElseThrow(() -> new ResourceNotFoundException("User is not Available:" + userID));
        userRepository.delete(updatedCustomer);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Customer has been Deleted", Boolean.TRUE);
        return response;
    }

}
