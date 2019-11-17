# Burger

Burger Logger with MySQL, Node, Express, Handlebars, and homemade ORM technologies.

[Link to Burger Heroku Site!](https://murmuring-hollows-11052.herokuapp.com/) 

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
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
* ORM


## Prerequisites & Installations

In order to run this command line node app, first install node.js and npm. To install the app, clone this repository and use 'npm install' to gather dependencies specified in the package.json file (Express, MySQL, Express-handlebars). The depencencies are needed for data input and storage in the database.

## Application Overview

This application is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM technologies. It follows the MVC design pattern. It uses Node and MySQL to query and route data in the application. It also uses Handlebars to generate the necessary HTML.


## Instructions

Add a burger you'd like to devour at the bottom of the page under 'Enter a burger you want to eat'.

Click the "Add A Burger" button. It will be added to the left side of the appplication (and the MySQL database!). 

To devour a burger, click the "Eat It" button. The burger you clicked will be moved to the right side of the application. 