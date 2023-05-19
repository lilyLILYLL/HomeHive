package com.HomeHiveBackend.repository;

import java.lang.StackWalker.Option;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.HomeHiveBackend.model.Transaction;

/**
 * Repository for Transaction
 */
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
	Optional<Transaction> findByClientId(Long id);
}