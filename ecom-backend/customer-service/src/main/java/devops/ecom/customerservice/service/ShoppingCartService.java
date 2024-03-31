package devops.ecom.customerservice.service;

import devops.ecom.customerservice.dao.ShoppingCart;
import devops.ecom.customerservice.dao.ShoppingCartItem;
import devops.ecom.customerservice.exceptions.CustomerNotFoundException;
import devops.ecom.customerservice.exceptions.ShoppingCartItemNotFound;
import devops.ecom.customerservice.exceptions.ShoppingCartNotFound;

public interface ShoppingCartService {
    ShoppingCartItem createItem(String productId , int quantity , String cartId) ;
    ShoppingCart addItemToCart(String customerId , String productId , int quantity) throws CustomerNotFoundException, ShoppingCartNotFound, ShoppingCartItemNotFound;
    ShoppingCart removeItemFromCart(String customerId , String productId);

    ShoppingCart updateItemQuantityInCart(String itemId, int quantity, String cartId) throws ShoppingCartNotFound, ShoppingCartItemNotFound;
}
