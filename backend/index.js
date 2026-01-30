import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Thilina2002",
    database: "testdb"
});

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});



app.get("/", (req, res) => {
    res.json("Hello this is the backend");
}); // Close the app.get function properly

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
}); 

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover
    ]; 

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Book added successfully");
    });
}); // Close the app.post function properly

app.listen(8800, () => {
    console.log("Connected to backend!");
});