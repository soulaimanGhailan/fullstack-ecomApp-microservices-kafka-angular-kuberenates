![Diagramme sans nom drawio (20)](https://github.com/soulaimanGhailan/fullstack-ecomApp-microservices-kafka-angular-kuberenates/assets/99770237/82a7f466-8998-4974-8460-1a48e9a16bca)
# E-Commerce Application

## Overview
This is a full-stack e-commerce application based on a microservice architecture. It implements an event-driven approach for handling user interactions, leveraging event sourcing. The backend includes microservices (CustomerService, ProductService) that communicate via REST APIs. User interactions are captured as events and persisted to a kafka topic that meant to be fiched by the pageEventService and petsit to mongo database .

## Backend Microservices
Each microservice is developed with Spring Boot and offers a RESTful API. They utilize Spring Data MongoDB for data persistence and Spring Cloud Stream Functions for event-driven communication.

## Backend Microservices
- **CustomerService**
    - **Functionality**: Manages customer data and shopping carts. Persists user interactions as events.
  
- **ProductService**
    - **Functionality**: Manages product data, including CRUD operations. Persists user interactions as events.

- **PageEventService**
    - **Functionality**: 
        - Subscribes to a Kafka topic to fetch user interaction event as (PageEvent) object
        - Persists PageEvent objects fetched from Kafka to a MongoDB database.
          
![Capture d’écran (1412)](https://github.com/soulaimanGhailan/fullstack-ecomApp-microservices-kafka-angular-kuberenates/assets/99770237/8ce09356-9e70-4811-9e35-abd7885cfa47)
![Capture d’écran (1411)](https://github.com/soulaimanGhailan/fullstack-ecomApp-microservices-kafka-angular-kuberenates/assets/99770237/bc6471a7-dbbc-4c3e-a3a5-e52942677b8c)


## Frontend
- **Technology**: Angular
- **State Management**: ngRx

## Security
- Integrated with Keycloak for authentication and authorization.
- Secures both the backend microservices and the frontend application , in fact addapter were added to both backend microservices (with spring security) and frontend
  
  ![Capture d’écran (1408)](https://github.com/soulaimanGhailan/fullstack-ecomApp-microservices-kafka-angular-kuberenates/assets/99770237/bddf2ab2-5da2-485f-8214-1f1c7e26d6fd)
  ![Capture d’écran (1409)](https://github.com/soulaimanGhailan/fullstack-ecomApp-microservices-kafka-angular-kuberenates/assets/99770237/bcef7997-59c5-4ac3-9ae2-bf6ce5158adf)



## Deployment
The application is deployed in a local kubernetes cluser using with:
- Helm charts
- Helmfile
  
  ![ffff drawio (1)](https://github.com/soulaimanGhailan/fullstack-ecomApp-microservices-kafka-angular-kuberenates/assets/99770237/3a719ad3-a85a-4880-9c07-0cd73db45b86)

## application screan shots

![Diagramme sans nom drawio (18)](https://github.com/soulaimanGhailan/fullstack-ecomApp-microservices-kafka-angular-kuberenates/assets/99770237/73d32ea7-b7c2-4147-b050-d73e7a583ce8)
![Capture d’écran (1400)](https://github.com/soulaimanGhailan/fullstack-ecomApp-microservices-kafka-angular-kuberenates/assets/99770237/1a3d9824-9320-4c10-8332-8c3b877271e2)
![Capture d’écran (1401)](https://github.com/soulaimanGhailan/fullstack-ecomApp-microservices-kafka-angular-kuberenates/assets/99770237/4dc4b1ca-9d08-4746-9ea5-bbdfa9773ae0)
![Capture d’écran (1402)](https://github.com/soulaimanGhailan/fullstack-ecomApp-microservices-kafka-angular-kuberenates/assets/99770237/262b86b0-b54d-4baf-a124-ec6859cc1a9f)
![Capture d’écran (1404)](https://github.com/soulaimanGhailan/fullstack-ecomApp-microservices-kafka-angular-kuberenates/assets/99770237/43985f93-fe7a-4a12-8847-f062c4fbe564)




