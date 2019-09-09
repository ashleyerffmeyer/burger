// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// Setting up ORM functions using burger specific input for the ORM
var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    update: function (id, cb) {
        orm.update("burgers", id, cb);
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;