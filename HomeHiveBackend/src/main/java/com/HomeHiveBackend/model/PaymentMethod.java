package main.java.com.HomeHiveBackend.model;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class PaymentMethod {

    private String cardNumber;

    private String ExpDate;

    private String cvv;

    private String billingAddress;

}
