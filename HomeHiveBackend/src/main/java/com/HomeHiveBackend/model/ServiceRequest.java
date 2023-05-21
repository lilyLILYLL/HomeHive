package com.HomeHiveBackend.model;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
//import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
//import lombok.EqualsAndHashCode;

@Entity
@Table(name = "service_requests")
public class ServiceRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = true)
    private Long id;

    @Column(name = "description")
    private String description;

    @Column(name = "location")
    private String location;
    
    private String name;
    private float basePrice;
    
    @Column(name = "status")
    private String status;

    @Column(name = "created_at")
    private String createdAt;
    
    @OneToOne
    @MapsId
    @JoinColumn(name= "client_id")
    private Client client;
    
	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public ServiceRequest() {
		
	}
			
	public ServiceRequest(Long id, String description, String location, String status, String createdAt) {
		super();
		this.id = id;
		this.description = description;
		this.location = location;
		this.status = status;
		this.createdAt = createdAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getBasePrice() {
		return basePrice;
	}

	public void setBasePrice(float basePrice) {
		this.basePrice = basePrice;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}

	@Override
	public String toString() {
		return "ServiceRequest [id=" + id + ", description=" + description + ", location=" + location + ", status=" + status
				+ ", createdAt=" + createdAt + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(createdAt, description, id, location, status);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ServiceRequest other = (ServiceRequest) obj;
		return Objects.equals(createdAt, other.createdAt) && Objects.equals(description, other.description)
				&& Objects.equals(id, other.id) && Objects.equals(location, other.location)
				&& Objects.equals(status, other.status);
	}

}
