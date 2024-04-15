package devops.ecom.pageeventconsumerservice.service;

import org.springframework.stereotype.Service;

import java.util.function.Consumer;

@Service
public interface PageEventService {
     Consumer<String> pageEventConsumer() ;
}
