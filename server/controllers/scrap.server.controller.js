var mysql = require('mysql');
var gplay = require('google-play-scraper');


export const getData = (req,res) => {
  insertData("ook")
  console.log("started"); return;
  var a = gplay.list({
    category: gplay.category.GAME_ACTION,
    collection: gplay.collection.TOP_FREE,
    num: 10
  })
  .then(
    console.log(console.log)
  );
  
}

export const saveData = (req,res) => {
  console.log(req.body)  
}

export const insertData = (req, res) =>{
  var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'password',
    database: "scrape"
  });

  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
      ['John', 'Highway 71'],
      ['Peter', 'Lowstreet 4'],
      ['Amy', 'Apple st 652'],
      ['Hannah', 'Mountain 21'],
      ['Michael', 'Valley 345'],
      ['Sandy', 'Ocean blvd 2'],
      ['Betty', 'Green Grass 1'],
      ['Richard', 'Sky st 331'],
      ['Susan', 'One way 98'],
      ['Vicky', 'Yellow Garden 2'],
      ['Ben', 'Park Lane 38'],
      ['William', 'Central st 954'],
      ['Chuck', 'Main Road 989'],
      ['Viola', 'Sideway 1633']
    ];
    db.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });
}

export const createDB = () =>{
  db.query("CREATE DATABASE scrape", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  var sql = "CREATE TABLE appdata (name VARCHAR(255), address VARCHAR(255))";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
}