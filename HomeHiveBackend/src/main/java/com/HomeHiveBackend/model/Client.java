package com.HomeHiveBackend.model;

//import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
//import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
//import lombok.EqualsAndHashCode;

@Entity
@Table(name = "clients")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fullname")
    private String fullName;

    @Column(name = "email")
    private String email;




	@Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;
    
	public Client() {
    	System.out.println("Inside Client no-arg constructor...");
    }
    
    public boolean isMember(Membership membership) {
        return membership.getClient() != null;
    }

	public Client(Long id, String fullName, String email, String phone, String address) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.email = email;
		this.phone = phone;
		this.address = address;
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

	
}