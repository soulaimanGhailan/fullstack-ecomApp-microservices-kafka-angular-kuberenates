package devops.ecom.productservice.config;

import devops.ecom.productservice.dao.entities.Dimension;
import devops.ecom.productservice.dao.entities.Price;
import devops.ecom.productservice.dao.entities.Product;
import devops.ecom.productservice.dao.enums.ProductCategory;
import devops.ecom.productservice.dao.enums.ProductStatus;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.List;

@Projection(name = "withPrice", types = { Product.class })
public interface ProductsProjection {
    String getProductId();
    String getName();
    Date getAddingDate();
    int getQuantity() ;
    String getDescription();
    ProductCategory getCategory();
    ProductStatus getStatus();
    List<String> getColors();
    boolean isSelected();
    List<String> getProductImagesBas64();
    Price getProductPrice(); // Include the productPrice field
    String getBrand();
    Dimension getDimension() ;
}
