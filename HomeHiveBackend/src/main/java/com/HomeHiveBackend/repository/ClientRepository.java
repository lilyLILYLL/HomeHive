package main.java.com.HomeHiveBackend.repository;

import main.java.com.HomeHiveBackend.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository for Client
 */
public interface ClientRepository extends JpaRepository<Paper, Long> {
}