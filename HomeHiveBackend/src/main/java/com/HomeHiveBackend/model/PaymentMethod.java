package com.HomeHiveBackend.model;

import java.util.Objects;

import jakarta.persistence.Embeddable;
//import jakarta.persistence.Entity;

//@Entity
//@Getter
//@Setter
//@NoArgsConstructor
//@ToString
@Embeddable
public class PaymentMethod {
	
    private String cardNumber;
    private String ExpDate;
    private String cvv;
    private String billingAddress;    
//    @OneToOne
//    @MapsId
//    @JoinColumn(name= "pay_id")
//    private Client client;

    public PaymentMethod() {
    	
    }
    		
//	public PaymentMethod(String cardNumber, String expDate, String cvv, String billingAddress, Client client) {
    public PaymentMethod(String cardNumber, String expDate, String cvv, String billingAddress) {

		super();
		this.cardNumber = cardNumber;
		ExpDate = expDate;
		this.cvv = cvv;
		this.billingAddress = billingAddress;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getExpDate() {
		return ExpDate;
	}

	public void setExpDate(String expDate) {
		ExpDate = expDate;
	}

	public String getCvv() {
		return cvv;
	}

	public void setCvv(String cvv) {
		this.cvv = cvv;
	}

	public String getBillingAddress() {
		return billingAddress;
	}

	public void setBillingAddress(String billingAddress) {
		this.billingAddress = billingAddress;
	}

	@Override
	public String toString() {
		return "PaymentMethod [cardNumber=" + cardNumber + ", ExpDate=" + ExpDate + ", cvv=" + cvv
				+ ", billingAddress=" + billingAddress + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(ExpDate, billingAddress, cardNumber, cvv);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PaymentMethod other = (PaymentMethod) obj;
		return Objects.equals(ExpDate, other.ExpDate) && Objects.equals(billingAddress, other.billingAddress)
				&& Objects.equals(cardNumber, other.cardNumber) && Objects.equals(cvv, other.cvv);
	}
	
	

}
