CREATE DATABASE bootcamp_bookmarksDB ;
USE bootcamp_bookmarksDB;

CREATE TABLE users(
id int NOT NULL AUTO_INCREMENT,
email varchar(255) NOT NULL,
first_name varchar(255) NOT NULL,
last_name varchar(255) NOT NULL,
pswd varchar(255) NOT NULL,
UNIQUE KEY email (email),
PRIMARY KEY (id)
);

-- CREATE TABLE bookmarks(
-- url varchar (255),
-- title varchar (255),
-- summary text,
-- category varchar (255),
-- rating int,
-- author varchar (255),
-- added_by varchar (255),
-- tags varchar (255),
-- slack_channel varchar (255),
-- submitted timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
-- favorite boolean
-- );


-- CREATE table favorites(
-- title varchar (255),
-- category varchar (255),
-- added_by varchar (255),
-- tags varchar (255),
-- slack_channel varchar (255),
-- submitted timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
-- favorite boolean
-- )-- 