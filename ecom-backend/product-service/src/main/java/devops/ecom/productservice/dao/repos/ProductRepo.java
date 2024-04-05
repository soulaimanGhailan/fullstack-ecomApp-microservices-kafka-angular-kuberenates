package devops.ecom.productservice.dao.repos;

import devops.ecom.productservice.config.ProductsProjection;
import devops.ecom.productservice.dao.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(excerptProjection = ProductsProjection.class)
public interface ProductRepo extends MongoRepository<Product , String> {
    Page<Product> findByStatus(String status, Pageable pageable);
    Page<Product> findByCategory(String category, Pageable pageable);
    Page<Product> findByNameContainsIgnoreCase(String keyword, Pageable pageable);
    Page<Product> findBySelected(Boolean selected, Pageable pageable);
}
