package com.HomeHiveBackend.model;

import java.util.Objects;

//import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
//import lombok.EqualsAndHashCode;

@Entity
//@Getter
//@Setter
//@NoArgsConstructor
//@ToString
@Table(name = "clients")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "client_id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "fullname")
    private String fullName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @Embedded
//    @OneToOne(mappedBy = "client", cascade=CascadeType.ALL, fetch=FetchType.LAZY)
//    @PrimaryKeyJoinColumn
    private PaymentMethod paymentMethod;

    @OneToOne(mappedBy = "client")
    @PrimaryKeyJoinColumn
//    @EqualsAndHashCode.Exclude
    private Membership membership;
    
    @OneToOne(mappedBy = "client")
    @PrimaryKeyJoinColumn
//    @EqualsAndHashCode.Exclude
    private Review review;
    
//    @OneToOne(mappedBy = "client")
//    @PrimaryKeyJoinColumn
////    @EqualsAndHashCode.Exclude
//    private ServiceRequest serviceRequest;
    
    @OneToOne(mappedBy = "client")
    @PrimaryKeyJoinColumn
//    @EqualsAndHashCode.Exclude
    private Transaction transaction;

    
    public void rateProfessional() {
    	
    }
    
    public void requestService(ServiceType service, String description, String location) {

    }

    public void rateProfessional(Professional professional, int rating, String comment) {

    }
    
    public Client() {
    	System.out.println("Inside Client no-arg constructor...");
    }

	public Client(Long id, String fullName, String email, String phone, String address, PaymentMethod paymentMethod,
			com.HomeHiveBackend.model.Membership membership, Review review,	Transaction transaction) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.paymentMethod = paymentMethod;
		this.membership = membership;
		this.review = review;
//		this.serviceRequest = serviceRequest;
		this.transaction = transaction;
	}
	
	public Client(String fullName, String email) {
		this.fullName=fullName;
		this.email=email;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFullName() {
		System.out.println("Inside getFullName() getter..");
		return fullName;
	}

	public void setFullName(String fullName) {
	System.out.println("Inside getFullName() setter..");
		this.fullName = fullName;
	}

	public String getEmail() {
		System.out.println("Inside getEmail() getter..");
		return email;
	}

	public void setEmail(String email) {
		System.out.println("Inside getFullName() setter..");
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public PaymentMethod getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(PaymentMethod paymentMethod) {
		this.paymentMethod = paymentMethod;
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

//	public ServiceRequest getServiceRequest() {
//		return serviceRequest;
//	}
//
//	public void setServiceRequest(ServiceRequest serviceRequest) {
//		this.serviceRequest = serviceRequest;
//	}

	public Transaction getTransaction() {
		return transaction;
	}

	public void setTransaction(Transaction transaction) {
		this.transaction = transaction;
	}

	@Override
	public String toString() {
		return "Client [id=" + id + ", fullName=" + fullName + ", email=" + email + ", phone=" + phone + ", address="
				+ address + ", paymentMethod=" + paymentMethod + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(address, email, fullName, id, paymentMethod, phone);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Client other = (Client) obj;
		return Objects.equals(address, other.address) && Objects.equals(email, other.email)
				&& Objects.equals(fullName, other.fullName) && Objects.equals(id, other.id)
				&& Objects.equals(paymentMethod, other.paymentMethod) && Objects.equals(phone, other.phone);
	}
    
	
}