package devops.ecom.customerservice.service;

import devops.ecom.customerservice.dao.Customer;
import devops.ecom.customerservice.dao.ShoppingCart;
import devops.ecom.customerservice.repos.CustomerRepo;
import devops.ecom.customerservice.repos.ShoppingCartRepo;
import lombok.Data;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
@Data
public class CustomerServiceImpl implements CustomerService {
    private CustomerRepo customerRepo ;
    private ShoppingCartRepo shoppingCartRepo ;

    private  String ADMIN_PASSWORD ;
    private  String ADMIN_USERNAME ;
    private  String KEYCLOAK_URL ;
    private String keycloakRealm ;
    private Keycloak keycloak ;

    public CustomerServiceImpl(CustomerRepo customerRepo, ShoppingCartRepo shoppingCartRepo ,
                               @Value("${keycloak.auth-server-url}") String KEYCLOAK_URL ,
                               @Value("${admin.password}") String ADMIN_PASSWORD ,
                               @Value("${admin.username}") String ADMIN_USERNAME  ,
                               @Value("${keycloak.realm}") String keycloakRealm) {
        this.customerRepo = customerRepo;
        this.shoppingCartRepo = shoppingCartRepo;
        this.KEYCLOAK_URL = KEYCLOAK_URL ;
        this.ADMIN_PASSWORD = ADMIN_PASSWORD ;
        this.ADMIN_USERNAME = ADMIN_USERNAME  ;
        this.keycloakRealm = keycloakRealm ;
        this.keycloak = KeycloakBuilder.builder()
                .serverUrl(this.KEYCLOAK_URL)
                .realm("master")
                .clientId("admin-cli")
                .grantType("password")
                .username(this.ADMIN_USERNAME)
                .password(this.ADMIN_PASSWORD)
                .build();
    }


    @Override
    public Customer createCustomer(Customer customer) {
        ShoppingCart cart = ShoppingCart.builder()
                .id(UUID.randomUUID().toString())
                .items(new ArrayList<>())
                .customerId(customer.getCustomerId()).build();
        ShoppingCart insertedCart = this.shoppingCartRepo.insert(cart);
        customer.setShoppingCart(insertedCart);
        return  this.customerRepo.insert(customer);
    }

    @Override
    public void syncKeycloakUsers() {
        List<UserRepresentation> keycloakUsers = keycloak.realm(keycloakRealm).users().list();
        for (UserRepresentation keycloakUser : keycloakUsers) {
            Optional<Customer> optionalUser = customerRepo.findById(keycloakUser.getId());
            Customer customer ;
            if(optionalUser.isPresent()){
                // updating the user
                customer = optionalUser.get();
            }else {
                // initializing user info
                customer = new  Customer() ;
                ShoppingCart cart = ShoppingCart.builder()
                        .id(UUID.randomUUID().toString())
                        .items(new ArrayList<>())
                        .customerId(keycloakUser.getId()).build();
                ShoppingCart insertedCart = this.shoppingCartRepo.insert(cart);
                customer.setShoppingCart(insertedCart);
            }
            customer.setEmail(keycloakUser.getEmail());
            customer.setCustomerId(keycloakUser.getId());
            customer.setFirstname(keycloakUser.getFirstName());
            customer.setLastname(keycloakUser.getLastName());
            customerRepo.save(customer);
        }
    }
}
