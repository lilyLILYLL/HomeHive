package com.HomeHiveBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.HomeHiveBackend.model.Client;

/**
 * Repository for Client
 */
public interface ClientRepository extends JpaRepository<Client, Long> {
	
}