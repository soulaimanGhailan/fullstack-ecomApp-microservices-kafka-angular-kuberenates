package devops.ecom.productservice.dao.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@Builder
public class PageInfo {
    private int totalPages ;
    private int size ;
    private int totalElements;
}
