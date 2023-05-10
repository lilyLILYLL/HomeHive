package main.java.com.HomeHiveBackend.repository;

import main.java.com.HomeHiveBackend.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository for Review
 */
public interface ReviewRepository extends JpaRepository<Paper, Long> {
}