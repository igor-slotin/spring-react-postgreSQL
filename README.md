# spring-lab

Laboratory work. Spring + JPA + PostgreSQL

For run project 
 - install maven
 - install postgreSQ, run it and create database
 - add to src/main/resources file "application.properties" with your db config (like: \n 
        spring.datasource.url=jdbc:postgresql://localhost:5432/{database} \n
        spring.datasource.username={bd userneme} \n
        spring.datasource.password={bd passwo} \n
        spring.jpa.generate-ddl=true \n
        )
- run mvn install && mvn spring-boot:run
