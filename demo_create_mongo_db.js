var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect("mongodb://localhost:27017/mydb", function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
