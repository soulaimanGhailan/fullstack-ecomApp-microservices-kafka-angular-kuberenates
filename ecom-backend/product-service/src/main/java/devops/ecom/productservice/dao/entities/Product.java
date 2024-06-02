package devops.ecom.productservice.dao.entities;

import devops.ecom.productservice.dao.enums.ProductCategory;
import devops.ecom.productservice.dao.enums.ProductStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data @AllArgsConstructor @NoArgsConstructor
@Builder
@Document
public class Product {
    @Id
    private String productId ;
    private String name;
    private Date addingDate ;
    private String brand ;
    private int quantity ;
    private String description ;
    @Field
    private ProductCategory category;
    @Field
    private ProductStatus status;
    private Price productPrice;
    @Field
    private List<String> colors;
    private boolean selected ;
    private List<String> productImagesBas64 = new ArrayList<>();
    private Dimension dimension ;
//    private Enum subCategory;
}
