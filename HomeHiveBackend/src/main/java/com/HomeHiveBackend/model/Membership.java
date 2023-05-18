package com.HomeHiveBackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
//import lombok.EqualsAndHashCode;

@Entity(name="membership")
//@Getter
//@Setter
public class Membership {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mem_id", updatable = false, nullable = false)
    private Long id;
	
    private String type;

    private float annualFee;
    
    @OneToOne (fetch=FetchType.LAZY)
    @MapsId
    @JoinColumn(name= "mem_id")
//    @EqualsAndHashCode.Exclude
    private Client client;
    
    @OneToOne (fetch=FetchType.LAZY)
    @MapsId
    @JoinColumn(name= "mem_id")
//    @EqualsAndHashCode.Exclude
    private Professional professional;

	public boolean isMember(Client client) {
        return client.getMembership() != null;
    }

    public boolean isMember(Professional professional) {
        return professional.getMembership() != null;
    }
    
    public Membership() {
    	
    }

	public Membership(Long id, String type, float annualFee, Client client, Professional professional) {
		super();
		this.id = id;
		this.type = type;
		this.annualFee = annualFee;
		this.client = client;
		this.professional = professional;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public float getAnnualFee() {
		return annualFee;
	}

	public void setAnnualFee(float annualFee) {
		this.annualFee = annualFee;
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
	
}
