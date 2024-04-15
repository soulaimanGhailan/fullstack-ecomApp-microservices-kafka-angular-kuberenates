package devops.ecom.productservice.dao.entities;

import devops.ecom.productservice.dao.enums.PageEventType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor @NoArgsConstructor
@Builder
public class PageEvent {
    private String pageEventId ;
    private String userId ;
    private Date date ;
    private long duration ;
    private PageEventType type ;
    private String productId ;
}
