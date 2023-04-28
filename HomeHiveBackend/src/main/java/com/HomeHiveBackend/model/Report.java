package main.java.com.HomeHiveBackend.model;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@Table(name = "reports")
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "report_type")
    private String reportType;

    @Column(name = "data")
    private List[] data;

    public void generate() {

    }

}
