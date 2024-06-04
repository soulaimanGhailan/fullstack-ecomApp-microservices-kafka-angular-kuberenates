![Diagramme sans nom drawio (20)](https://github.com/soulaimanGhailan/fullstack-ecomApp-microservices-kafka-angular-kuberenates/assets/99770237/82a7f466-8998-4974-8460-1a48e9a16bca)
Backend Microservices
CustomerService

Functionality: Manages customer data and shopping carts. Persists user interactions as PitchEvent objects to Kafka.
ProductService

Functionality: Manages product data, including CRUD operations. Persists user interactions as PitchEvent objects to Kafka.
PitchEventService

Functionality:
Subscribes to a Kafka topic to fetch user interaction events (PitchEvents) using Spring Cloud Stream Functions.
Persists PitchEvent objects fetched from Kafka to a MongoDB database.
All backend microservices are developed using Spring Boot and offer RESTful APIs.

