package com.HomeHiveBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.HomeHiveBackend.model.Review;

/**
 * Repository for Review
 */
public interface ReviewRepository extends JpaRepository<Review, Long> {
}