
USE bootcamp_bookmarksDB;

 CREATE TABLE users(
 id int NOT NULL AUTO_INCREMENT,
 email varchar(255) NOT NULL,
 first_name varchar(255) NOT NULL,
 last_name varchar(255) NOT NULL,
 pswd varchar(255) NOT NULL,
 UNIQUE KEY email (email),
 createdAt DATETIME NOT NULL,
 updatedAt DATETIME NOT NULL,
PRIMARY KEY (id)
);

USE bootcamp_bookmarksDB;
INSERT INTO users (first_name, last_name, email, pswd, createdAt, updatedAt)
VALUES 
("Laurie", "Aaronson", "aaronson.laurie@gmail.com", "parallelogram", "2018-04-22 04:15:00", "2018-04-22 04:15:00"),
("Matt", "Black", "matt_has_an_email@email.email", "eh" ,"2018-04-22 04:15:00", "2018-04-22 04:15:00"),
("Joe", "Pfahl", "joe@mac.com", "triangle", "2018-04-22 04:15:00", "2018-04-22 04:15:00"),
("Don", "Routes", "don@msn.com", "square", "2018-04-22 04:15:00", "2018-04-22 04:15:00"),
("Edwin", "Hsai", "edwin@gmail.com", "circle", "2018-04-22 04:15:00", "2018-04-22 04:15:00");


