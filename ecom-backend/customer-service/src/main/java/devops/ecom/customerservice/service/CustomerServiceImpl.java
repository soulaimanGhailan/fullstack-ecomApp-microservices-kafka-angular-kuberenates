package devops.ecom.customerservice.service;

import devops.ecom.customerservice.dao.Customer;
import devops.ecom.customerservice.dao.ShoppingCart;
import devops.ecom.customerservice.repos.CustomerRepo;
import devops.ecom.customerservice.repos.ShoppingCartRepo;
import lombok.Data;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.representations.idm.UserRepresentation;
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
    private final String ADMIN_PASSWORD = "password";
    private final String ADMIN_USERNAME = "soulaiman";
    private final String KEYCLOAK_URL = "http://localhost:8080/";
    Keycloak keycloak = KeycloakBuilder.builder()
            .serverUrl(KEYCLOAK_URL)
            .realm("master")
            .clientId("admin-cli")
            .grantType("password")
            .username(ADMIN_USERNAME)
            .password(ADMIN_PASSWORD)
            .build();

    public CustomerServiceImpl(CustomerRepo customerRepo, ShoppingCartRepo shoppingCartRepo) {
        this.customerRepo = customerRepo;
        this.shoppingCartRepo = shoppingCartRepo;
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
        List<UserRepresentation> keycloakUsers = keycloak.realm("ecome-realm").users().list();
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
