package com.HomeHiveBackend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.HomeHiveBackend.model.ServiceRequest;

/**
 * Repository for ServiceRequest
 */
public interface ServiceRequestRepository extends JpaRepository<ServiceRequest, Long> {
	List<ServiceRequest> findAllByStatus(String status);
	Optional<ServiceRequest> findByClientId(Long id);
	
}