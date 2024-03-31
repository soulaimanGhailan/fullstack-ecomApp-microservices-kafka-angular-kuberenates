package devops.ecom.productservice.dao.entities;

import devops.ecom.productservice.dao.enums.ProductCategory;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Data @AllArgsConstructor @NoArgsConstructor
@Builder
@Document
public class Product {
    @Id
    private String productId ;
    private String name;
    private Date addingDate ;
    private String description ;
    @Field
    private ProductCategory category;
//    private Enum subCategory;
}
