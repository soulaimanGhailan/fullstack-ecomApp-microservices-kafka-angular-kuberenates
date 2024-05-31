package devops.ecom.customerservice.model;

import lombok.Data;

@Data
public class AddItemRequest {
    private String productId ;
    private String customerId ;
    private int quantity;
    private String pickedColor ;
}
