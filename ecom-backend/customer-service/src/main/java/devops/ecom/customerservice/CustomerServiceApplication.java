package devops.ecom.customerservice;

import devops.ecom.customerservice.dao.Customer;
import devops.ecom.customerservice.dao.ShoppingCart;
import devops.ecom.customerservice.dao.ShoppingCartItem;
import devops.ecom.customerservice.model.Product;
import devops.ecom.customerservice.repos.CustomerRepo;
import devops.ecom.customerservice.repos.ShoppingCartItemRepo;
import devops.ecom.customerservice.repos.ShoppingCartRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.Date;
import java.util.UUID;

@SpringBootApplication
public class CustomerServiceApplication {
    private CustomerRepo customerRepo ;
    private ShoppingCartRepo shoppingCartRepo ;
    private ShoppingCartItemRepo shoppingCartItemRepo ;
    private RepositoryRestConfiguration restConfiguration ;
    public CustomerServiceApplication(CustomerRepo customerRepo, ShoppingCartRepo shoppingCartRepo, ShoppingCartItemRepo shoppingCartItemRepo, RepositoryRestConfiguration restConfiguration) {
        this.customerRepo = customerRepo;
        this.shoppingCartRepo = shoppingCartRepo;
        this.shoppingCartItemRepo = shoppingCartItemRepo;
        this.restConfiguration = restConfiguration;
    }

    public static void main(String[] args) {
        SpringApplication.run(CustomerServiceApplication.class, args);
    }

    @Bean
    CommandLineRunner run(){

        return args -> {
            restConfiguration.exposeIdsFor(Customer.class) ;
            restConfiguration.exposeIdsFor(ShoppingCart.class) ;
            restConfiguration.exposeIdsFor(ShoppingCartItem.class) ;
            Product p = Product.builder()
                    .productId(UUID.randomUUID().toString())
                    .addingDate(new Date())
                    .name("fdfdfdf")
                    .category("dfjdfj")
                    .build();
            for (int i = 0; i < 3; i++) {
                ShoppingCartItem item = ShoppingCartItem.builder()
                        .id(UUID.randomUUID().toString())
                        .product(p)
                        .quantity(3).build();
                this.shoppingCartItemRepo.insert(item);
            }

            ShoppingCart  cart = ShoppingCart.builder()
                    .id(UUID.randomUUID().toString())
                    .items(this.shoppingCartItemRepo.findAll()).build();
            this.shoppingCartRepo.insert(cart) ;
            Customer customer = Customer.builder()
                    .customerId(UUID.randomUUID().toString())
                    .email("xxxx@gmail.com")
                    .firstname("soulaiman")
                    .lastname("ghailan")
                    .phoneNumber("343848343")
                    .shoppingCart(cart)
                    .build();
            this.customerRepo.insert(customer) ;
        };
    }

}
