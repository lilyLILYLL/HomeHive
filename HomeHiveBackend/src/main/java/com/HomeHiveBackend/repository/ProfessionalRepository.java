package main.java.com.HomeHiveBackend.repository;

import main.java.com.HomeHiveBackend.model.Professional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository for Professional
 */
public interface ProfessionalRepository extends JpaRepository<Paper, Long> {
}