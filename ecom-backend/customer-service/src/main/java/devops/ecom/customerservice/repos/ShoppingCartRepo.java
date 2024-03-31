package devops.ecom.customerservice.repos;

import devops.ecom.customerservice.dao.ShoppingCart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ShoppingCartRepo extends MongoRepository<ShoppingCart , String> {
}
