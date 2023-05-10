package main.java.com.HomeHiveBackend.repository;

import main.java.com.HomeHiveBackend.model.ServiceRequest;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository for ServiceRequest
 */
public interface ServiceRequestRepository extends JpaRepository<Paper, Long> {
}