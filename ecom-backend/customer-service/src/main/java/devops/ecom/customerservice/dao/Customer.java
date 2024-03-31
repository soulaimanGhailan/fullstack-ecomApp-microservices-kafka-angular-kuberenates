package devops.ecom.customerservice.dao;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Data @AllArgsConstructor @NoArgsConstructor
@Builder
@Document
public class Customer {
    @Id
    private String customerId;
    private String email;
    private String firstname;
    private String lastname;
    private String phoneNumber;
    @DBRef
    private ShoppingCart shoppingCart;
}
