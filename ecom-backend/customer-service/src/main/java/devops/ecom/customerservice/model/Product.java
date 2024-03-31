package devops.ecom.customerservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Data @AllArgsConstructor @NoArgsConstructor
@Builder
public class Product {
    private String productId ;
    private String name;
    private Date addingDate ;
    private String description ;
    private String category;
}
