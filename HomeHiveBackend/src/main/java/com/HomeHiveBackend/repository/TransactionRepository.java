package com.HomeHiveBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.HomeHiveBackend.model.Transaction;

/**
 * Repository for Transaction
 */
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}