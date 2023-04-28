package main.java.com.HomeHiveBackend.repository;

import main.java.com.HomeHiveBackend.model.Report;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository for Report
 */
public interface ReportRepository extends JpaRepository<Paper, Long> {
}