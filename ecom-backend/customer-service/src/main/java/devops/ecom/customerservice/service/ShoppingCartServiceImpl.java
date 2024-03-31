package devops.ecom.customerservice.service;

import devops.ecom.customerservice.dao.ShoppingCart;
import devops.ecom.customerservice.dao.ShoppingCartItem;

public class ShoppingCartServiceImpl implements ShoppingCartService {
    @Override
    public ShoppingCartItem createItem(String productId, int quantity, String customerId) {
        return null;
    }

    @Override
    public ShoppingCart addItemToCart(String customerId, String productId, int quantity) {
        return null;
    }

    @Override
    public ShoppingCart removeItemFromCart(String customerId, String productId) {
        return null;
    }

    @Override
    public ShoppingCart updateItemQuantityInCart(ShoppingCartItem item) {
        return null;
    }
}
