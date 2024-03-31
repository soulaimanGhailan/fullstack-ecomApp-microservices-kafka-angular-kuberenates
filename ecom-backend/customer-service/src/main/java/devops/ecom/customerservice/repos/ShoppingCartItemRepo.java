package devops.ecom.customerservice.repos;

import devops.ecom.customerservice.dao.ShoppingCartItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ShoppingCartItemRepo extends MongoRepository<ShoppingCartItem , String> {

}
