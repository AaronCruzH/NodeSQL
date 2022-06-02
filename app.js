const express = require("express")
const conexion = require("./mysql-config")
const app = express()

app.use(express.json())

const port = 3000

app.get("/",(req,res)=>{
   res.send("Hola Mundo")
})
app.get("/hola",(req,res)=>{
    res.send("Hola Mundo desde /hola")
 })

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})

app.get("/usuarios",(req,res)=>{
    const sql = "SELECT * FROM usuario"
    conexion.query(sql,(error,results,fields)=>{
        if(error)
        res.send(error)
        res.json(results)
    })
})

app.post("/persona",(req,res)=>{
    const sql = `insert into persona (nombre,paterno,materno,nacimiento) values(?,?,?,?)`
    conexion.query(sql,[req.body.nombre,
                        req.body.paterno,
                        req.body.materno,
                        req.body.nacimiento],(error,results,fields)=>{
                            if(error)
                            res.send(error)
                            res.json(results)
                        })
})