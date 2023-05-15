package main.java.com.HomeHiveBackend.model;

public class Membership {

    private String type;

    private float annualFee;

    public boolean isMember(Client client) {
        return client.getMembership();
    }

    public boolean isMember(Professional professional) {
        return professional.getMembership();
    }
}
