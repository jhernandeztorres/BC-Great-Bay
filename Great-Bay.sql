DROP DATABASE IF EXISTS great_bay_db;

CREATE DATABASE great_bay_db;

USE great_bay_db;

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(45) NULL,
    price DECIMAL NULL,
    quantity INT NULL,
    'time' TIMESTAMP,
    'description' VARCHAR(255) NULL
);

INSERT INTO products(title, price, quantity, 'description')
VALUES ("GoFree", 499.99, 1, "Cheap Camera");