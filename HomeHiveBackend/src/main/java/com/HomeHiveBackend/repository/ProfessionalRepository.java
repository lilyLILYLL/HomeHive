package com.HomeHiveBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.HomeHiveBackend.model.Professional;

/**
 * Repository for Professional
 */
public interface ProfessionalRepository extends JpaRepository<Professional, Long> {
}