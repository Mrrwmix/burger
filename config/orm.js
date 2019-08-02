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
  updateOne: function(id, cb) {
    connection.query(
      "UPDATE burgers SET devoured=true WHERE id=?",
      [id],
      function(err, res) {
        if (err) throw err;
        cb(res);
      }
    );
  },
  delOne: function(id, cb) {
    connection.query("DELETE FROM burgers WHERE id=?", [id], function(
      err,
      res
    ) {
      if (err) throw err;
      cb(res);
    });
  }
};

module.exports = orm;
