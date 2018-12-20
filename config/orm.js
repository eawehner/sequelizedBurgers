//requiring connections
var connection = require("./connection.js");

//setting up orm
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableInput, function(err, res) {
            if (err) throw err;
            //send result to front-end
            cb(res);
        });
    },

    insertOne: function(tableInput, col, value, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, col, value], function(err, res) {
            if (err) throw err;
            
            //new burger inserted, calling it back to the front!
            cb(res);
        });
    },

    updateOne: function(tableInput, newValue, location, cb) {
        var queryString = "UPDATE ?? SET ? WHERE burger_id = ?";
        connection.query(queryString, [tableInput, newValue, location], function(err, res) {
            if (err) throw err;

            //burger updated, and called back to the front!
            cb(res);
        });
    }
};

module.exports = orm;