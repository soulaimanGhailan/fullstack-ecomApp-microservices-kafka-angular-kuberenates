package devops.ecom.productservice.web;

import devops.ecom.productservice.dao.entities.PageInfo;
import devops.ecom.productservice.dao.entities.Product;
import devops.ecom.productservice.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/products")
@CrossOrigin(origins = "*")
public class ProductRestController {
    private ProductService productService;

    public ProductRestController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("{size}")
    public PageInfo getProductsPageInfo(@PathVariable int size){
        return this.productService.getProductPageInfo(size);
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product){
        return this.productService.createProduct(product);
    }
    @PutMapping
    public Product update(@RequestBody Product product){
        return this.productService.updateProduct(product);
    }
}
