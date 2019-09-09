# Burger

Burger Logger with MySQL, Node, Express, Handlebars, and homemade ORM technologies.

[Link to Burger Heroku Site!](https://drive.google.com/file/d/1oYwg8tB3UqN4bJZ26TUmWUXmKdre86iV/view?usp=sharing) 

## Authors
Ashley Erffmeyer, with major support from KU's Coding Boot Camp staff members:
* Ryan LaRue (Instructor)
* Eli Vargas (TA)
* Seth Willis (TA)

## Tools Used
* JavaScript
* MySQL
* Node.js
* [Express](https://www.npmjs.com/package/express)
* [MySQL](https://www.npmjs.com/package/mysql)
* [Handlebars](https://www.npmjs.com/package/express-handlebars)
* ORM


## Prerequisites & Installations

In order to run this command line node app, first install node.js and npm. To install the app, clone this repository and use 'npm install' to gather dependencies specified in the package.json file (inquirer and MySQL). The depencencies are needed for data input and storage in the database.

## Application Overview

This application is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM technologies. It follows the MVC design pattern. It uses Node and MySQL to query and route data in the application and Handlebars to generate the necessary HTML.


## Instructions

In the MySQL database called `bamazon`, there is a table of products that contains 10 different products and the following product information:
* item_id (unique id for each product)
* product_name (Name of product)
* department_name
* price (cost to customer)
* stock_quantity (how much of the product is available in stores)