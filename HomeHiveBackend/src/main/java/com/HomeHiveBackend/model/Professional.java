package main.java.com.HomeHiveBackend.model;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@Table(name = "professionals")
public class Professional {

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

    @Column(name = "skills")
    private List<ServiceType> skills;

    @Column(name = "membership")
    private Membership Membership;

    public void acceptRequest(ServiceType service) {

    }
}
