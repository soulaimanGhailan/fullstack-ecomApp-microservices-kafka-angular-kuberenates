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
public class ShoppingCartItem {
    private Product product;
    private int quantity;
}
