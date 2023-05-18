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
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
//import lombok.EqualsAndHashCode;

@Entity
//@Getter
//@Setter
//@NoArgsConstructor
//@ToString
@Table(name = "transaction")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "txn_id", updatable = false, nullable = false)
    private Long id;

    @OneToOne (fetch=FetchType.LAZY)
    @MapsId
    @JoinColumn(name= "txn_id")
//    @EqualsAndHashCode.Exclude
    private Client client;

    @OneToOne (fetch=FetchType.LAZY)
    @MapsId
    @JoinColumn(name= "txn_id")
//    @EqualsAndHashCode.Exclude
    private Professional professional;

    @Column(name = "amount")
    private float amount;

    @Column(name = "status")
    private String status;

    @Column(name = "created_at")
    private String createdAt;

    public Transaction() {
    	
    }
    		
	public Transaction(Long id, Client client, Professional professional, float amount, String status,
			String createdAt) {
		super();
		this.id = id;
		this.client = client;
		this.professional = professional;
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

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Professional getProfessional() {
		return professional;
	}

	public void setProfessional(Professional professional) {
		this.professional = professional;
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

	@Override
	public String toString() {
		return "Transaction [id=" + id + ", client=" + client + ", amount=" + amount
				+ ", status=" + status + ", createdAt=" + createdAt + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(amount, createdAt, id, status);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Transaction other = (Transaction) obj;
		return Float.floatToIntBits(amount) == Float.floatToIntBits(other.amount)
				&& Objects.equals(createdAt, other.createdAt) && Objects.equals(id, other.id)
				&& Objects.equals(status, other.status);
	}

}
