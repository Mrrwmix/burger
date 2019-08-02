const connection = require("./connection");

var orm = {
  selectAll: function(cb) {
    connection.query("SELECT * FROM burgers", function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  insertOne: function(burger, cb) {
    connection.query(
      "INSERT INTO burgers (burger_name) VALUES (?)",
      [burger],
      function(err, res) {
        if (err) throw err;
        cb(res);
      }
    );
  },
  updateOne: function(burger, cb) {
    connection.query(
      "UPDATE burgers SET devoured=true WHERE burger_name=?",
      [burger],
      function(err, res) {
        if (err) throw err;
        cb(res);
      }
    );
  }
};

module.exports = orm;
