package devops.ecom.customerservice.dao;

import devops.ecom.customerservice.model.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data @AllArgsConstructor @NoArgsConstructor
@Builder
@Document
public class ShoppingCartItem {
    @Id
    private String id ;
    private Product product;
    private String shoppingCartId;
    private int quantity;
}
