package devops.ecom.customerservice.service;

import devops.ecom.customerservice.RestClients.ProductRestClient;
import devops.ecom.customerservice.dao.Customer;
import devops.ecom.customerservice.dao.ShoppingCart;
import devops.ecom.customerservice.dao.ShoppingCartItem;
import devops.ecom.customerservice.exceptions.CustomerNotFoundException;
import devops.ecom.customerservice.exceptions.ShoppingCartItemNotFound;
import devops.ecom.customerservice.exceptions.ShoppingCartNotFound;
import devops.ecom.customerservice.model.Product;
import devops.ecom.customerservice.repos.CustomerRepo;
import devops.ecom.customerservice.repos.ShoppingCartItemRepo;
import devops.ecom.customerservice.repos.ShoppingCartRepo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@Transactional
public class ShoppingCartServiceImpl implements ShoppingCartService {
    private CustomerRepo customerRepo ;
    private ShoppingCartRepo shoppingCartRepo ;
    private ShoppingCartItemRepo shoppingCartItemRepo ;
    private ProductRestClient productRestClient ;

    public ShoppingCartServiceImpl(CustomerRepo customerRepo, ShoppingCartRepo shoppingCartRepo, ShoppingCartItemRepo shoppingCartItemRepo, ProductRestClient productRestClient) {
        this.customerRepo = customerRepo;
        this.shoppingCartRepo = shoppingCartRepo;
        this.shoppingCartItemRepo = shoppingCartItemRepo;
        this.productRestClient = productRestClient;
    }

    @Override
    public ShoppingCartItem createItem(String productId, int quantity, String cartId) {

        Product p = this.productRestClient.getProduct(productId) ;
        ShoppingCartItem item = ShoppingCartItem.builder()
                .shoppingCartId(UUID.randomUUID().toString())
                .product(p)
                .shoppingCartId(cartId)
                .quantity(quantity)
                .build();
       return this.shoppingCartItemRepo.insert(item) ;

    }

    @Override
    public ShoppingCart addItemToCart(String customerId, String productId, int quantity) throws CustomerNotFoundException, ShoppingCartNotFound, ShoppingCartItemNotFound {
        Customer customer = this.customerRepo.findById(customerId).orElseThrow(()
                -> new CustomerNotFoundException("customer fo id *" + customerId + "not found"));
        ShoppingCart shoppingCart = customer.getShoppingCart();
        ShoppingCartItem item = checkProductInCart(shoppingCart , productId) ;
        if(item != null){
            return updateItemQuantityInCart(item.getId() , quantity , shoppingCart.getId());
        }else{
            item = createItem(productId  , quantity , customer.getShoppingCart().getId()) ;
            shoppingCart.getItems().add(item) ;
            ShoppingCart savedCard = this.shoppingCartRepo.save(shoppingCart);
            customer.setShoppingCart(savedCard);
            this.customerRepo.save(customer);
            return savedCard ;
        }
    }

    @Override
    public ShoppingCart removeItemFromCart(String customerId, String productId) {
        return null;
    }

    @Override
    public ShoppingCart updateItemQuantityInCart(String itemId, int quantity, String cartId) throws ShoppingCartNotFound, ShoppingCartItemNotFound {
        ShoppingCart cart = this.shoppingCartRepo.findById(cartId).orElseThrow(() ->
                new ShoppingCartNotFound("ShoppingCartNotFound  id   :" + cartId)) ;
        ShoppingCartItem item = this.shoppingCartItemRepo.findById(itemId).orElseThrow(()
                -> new ShoppingCartItemNotFound("ShoppingCartItemNotFound  id   :" + itemId));
        int index = cart.getItems().indexOf(item) ;
        item.setQuantity(quantity);
        this.shoppingCartItemRepo.save(item);
        cart.getItems().get(index).setQuantity(quantity);
        return this.shoppingCartRepo.save(cart);

    }

    private ShoppingCartItem checkProductInCart(ShoppingCart cart , String productId){
        for (ShoppingCartItem item: cart.getItems()) {
            if(productId.equals(item.getProduct().getProductId()))
                return item ;
        }
       return null ;

    }
}
