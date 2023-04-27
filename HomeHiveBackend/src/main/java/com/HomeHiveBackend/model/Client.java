package main.java.com.HomeHiveBackend.model;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@Table(name = "client")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "fullname")
    private String fullName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @Column(name = "payment_method")
    private PaymentMethod paymentMethod;

    @Column(name = "membership")
    private Membership Membership;

    public void requestService(ServiceType service, String description, String location) {

    }

    public void rateProfessional(Professional professional, int rating, String comment) {

    }
}
