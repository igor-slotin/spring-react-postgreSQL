# spring-lab

Laboratory work. Spring + JPA + PostgreSQL

For run project 
 - install maven
 - install postgreSQ, run it and create database
 - add to src/main/resources file "application.properties" with your db config (like: <br/>
        spring.datasource.url=jdbc:postgresql://localhost:5432/{database}<br/>
        spring.datasource.username={bd userneme}<br/>
        spring.datasource.password={bd passwo}<br/>
        spring.jpa.generate-ddl=true<br/>
        )
- run mvn install && mvn spring-boot:run
