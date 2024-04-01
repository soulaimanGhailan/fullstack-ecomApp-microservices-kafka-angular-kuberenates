package devops.ecom.customerservice.web;

import devops.ecom.customerservice.dao.ShoppingCart;
import devops.ecom.customerservice.exceptions.CustomerNotFoundException;
import devops.ecom.customerservice.exceptions.ShoppingCartItemNotFound;
import devops.ecom.customerservice.exceptions.ShoppingCartNotFound;
import devops.ecom.customerservice.service.ShoppingCartService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class CustomerRestController {
    private ShoppingCartService cartService ;
    public CustomerRestController(ShoppingCartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("{customerId}/{productId}/{quantity}")
    public ShoppingCart addProductToCart(@PathVariable String customerId , @PathVariable String productId , @PathVariable int quantity){
        try {
            return this.cartService.addItemToCart(customerId , productId , quantity) ;
        } catch (CustomerNotFoundException | ShoppingCartNotFound | ShoppingCartItemNotFound e) {
            throw new RuntimeException(e);
        }
    }

}
