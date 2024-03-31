package devops.ecom.customerservice.service;

import devops.ecom.customerservice.dao.Customer;
import devops.ecom.customerservice.dao.ShoppingCart;
import devops.ecom.customerservice.repos.CustomerRepo;
import devops.ecom.customerservice.repos.ShoppingCartRepo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
    private CustomerRepo customerRepo ;
    private ShoppingCartRepo shoppingCartRepo ;

    public CustomerServiceImpl(CustomerRepo customerRepo, ShoppingCartRepo shoppingCartRepo) {
        this.customerRepo = customerRepo;
        this.shoppingCartRepo = shoppingCartRepo;
    }

    @Override
    public Customer createCustomer(Customer customer) {
        ShoppingCart cart = ShoppingCart.builder()
                .id(UUID.randomUUID().toString())
                .items(null)
                .customerId(customer.getCustomerId()).build();
        ShoppingCart insertedCart = this.shoppingCartRepo.insert(cart);
        customer.setShoppingCart(insertedCart);
        return  this.customerRepo.insert(customer);
    }
}
