package devops.ecom.customerservice;

import devops.ecom.customerservice.RestClients.ProductRestClient;
import devops.ecom.customerservice.dao.Customer;
import devops.ecom.customerservice.dao.ShoppingCart;
import devops.ecom.customerservice.dao.ShoppingCartItem;
import devops.ecom.customerservice.repos.CustomerRepo;
import devops.ecom.customerservice.repos.ShoppingCartRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.ArrayList;

@SpringBootApplication
@EnableFeignClients
public class CustomerServiceApplication {
    private CustomerRepo customerRepo ;
    private ShoppingCartRepo shoppingCartRepo ;
    private RepositoryRestConfiguration restConfiguration ;
    private ProductRestClient productRestClient  ;
    public CustomerServiceApplication(CustomerRepo customerRepo, ShoppingCartRepo shoppingCartRepo,  RepositoryRestConfiguration restConfiguration, ProductRestClient productRestClient) {
        this.customerRepo = customerRepo;
        this.shoppingCartRepo = shoppingCartRepo;
        this.restConfiguration = restConfiguration;
        this.productRestClient = productRestClient;
    }

    public static void main(String[] args) {
        SpringApplication.run(CustomerServiceApplication.class, args);
    }

//    @Bean
    CommandLineRunner run(){

        return args -> {
            restConfiguration.exposeIdsFor(Customer.class) ;
            restConfiguration.exposeIdsFor(ShoppingCart.class) ;
            restConfiguration.exposeIdsFor(ShoppingCartItem.class) ;
            ShoppingCart shoppingCart = ShoppingCart.builder()
                    .items(new ArrayList<>())
                    .id("test-shopping-cart")
                    .customerId("test-customer")
                    .build();
            ShoppingCart shoppingCart1 = this.shoppingCartRepo.insert(shoppingCart);
            Customer customer = Customer.builder()
                    .customerId("test-customer")
                    .email("soulaiman")
                    .phoneNumber("03666363666")
                    .firstname("soulaiman")
                    .lastname("ghailan")
                    .shoppingCart(shoppingCart1).build();
            this.customerRepo.insert(customer);
        };
    }

}
