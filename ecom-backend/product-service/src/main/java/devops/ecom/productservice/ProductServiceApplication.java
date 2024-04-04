package devops.ecom.productservice;

import devops.ecom.productservice.dao.entities.Price;
import devops.ecom.productservice.dao.entities.Product;
import devops.ecom.productservice.dao.repos.ProductRepo;
import devops.ecom.productservice.service.ProductService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication
@EnableFeignClients
public class ProductServiceApplication {
    private ProductRepo productRepo ;
    private RepositoryRestConfiguration restConfiguration;
    private ProductService productService;

    public ProductServiceApplication(ProductRepo productRepo, RepositoryRestConfiguration restConfiguration, ProductService productService) {
        this.productRepo = productRepo;
        this.restConfiguration = restConfiguration;
        this.productService = productService;
    }

    public static void main(String[] args) {
        SpringApplication.run(ProductServiceApplication.class, args);
    }

    @Bean
    public CommandLineRunner run(){
        return args -> {
            restConfiguration.exposeIdsFor(Product.class) ;
            restConfiguration.exposeIdsFor(Price.class) ;
            this.productService.initProduct();
        };
    }

}
