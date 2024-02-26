const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3307,
  user: process.env.DB_USER || "sergio",
  password: process.env.DB_PASS || "12345",
  database: process.env.DB_NAME || "db",
});

db.connect((err) => {
  if (err) throw err;

  console.log("Connect to database MySQL");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello world, Hola mundo");
});

app.get("/create-table", (req, res) => {
  const sql =
    "create table customers (id INT AUTO_INCREMENT, name VARCHAR(200), email VARCHAR(200), PRIMARY KEY (id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Table customers created");
  });
});

app.post("/insert", (req, res) => {
  const { name, email } = req.body;
  const sql = `insert into customers set ?`;
  db.query(sql, { name, email }, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Customer inserted");
  });
});

app.get("/select", (req, res) => {
  const sql = "select * from customers";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.listen(port, () => console.log("Server is running on port " + port));
