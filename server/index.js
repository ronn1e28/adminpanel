const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "sys",
});

app.post("/register", (req, res) => {
  const fname = req.body.FirstName;
  const lname = req.body.LastName;
  const gender = "NA";
  const email = req.body.Email;
  const number = req.body.PhoneNumber;
  const password = req.body.Password;
  const instname = req.body.InstituteName;
  const marks = req.body.Marks;
  const stream = req.body.Stream;
  const startdate = req.body.StartDate;
  const enddate = req.body.EndDate;

  db.query(
    "INSERT INTO userdata (fname, lname, gender,  email, phoneno, password, instname, marks, stream, startdate, enddate) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
    [
      fname,
      lname,
      gender,
      email,
      number,
      password,
      instname,
      marks,
      stream,
      startdate,
      enddate,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/login", (req, res) => {

  const email = req.body.email;
  const password = req.body.password;
  db.query("SELECT * FROM userdata where email = ? AND password = ?", [email,password], (err, result) => {
    if (err) {
      res.send({ err: Error });
    }

    if (result) {
      res.send(result);
    } 
  });
});

app.get("/userdetails", (req, res) => {
  db.query("SELECT fname, lname, gender, email, phoneno FROM userdata", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/usereducation", (req, res) => {
  db.query("SELECT fname, lname, instname, marks, stream, startdate, enddate FROM userdata", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.listen(3001, () => {
  console.log("Server Running on port 3001");
});
