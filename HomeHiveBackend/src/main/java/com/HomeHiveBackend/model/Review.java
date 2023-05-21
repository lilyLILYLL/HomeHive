package com.HomeHiveBackend.model;

import java.util.Objects;

import org.hibernate.annotations.ColumnDefault;

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

@Entity
//@Getter
//@Setter
//@NoArgsConstructor
//@ToString
@Table(name = "reviews")
public class Review {

    @Id
    private Long id;

    @Column(name = "rating")
    private int rating;

    @Column(name = "comment")
    private String comment;

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

	public Review() {
    	
    }

	public Review(Long id, int rating, String comment, String createdAt) {
		super();
		this.id = id;
		this.rating = rating;
		this.comment = comment;
		this.createdAt = createdAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}

	@Override
	public String toString() {
		return "Review [id=" + id + ", rating=" + rating
				+ ", comment=" + comment + ", createdAt=" + createdAt + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(comment, createdAt, id, rating);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Review other = (Review) obj;
		return Objects.equals(comment, other.comment) && Objects.equals(createdAt, other.createdAt)
				&& Objects.equals(id, other.id) && rating == other.rating;
	}
}