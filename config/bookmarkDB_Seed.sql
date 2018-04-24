CREATE DATABASE bootcamp_bookmarksDB ;
USE bootcamp_bookmarksDB;


CREATE TABLE bookmarks(
url varchar (255),
title varchar (255),
summary text,
category varchar (255),
rating int,
author varchar (255),
added_by varchar (255),
tags varchar (255),
slack_channel varchar (255),
submitted timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
favorite boolean
);

INSERT INTO bookmarks (url, title, author, summary, category, tags, added_by, slack_channel, rating, favorite)
VALUES ("https://hackernoon.com/getting-started-with-sequelize-for-nodejs-applications-2854c58ffb8c", "Getting Started with Sequelize for Nodejs Applications", "Aman Mittal", "ORM or Object Relation Mapping is a process of mapping between objects and relation database systems. An ORM acts like an interface between two system. ORM provide advantages for developers from basic ones like saving time and effort and rather focusing on business logic. The code is robust instead of redundant. ORM helps in managing queries for multiple tables in an effective manner. Lastly, an ORM (like sequelize) is capable to connect with different databases (which comes in handy when switching from one database to another).", "BackEnd development", "ORMs, Sequelize, MySQL", "Laurie A", "hacks_n_helps", 4, true),
("Back-end Basics with Node.js, PostgreSQL, Sequelize, and FeathersJS", "https://blog.cloudboost.io/back-end-basics-with-node-js-postgresql-sequelize-and-feathersjs-7ed89b3cd353", "Violet Suber", "This post documents how to use PostgreSQL and FeathersJS with Sequelize.  Good read for anyone who is learning the backend for the first time", "Backend development", "ORMs, Feather JS, PostgreSQL", "Laurie A",  "hacks_n_helps", 3, false),
("Sequelize CRUD 101", "https://lorenstewart.me/2016/10/03/sequelize-crud-101/", "Loren Stuart", "The first of three posts explaining sequelize as it relates for CRUD methodology.  Example code and detailed explaintions provided", "Backend development", "node.js, sequelize, CRUD, api", "Laurie A", "null", 4, true);
