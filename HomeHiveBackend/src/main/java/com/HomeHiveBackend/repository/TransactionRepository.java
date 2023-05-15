package main.java.com.HomeHiveBackend.repository;

import main.java.com.HomeHiveBackend.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository for Transaction
 */
public interface TransactionRepository extends JpaRepository<Paper, Long> {
}