const connection = require("./connection");

var orm = {
  selectAll: function() {
    connection.query("SELECT * FROM burgers", function(err, res) {
      if (err) throw err;
      return res;
    });
  },
  insertOne: function(burger) {
    connection.query(
      "INSERT INTO burgers (burger_name) VALUES (?)",
      [burger],
      function(err, res) {
        if (err) throw err;
        return res;
      }
    );
  },
  updateOne: function(burger) {
    connection.query(
      "UPDATE burgers SET devoured=true WHERE burger_name=?",
      [burger],
      function(err, res) {
        if (err) throw err;
        return res;
      }
    );
  }
};

module.exports = orm;
