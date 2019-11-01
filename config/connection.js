let mysql = require('mysql');

let con;

if(process.env.JAWSDB_URL){
  con = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Marlybear6210_", //change
    database: "doggiePlayDate_db"
  })
}

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = con;