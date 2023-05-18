package com.HomeHiveBackend.model;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
//@Getter
//@Setter
//@NoArgsConstructor
//@ToString
@Table(name = "professionals")
public class Professional {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "proff_id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "fullname")
    private String fullName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;
    
    @Column(name="skill")
    private String skill;

//    @OneToOne(mappedBy = "professional")
//    @PrimaryKeyJoinColumn
//    private ServiceType skill;

    @OneToOne(mappedBy = "professional")
    @PrimaryKeyJoinColumn
    private Membership membership;
    
    @OneToOne(mappedBy = "professional")
    @PrimaryKeyJoinColumn
    private Review review;
    
    @OneToOne(mappedBy = "professional")
    @PrimaryKeyJoinColumn
    private ServiceRequest serviceRequest;
    
    @OneToOne(mappedBy = "professional")
    @PrimaryKeyJoinColumn
    private Transaction transaction;

    public void acceptRequest(ServiceType service) {

    }
    
    public Professional() {
    	
    }

	public Professional(Long id, String fullName, String email, String phone, String skill, Membership membership,
			Review review, ServiceRequest serviceRequest, Transaction transaction) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.email = email;
		this.phone = phone;
		this.skill = skill;
		this.membership = membership;
		this.review = review;
		this.serviceRequest = serviceRequest;
		this.transaction = transaction;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getSkill() {
		return skill;
	}

	public void setSkill(String skill) {
		this.skill = skill;
	}

	public Membership getMembership() {
		return membership;
	}

	public void setMembership(Membership membership) {
		this.membership = membership;
	}

	public Review getReview() {
		return review;
	}

	public void setReview(Review review) {
		this.review = review;
	}

	public ServiceRequest getServiceRequest() {
		return serviceRequest;
	}

	public void setServiceRequest(ServiceRequest serviceRequest) {
		this.serviceRequest = serviceRequest;
	}

	public Transaction getTransaction() {
		return transaction;
	}

	public void setTransaction(Transaction transaction) {
		this.transaction = transaction;
	}

	@Override
	public String toString() {
		return "Professional [id=" + id + ", fullName=" + fullName + ", email=" + email + ", phone=" + phone
				+ ", skill=" + skill + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(email, fullName, id, phone, skill);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Professional other = (Professional) obj;
		return Objects.equals(email, other.email) && Objects.equals(fullName, other.fullName)
				&& Objects.equals(id, other.id) && Objects.equals(phone, other.phone)
				&& Objects.equals(skill, other.skill);
	}
    
	
}
