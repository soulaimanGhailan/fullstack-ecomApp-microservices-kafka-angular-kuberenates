package devops.ecom.customerservice.schedualUsers;

import devops.ecom.customerservice.service.CustomerService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Data
@AllArgsConstructor
@Configuration
@EnableScheduling
public class SyncConfig {

    private CustomerService userService;

    @Scheduled(fixedDelay = 30*1000) // Run every half minute
    public void syncUsers() {
        userService.syncKeycloakUsers();
    }
}
