package devops.ecom.customerservice.service;

import devops.ecom.customerservice.dao.ShoppingCart;
import devops.ecom.customerservice.dao.ShoppingCartItem;
import devops.ecom.customerservice.exceptions.CustomerNotFoundException;
import devops.ecom.customerservice.model.AddItemRequest;

public interface ShoppingCartService {
    ShoppingCartItem createItem(AddItemRequest addItemRequest ) ;
    ShoppingCart addItemToCart(AddItemRequest addItemRequest) throws CustomerNotFoundException;
    ShoppingCart removeItemFromCart(String customerId , String productId) throws CustomerNotFoundException;
    ShoppingCart updateItemInCart(ShoppingCartItem item, AddItemRequest addItemRequest, ShoppingCart cart) ;
}
