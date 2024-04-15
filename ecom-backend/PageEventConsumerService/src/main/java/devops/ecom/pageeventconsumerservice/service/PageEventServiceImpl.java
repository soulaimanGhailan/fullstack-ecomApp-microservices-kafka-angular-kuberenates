package devops.ecom.pageeventconsumerservice.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import devops.ecom.pageeventconsumerservice.entities.PageEvent;
import devops.ecom.pageeventconsumerservice.repos.PageEventRepo;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.function.Consumer;

@Service
public class PageEventServiceImpl implements PageEventService {
    private static final ObjectMapper objectMapper = new ObjectMapper();
    private PageEventRepo pageEventRepo ;

    public PageEventServiceImpl(PageEventRepo pageEventRepo) {
        this.pageEventRepo = pageEventRepo;
    }

    @Bean
    public Consumer<String> pageEventConsumer(){
        return (input) -> {
            System.out.println("***********************");
            String pageEvent = input.toString() ;
            try {
                PageEvent event = parseJsonToObject(decodeBase64String(pageEvent), PageEvent.class);
                System.out.println(event);
                this.pageEventRepo.insert(event) ;
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
//            System.out.println(pageEvent);
            System.out.println("***********************");
        };
    }

    public static String decodeBase64String(String base64String) {
        // Check if the decoded string starts and ends with double quotes
        if (base64String.startsWith("\"") && base64String.endsWith("\"")) {
            // Remove the double quotes
            base64String = base64String.substring(1, base64String.length() - 1);
        }
        byte[] decodedBytes = Base64.getDecoder().decode(base64String);
        String decodedString = new String(decodedBytes);


        return decodedString;
    }
    public static <T> T parseJsonToObject(String jsonString, Class<T> valueType) throws Exception {
        return objectMapper.readValue(jsonString, valueType);
    }
}
