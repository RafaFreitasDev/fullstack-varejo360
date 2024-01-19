#
# Build stage
#
FROM maven:3.9.4-eclipse-temurin-17-focal AS build
COPY . .
RUN mvn clean package -DskipTests

#
# Package stage
#
FROM openjdk:21
COPY --from=build /target/backend-0.0.1-SNAPSHOT.jar backend.jar
# ENV PORT=3001
EXPOSE 3001
ENTRYPOINT ["java","-jar","backend.jar"]