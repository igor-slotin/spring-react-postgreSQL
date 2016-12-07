# spring-lab

Laboratory work. Spring + JPA + PostgreSQL

For run project 
 - install maven
 - install postgreSQ, run it and create database
 - add to src/main/resources file "application.properties" with your db config (like: 
        spring.datasource.url=jdbc:postgresql://localhost:5432/{database}
        spring.datasource.username={bd userneme}
        spring.datasource.password={bd passwo}
        spring.jpa.generate-ddl=true
        )
- run mvn install && mvn spring-boot:run
