package devops.ecom.productservice.web;

import devops.ecom.productservice.dao.entities.PageEvent;
import devops.ecom.productservice.dao.entities.PageInfo;
import devops.ecom.productservice.dao.entities.Product;
import devops.ecom.productservice.dao.enums.PageEventType;
import devops.ecom.productservice.service.ProductService;
import org.springframework.cloud.stream.function.StreamBridge;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.UUID;

@RestController
@RequestMapping("api/products")
@CrossOrigin(origins = "*")
public class ProductRestController {
    private ProductService productService;
    private StreamBridge streamBridge ;

    public ProductRestController(ProductService productService, StreamBridge streamBridge) {
        this.productService = productService;
        this.streamBridge = streamBridge;
    }

    @GetMapping("{size}")
    public PageInfo getProductsPageInfo(@PathVariable int size){
        return this.productService.getProductPageInfo(size);
    }

    @GetMapping("find/{productId}")
    public Product getProductById(@PathVariable String productId){
        return this.productService.getProductById(productId);
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product){
        return this.productService.createProduct(product);
    }
    @PutMapping
    public Product update(@RequestBody Product product){
        return this.productService.updateProduct(product);
    }

    @GetMapping("event/{productId}/{customerId}/{eventType}")
    public void catchEventType(@PathVariable String productId , @PathVariable String customerId,  @PathVariable String eventType){
        PageEvent event = PageEvent.builder()
                .productId(productId)
                .type(PageEventType.valueOf(eventType))
                .date(new Date())
                .duration(1L)
                .pageEventId(UUID.randomUUID().toString())
                .userId(customerId)
                .build();
        this.streamBridge.send("R1" , event) ;
    }
}
