package devops.ecom.customerservice.RestClients;

import devops.ecom.customerservice.model.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "product-service" , url = "http://localhost:8080")
public interface ProductRestClient {
    @GetMapping("products/{id}")
    Product getProduct(@PathVariable String id);
}
