const mysql = require("mysql");
const express = require("express");

const app = express();
app.use("/index.css", express.static("index.css"));
const connection = mysql.createConnection( {
    host: "localhost", 
    user: "root",
    password: "password",
    database: "nodejs"
});

// connect to the database
connection.connect(function(error){
    if(error) throw error;
    else console.log("connected to the database successfully!");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/login.html");
});

app.post("/", function(req, res){
    connection.query("select * from loginUser")
});
app.listen(4500);

module.exports = connection;