package devops.ecom.customerservice.web;

import devops.ecom.customerservice.dao.ShoppingCart;
import devops.ecom.customerservice.exceptions.CustomerNotFoundException;
import devops.ecom.customerservice.exceptions.ShoppingCartItemNotFound;
import devops.ecom.customerservice.exceptions.ShoppingCartNotFound;
import devops.ecom.customerservice.model.AddItemRequest;
import devops.ecom.customerservice.service.ShoppingCartService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "*")
public class CustomerRestController {
    private ShoppingCartService cartService ;
    public CustomerRestController(ShoppingCartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping
    public ShoppingCart addProductToCart(@RequestBody AddItemRequest addItemRequest){
        try {
            return this.cartService.addItemToCart(addItemRequest) ;
        } catch (CustomerNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
    @DeleteMapping("{customerId}/{productId}")
    public ShoppingCart deleteItemFromCart(@PathVariable String customerId , @PathVariable String productId){
        try {
            return this.cartService.removeItemFromCart(customerId , productId) ;
        } catch (CustomerNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

}
