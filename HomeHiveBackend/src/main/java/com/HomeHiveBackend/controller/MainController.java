package com.HomeHiveBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.HomeHiveBackend.model.Client;
import com.HomeHiveBackend.model.PaymentMethod;
import com.HomeHiveBackend.model.Professional;
import com.HomeHiveBackend.model.Review;
import com.HomeHiveBackend.model.ServiceRequest;
import com.HomeHiveBackend.model.ServiceType;
import com.HomeHiveBackend.model.Transaction;
//import com.HomeHiveBackend.model.ServiceRequest;
import com.HomeHiveBackend.repository.ClientRepository;
import com.HomeHiveBackend.repository.ProfessionalRepository;
import com.HomeHiveBackend.repository.ReviewRepository;
import com.HomeHiveBackend.repository.ServiceRequestRepository;
import com.HomeHiveBackend.repository.ServiceTypeRepository;
import com.HomeHiveBackend.repository.TransactionRepository;

@Transactional
//@CrossOrigin
@RestController
public class MainController {
	
	@Autowired
	ClientRepository clientRepository;
	
	@Autowired
	ProfessionalRepository professionalRepository;
	
	@Autowired
	ServiceRequestRepository serviceRequestRepository;
	
	@Autowired
	ServiceTypeRepository serviceTypeRepository;
	
	@Autowired
	ReviewRepository reviewRepository;
	
	@Autowired
	TransactionRepository transactionRepository;
	
	@GetMapping("/")
	@ResponseBody
	public void greet() {
	}	
	
	@PostMapping("/addClient")
	public void addClient(@RequestBody Client client) {
		System.out.println("client: " + client.toString());
		System.out.println("Inside addClient() method...\n");
		clientRepository.saveAndFlush(client);
	}
	
	@PostMapping("/addProfessional")
	public void addProfessional(@RequestBody Professional professional) {
		professionalRepository.saveAndFlush(professional);
	}

	@PostMapping("/addServiceRequest")
	public void addServiceRequest(@RequestBody ServiceRequest serviceRequest, @RequestParam Long clientId,
			@RequestParam Long serviceTypeId, @RequestParam Long professionalId ) {	
		
		System.out.println("Inside addTransaction method()...");
		Client client = clientRepository.getReferenceById(clientId);
		ServiceType serviceType = serviceTypeRepository.getReferenceById(serviceTypeId);
		Professional professional = professionalRepository.getReferenceById(professionalId);
		
		serviceRequest.setClient(client);
		serviceRequest.setServiceType(serviceType);
		serviceRequest.setProfessional(professional);
		System.out.println("ServiceRequest: " + serviceRequest);
		
		serviceRequestRepository.saveAndFlush(serviceRequest);
		
//		client.setServiceRequest(serviceRequest);
//		clientRepository.saveAndFlush(client);
		
		professional.setServiceRequest(serviceRequest);
		professionalRepository.saveAndFlush(professional);
	}
	
	
	@PostMapping("/addServiceType")
	public void addServiceType(@RequestBody ServiceType serviceType) {
		serviceTypeRepository.saveAndFlush(serviceType);
	}
	
	@PostMapping("/addPaymentMethod")
	public void addPaymentMethod(@RequestBody PaymentMethod paymentMethod, Long clientId) {
		Client client = clientRepository.getReferenceById(clientId);
		client.setPaymentMethod(paymentMethod);
		clientRepository.saveAndFlush(client);
	}
	
	@PostMapping("/addTransaction")
	public void addTransaction(@RequestBody Transaction transaction, Long clientId, Long professionalId) {
//		transactionRepository.saveAndFlush(transaction);
		Client client = clientRepository.getReferenceById(clientId);
		client.setTransaction(transaction);
		Professional professional = professionalRepository.getReferenceById(professionalId);
		professional.setTransaction(transaction);
		transaction.setClient(client);
		transaction.setProfessional(professional);
		transactionRepository.saveAndFlush(transaction);
		professionalRepository.saveAndFlush(professional);
		clientRepository.saveAndFlush(client);
	}
	
	@PostMapping("/addReview")
	public void addReview(@RequestBody Review review, @RequestParam Long clientId, @RequestParam Long professionalId) {
		Client client = clientRepository.getReferenceById(clientId);
		Professional professional = professionalRepository.getReferenceById(professionalId);
		review.setClient(client);
		review.setProfessional(professional);
		reviewRepository.saveAndFlush(review);
	}
	
	@PostMapping("/updateServiceStatus")
	public void updateServiceStatus(@RequestParam String status, @RequestParam Long serviceRequestId) 
			throws Exception {
		ServiceRequest serviceRequest = serviceRequestRepository.getReferenceById(serviceRequestId);
		if(serviceRequest != null) {
			serviceRequest.setStatus(status);			
		} else {
			throw new Exception("Service Request does not exist!");
		}
		serviceRequestRepository.saveAndFlush(serviceRequest);
	}
	
	@PostMapping("/updateComment")
	public void updateComment(@RequestParam String comment, @RequestParam Long reviewId) throws Exception {
		Review review = reviewRepository.getReferenceById(reviewId);
		if(review != null) {
			review.setComment(comment);
		} else {
			throw new Exception("Review does not exist!");
		}
		reviewRepository.saveAndFlush(review);
	}
	
	@PostMapping("/updateRating")
	public void updateRating(@RequestParam int rating, @RequestParam Long reviewId) throws Exception {
		Review review = reviewRepository.getReferenceById(reviewId);
		if(review != null) {
			review.setRating(rating);
		} else {
			throw new Exception("Review does not exist!");
		}
		reviewRepository.saveAndFlush(review);
	}
	
	@PostMapping("/updateTransactionStatus")
	public void updateTransactionStatus(@RequestParam String transactionStatus, @RequestParam Long transactionId) 
			throws Exception {
		Transaction transaction = transactionRepository.getReferenceById(transactionId);
		if(transaction != null) {
			transaction.setStatus(transactionStatus);			
		} else {
			throw new Exception("Transaction does not exist!");
		}
		transactionRepository.saveAndFlush(transaction);
	}
	
	@PostMapping("/deleteComment")
	public void deleteComment(@RequestParam Long reviewId) throws Exception {
		Review review = reviewRepository.getReferenceById(reviewId);
		if(review != null) {
			review.setComment("");
		} else {
			throw new Exception("Review does not exist!");
		}
		reviewRepository.saveAndFlush(review);
	}
}