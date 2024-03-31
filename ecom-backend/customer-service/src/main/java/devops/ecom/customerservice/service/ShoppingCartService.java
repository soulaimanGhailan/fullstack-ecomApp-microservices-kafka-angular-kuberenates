package devops.ecom.customerservice.service;

import devops.ecom.customerservice.dao.ShoppingCart;
import devops.ecom.customerservice.dao.ShoppingCartItem;

public interface ShoppingCartService {
    ShoppingCartItem createItem(String productId , int quantity , String customerId) ;
    ShoppingCart addItemToCart(String customerId , String productId , int quantity) ;
    ShoppingCart removeItemFromCart(String customerId , String productId);
    ShoppingCart updateItemQuantityInCart(ShoppingCartItem item);
}
