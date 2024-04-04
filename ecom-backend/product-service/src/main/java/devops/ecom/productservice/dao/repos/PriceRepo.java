package devops.ecom.productservice.dao.repos;

import devops.ecom.productservice.dao.entities.Price;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PriceRepo extends MongoRepository<Price , String> {

}
