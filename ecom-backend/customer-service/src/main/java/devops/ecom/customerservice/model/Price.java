package devops.ecom.customerservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor
public class Price {
    private String currency ;
    private long price ;
    private String symbol ;
}
