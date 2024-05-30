package devops.ecom.customerservice.service;

import devops.ecom.customerservice.dao.Customer;

public interface CustomerService {
    Customer createCustomer(Customer customer) ;
    void syncKeycloakUsers();
}
