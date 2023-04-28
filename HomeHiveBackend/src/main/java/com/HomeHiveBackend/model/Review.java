package main.java.com.HomeHiveBackend.model;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "client")
    private Client client;

    @Column(name = "professional")
    private Professional professional;

    @Column(name = "rating")
    private int rating;

    @Column(name = "comment")
    private String comment;

    @Column(name = "created_at")
    private String createdAt;

}
