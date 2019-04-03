
-- CREATE DATABASE test_db;

-- CREATE DATABASE test2_db;
-- USE test2_db;
DROP DATABASE IF EXISTS test2_db;
CREATE DATABASE test2_db;
USE test2_db;

--  CREATE TABLE users
--  (
--  	id int NOT NULL AUTO_INCREMENT,
--  	user_name varchar(255) NOT NULL,
--     post TEXT,
--  	PRIMARY KEY (id)
--  );

--  INSERT INTO users (user_name, post) VALUES ('OB', '3 post'); 
--  INSERT INTO users (user_name, post) VALUES ('Mar', '4 post'); 

-- CREATE TABLE pets
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	animal_breed varchar(255) NOT NULL,
-- 	animal_name varchar(255) NOT NULL,
-- 	price int NOT NULL,
-- 	buyer_id int NOT NULL,
-- 	PRIMARY KEY (id),
-- 	FOREIGN KEY (buyer_id) REFERENCES buyers(id)
-- );