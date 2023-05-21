	package com.HomeHiveBackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "transaction")
public class Transaction {

    @Id
    private Long id;

    @Column(name = "amount")
    private float amount;

    @Column(name = "status")
    private String status;

    @Column(name = "created_at")
    private String createdAt;
    
    @Embedded
    private PaymentMethod paymentMethod;
    
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

	public Transaction() {
    	
    }
    		
	public PaymentMethod getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(PaymentMethod paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public Transaction(Long id, float amount, String status,
			String createdAt) {
		super();
		this.id = id;
		this.amount = amount;
		this.status = status;
		this.createdAt = createdAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
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

}
