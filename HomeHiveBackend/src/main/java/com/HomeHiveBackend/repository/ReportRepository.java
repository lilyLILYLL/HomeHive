package com.HomeHiveBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.HomeHiveBackend.model.Report;

/**
 * Repository for Report
 */
public interface ReportRepository extends JpaRepository<Report, Long> {
}