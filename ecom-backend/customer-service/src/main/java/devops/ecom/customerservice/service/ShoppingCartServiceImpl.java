package devops.ecom.customerservice.service;

import devops.ecom.customerservice.RestClients.ProductRestClient;
import devops.ecom.customerservice.dao.Customer;
import devops.ecom.customerservice.dao.ShoppingCart;
import devops.ecom.customerservice.dao.ShoppingCartItem;
import devops.ecom.customerservice.exceptions.CustomerNotFoundException;
import devops.ecom.customerservice.model.AddItemRequest;
import devops.ecom.customerservice.model.Price;
import devops.ecom.customerservice.model.Product;
import devops.ecom.customerservice.repos.CustomerRepo;
import devops.ecom.customerservice.repos.ShoppingCartRepo;
import org.keycloak.KeycloakSecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ShoppingCartServiceImpl implements ShoppingCartService {
    private CustomerRepo customerRepo ;
    private ShoppingCartRepo shoppingCartRepo ;
    private ProductRestClient productRestClient ;

    public ShoppingCartServiceImpl(CustomerRepo customerRepo, ShoppingCartRepo shoppingCartRepo,ProductRestClient productRestClient) {
        this.customerRepo = customerRepo;
        this.shoppingCartRepo = shoppingCartRepo;
        this.productRestClient = productRestClient;
    }

    @Override
    public ShoppingCartItem createItem(AddItemRequest addItemRequest) {
        int quantity = 1 ;
        Product p = this.productRestClient.getProduct(addItemRequest.getProductId() , getToken()) ;
//        Price productPrice = this.productRestClient.getProductPrice(addItemRequest.getProductId());
//        p.setProductPrice(productPrice);
        p.setPickedColor(addItemRequest.getPickedColor());
        return ShoppingCartItem.builder()
                .product(p)
                .quantity(quantity)
                .build();
    }

    @Override
    public ShoppingCart addItemToCart(AddItemRequest addItemRequest) throws CustomerNotFoundException {
        Customer customer = this.customerRepo.findById(addItemRequest.getCustomerId()).orElseThrow(()
                -> new CustomerNotFoundException("customer fo id *" + addItemRequest.getCustomerId() + "not found"));
        ShoppingCart shoppingCart = customer.getShoppingCart();
        ShoppingCartItem item = checkProductInCart(shoppingCart , addItemRequest.getProductId()) ;
        if(item != null){
            return updateItemInCart(item , addItemRequest , shoppingCart);
        }else{
            item = createItem(addItemRequest) ;
            shoppingCart.getItems().add(item) ;
            ShoppingCart savedCard = this.shoppingCartRepo.save(shoppingCart);
            customer.setShoppingCart(savedCard);
            this.customerRepo.save(customer);
            return savedCard ;
        }
    }

    @Override
    public ShoppingCart removeItemFromCart(String customerId, String productId) throws CustomerNotFoundException {
        Customer customer = this.customerRepo.findById(customerId).orElseThrow(()
                -> new CustomerNotFoundException("customer fo id *" + customerId + "not found"));
        ShoppingCart shoppingCart = customer.getShoppingCart();
        ShoppingCartItem item = checkProductInCart(shoppingCart , productId) ;
        if(item !=null){
            shoppingCart.getItems().remove(item) ;
            ShoppingCart savedCard = this.shoppingCartRepo.save(shoppingCart);
            customer.setShoppingCart(savedCard);
            this.customerRepo.save(customer);
            return savedCard ;
        }else throw  new RuntimeException("product not found in shoppingCart to delete") ;

    }

    @Override
    public ShoppingCart updateItemInCart(ShoppingCartItem item, AddItemRequest addItemRequest, ShoppingCart cart)   {
        int index = cart.getItems().indexOf(item) ;
        cart.getItems().get(index).setQuantity(item.getQuantity() + 1);
        cart.getItems().get(index).getProduct().setPickedColor(addItemRequest.getPickedColor());
        return this.shoppingCartRepo.save(cart);

    }

    private ShoppingCartItem checkProductInCart(ShoppingCart cart , String productId){
        for (ShoppingCartItem item: cart.getItems()) {
            if(productId.equals(item.getProduct().getProductId()))
                return item ;
        }
       return null ;

    }

    private String getToken(){
        KeycloakSecurityContext context = (KeycloakSecurityContext) SecurityContextHolder.getContext().getAuthentication().getCredentials();
        String token ="bearer "+ context.getTokenString();
        return token;
    }
}
