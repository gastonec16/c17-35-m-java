# syntax=docker/dockerfile:1
FROM openjdk:17
WORKDIR /app

FROM maven:3.8.4-openjdk-17 AS build

COPY . .
RUN mvn clean package -DskipTests
COPY ./target/PatricksCoins-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]