package main.java.com.HomeHiveBackend.model;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@Table(name = "transaction")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "client")
    private Client client;

    @Column(name = "professional")
    private Professional professional;

    @Column(name = "service_request")
    private ServiceRequest serviceRequest;

    @Column(name = "amount")
    private float amount;

    @Column(name = "status")
    private String status;

    @Column(name = "created_at")
    private String createdAt;

}
