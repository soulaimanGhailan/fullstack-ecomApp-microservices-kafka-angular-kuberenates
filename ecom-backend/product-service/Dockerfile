# Stage 1: Build the Spring Boot application
FROM maven:3.9.5 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Serve the Spring Boot application with JDK
FROM openjdk:11
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar


# Command to start Spring Boot application
ENTRYPOINT ["java","-jar","app.jar"]