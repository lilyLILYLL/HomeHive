package com.HomeHiveBackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.HomeHiveBackend.model.ServiceRequest;

/**
 * Repository for ServiceRequest
 */
public interface ServiceRequestRepository extends JpaRepository<ServiceRequest, Long> {
	List<ServiceRequest> findAllByStatus(String status);
	List<ServiceRequest> findAllByLocation(String location);
	List<ServiceRequest> findAllByClient(Long clientId);	
	List<ServiceRequest> findAllByProfessional(Long professionalId);
	
}