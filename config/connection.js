// Setting up MySQL connection
var mysql = require("mysql");

// Defining variable connection with MySQL db information
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "19821982Ame$",
        database: "burgers_db"
    });
};

// Making connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Exporting connection for our ORM to use!
module.exports = connection;