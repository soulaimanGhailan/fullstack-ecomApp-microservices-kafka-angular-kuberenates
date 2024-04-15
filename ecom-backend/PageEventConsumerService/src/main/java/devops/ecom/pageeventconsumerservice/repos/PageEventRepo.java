package devops.ecom.pageeventconsumerservice.repos;

import devops.ecom.pageeventconsumerservice.entities.PageEvent;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PageEventRepo extends MongoRepository<PageEvent , String> {
}
