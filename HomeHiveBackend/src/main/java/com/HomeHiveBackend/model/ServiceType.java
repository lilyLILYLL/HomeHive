package com.HomeHiveBackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.MapsId;
//import jakarta.persistence.OneToOne;

@Entity
//@Getter
//@Setter
//@NoArgsConstructor
//@ToString
public class ServiceType {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "st_id", updatable = false, nullable = false)
    private Long id;
    private String name;
    private float basePrice;
    
    public ServiceType() {
    	
    }
    
	public ServiceType(Long id, String name, float basePrice) {
		super();
		this.id = id;
		this.name = name;
		this.basePrice = basePrice;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
	
	@Override
	public String toString() {
		return "ServiceType [id=" + id + ", name=" + name + ", basePrice=" + basePrice + "]";
	}
	
}