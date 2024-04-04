package devops.ecom.productservice.web;

import devops.ecom.productservice.dao.entities.Product;
import devops.ecom.productservice.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RestController
//@RequestMapping("products")
public class ProductRestController {
    private ProductService productService;

    public ProductRestController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    private List<Product> getAll(){
        return this.productService.getAllProduct() ;
    }
    @PostMapping
    private Product addProduct(@RequestBody Product product){
        return this.productService.createProduct(product, null) ;
    }

    @PutMapping
    private Product updateProduct(@RequestBody Product product){
        return this.productService.updateProduct(product) ;
    }
    @DeleteMapping("{productId}")
    private void deleteProduct(@PathVariable String productId){
         this.productService.deleteProduct(productId); ;
    }
}
