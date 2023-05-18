package com.HomeHiveBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.HomeHiveBackend.model.ServiceType;

public interface ServiceTypeRepository extends JpaRepository<ServiceType, Long> {
}
