package main.java.com.HomeHiveBackend.model;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@Table(name = "service_requests")
public class ServiceRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "service_type")
    private ServiceType serviceType;

    @Column(name = "description")
    private String description;

    @Column(name = "location")
    private String location;

    @Column(name = "client")
    private Client client;

    @Column(name = "professional")
    private Professional professional;

    @Column(name = "status")
    private String status;

    @Column(name = "created_at")
    private String createdAt;

}
