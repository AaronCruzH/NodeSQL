const mysql = require("mysql2")

const pool = mysql.createPool({
    host:'localhost',
    user: "root",
    password: "0922",
    database: "login",
});

pool.getConnection((err, connection)=>{
    if(err)
    throw err;
    console.log(`database connected succesfuly`)
    connection.release();
});

module.exports = pool;