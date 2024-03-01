const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "AdDU2202201425196",
    database: "edp"
})

app.get('/', (re, res)=> {
    return res.json("From Backend Side");
})

app.get('/department', (req, res)=> {
    const sql = "Select * from department";
    db.query(sql, (err, data)=>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=> {
    console.log("listening");
})