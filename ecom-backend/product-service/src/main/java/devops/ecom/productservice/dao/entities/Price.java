package devops.ecom.productservice.dao.entities;

import devops.ecom.productservice.dao.enums.Currency;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@AllArgsConstructor @NoArgsConstructor @Builder
@Document
public class Price {
    @Id
    private String priceId ;
    private Currency currency ;
    private long price ;
}
