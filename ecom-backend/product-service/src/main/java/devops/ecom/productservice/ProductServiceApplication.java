package devops.ecom.productservice;

import devops.ecom.productservice.dao.entities.Product;
import devops.ecom.productservice.dao.enums.ProductCategory;
import devops.ecom.productservice.dao.repos.ProductRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;


import java.util.Date;
import java.util.UUID;
@SpringBootApplication
@EnableFeignClients
public class ProductServiceApplication {
    private ProductRepo productRepo ;
    private RepositoryRestConfiguration restConfiguration;

    public ProductServiceApplication(ProductRepo productRepo, RepositoryRestConfiguration restConfiguration) {
        this.productRepo = productRepo;
        this.restConfiguration = restConfiguration;
    }

    public static void main(String[] args) {
        SpringApplication.run(ProductServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner run(){
        return args -> {
            restConfiguration.exposeIdsFor(Product.class) ;
            for (int i = 0; i < 10; i++) {
                Product product = Product.builder()
                        .productId(UUID.randomUUID().toString())
                        .name((Math.random()>0.5)?"product 1":"product 2").addingDate(new Date())
                        .description("dddddddddddddddddddddddddddddddddddd")
                        .category(ProductCategory.ELECTRONICS).build();
                this.productRepo.insert(product) ;
            }
        };
    }

}
