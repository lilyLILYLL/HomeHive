package com.HomeHiveBackend.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.HomeHiveBackend.model.Client;
import com.HomeHiveBackend.model.Professional;
import com.HomeHiveBackend.model.Review;
import com.HomeHiveBackend.model.ServiceRequest;
import com.HomeHiveBackend.model.Transaction;
//import com.HomeHiveBackend.model.ServiceRequest;
import com.HomeHiveBackend.repository.ClientRepository;
import com.HomeHiveBackend.repository.ProfessionalRepository;
import com.HomeHiveBackend.repository.ReviewRepository;
import com.HomeHiveBackend.repository.ServiceRequestRepository;
import com.HomeHiveBackend.repository.TransactionRepository;

import io.swagger.v3.oas.annotations.Operation;

@Transactional
@RestController
@CrossOrigin(origins = "*")
public class MainController {

	@Autowired
	ClientRepository clientRepository;

	@Autowired
	ProfessionalRepository professionalRepository;

	@Autowired
	ServiceRequestRepository serviceRequestRepository;

	@Autowired
	ReviewRepository reviewRepository;

	@Autowired
	TransactionRepository transactionRepository;

	@Operation(description = "Api to check if Application is up")
	@GetMapping("/")
	public ResponseEntity<String> greet() {
		return new ResponseEntity<String>("App Up!!", HttpStatus.OK);
	}

	@Operation(description = "API to add client details like name, email ,address")
	@PostMapping("/addClient")
	public void addClient(@RequestBody Client client) {
		System.out.println("client: " + client.toString());
		System.out.println("Inside addClient() method...\n");
		clientRepository.saveAndFlush(client);

	}

	@Operation(description = "API to add professional details like name, email ,address, skill")
	@PostMapping("/addProfessional")
	public void addProfessional(@RequestBody Professional professional) {
		professionalRepository.saveAndFlush(professional);
	}

	@Operation(description = "API to get transaction by Id")
	@GetMapping({ "/txn/{id}", "/client/{id}/txn" })
	public ResponseEntity<Transaction> getClientByTxnId(@PathVariable(value = "id") Long id) {
		Transaction transaction = transactionRepository.findByClientId(id)
				.orElseThrow(() -> new RuntimeException("Txn Not found with id = " + id));

		return new ResponseEntity<>(transaction, HttpStatus.OK);
	}

	@Operation(description = "API to get review by Id")
	@GetMapping({ "/review/{id}", "/client/{id}/review" })
	public ResponseEntity<Review> getClientByReviewId(@PathVariable(value = "id") Long id) {
		Review review = reviewRepository.findByClientId(id)
				.orElseThrow(() -> new RuntimeException("Review Not found with id = " + id));

		return new ResponseEntity<>(review, HttpStatus.OK);
	}

	@Operation(description = "API to get service request by id")
	@GetMapping({ "/sr/{id}", "/client/{id}/sr" })
	public ResponseEntity<ServiceRequest> getClientByServiceId(@PathVariable(value = "id") Long id) {
		ServiceRequest serviceRequest = serviceRequestRepository.findByClientId(id)
				.orElseThrow(() -> new RuntimeException("Review Not found with id = " + id));

		return new ResponseEntity<>(serviceRequest, HttpStatus.OK);
	}

	@Operation(description = "API to get all service requests")
	@GetMapping({ "/sr/all" })
	public ResponseEntity<List<ServiceRequest>> getAllServiceRequest(@RequestParam(required = false) String status) {
		if(status != null)
			return new ResponseEntity<List<ServiceRequest>>(serviceRequestRepository.findAllByStatus(status), HttpStatus.OK);

		return new ResponseEntity<List<ServiceRequest>>(serviceRequestRepository.findAll(), HttpStatus.OK);
	}

	@Operation(description = "API to add service request by client")
	@PostMapping("/addServiceRequest/{id}/client")
	public void addServiceRequest(@RequestBody ServiceRequest serviceRequest, @PathVariable Long id) {
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Client Not found with id = " + id));
		System.out.println("Inside addServiceRequest method()...");

		serviceRequest.setCreatedAt(new Date().toString());
		serviceRequest.setClient(client);
		serviceRequestRepository.save(serviceRequest);
	}

	@Operation(description = "API to add transaction by client")
	@PostMapping("/addTransaction/{id}/client")
	public void addTransaction(@RequestBody Transaction transaction, @PathVariable Long id) {
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Client Not found with id = " + id));
		transaction.setCreatedAt(new Date().toString());
		transaction.setClient(client);
		transactionRepository.save(transaction);
	}

	@Operation(description = "API to add review by client")
	@PostMapping("/addReview/{id}/client")
	public void addReview(@RequestBody Review review, @PathVariable Long id) {
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Client Not found with id = " + id));
		review.setCreatedAt(new Date().toString());
		review.setClient(client);
		reviewRepository.saveAndFlush(review);
	}

	@Operation(description = "API to update service request, ie.e open, close, inprogress")
	@PutMapping("/updateServiceStatus")
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

	@Operation(description = "API to update comment details")
	@PutMapping("/updateComment")
	public void updateComment(@RequestParam String comment, @RequestParam Long reviewId) throws Exception {
		Review review = reviewRepository.getReferenceById(reviewId);
		if(review != null) {
			review.setComment(comment);
		} else {
			throw new Exception("Review does not exist!");
		}
		reviewRepository.saveAndFlush(review);
	}

	@Operation(description = "API to get ratings")
	@PutMapping("/updateRating")
	public void updateRating(@RequestParam int rating, @RequestParam Long reviewId) throws Exception {
		Review review = reviewRepository.getReferenceById(reviewId);
		if(review != null) {
			review.setRating(rating);
		} else {
			throw new Exception("Review does not exist!");
		}
		reviewRepository.saveAndFlush(review);
	}

	@Operation(description = "API to update transaction status, i.e. success, error, failed")
	@PutMapping("/updateTransactionStatus")
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

	@Operation(description = "API to delete comment")
	@DeleteMapping("/deleteComment")
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
