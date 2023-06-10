const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

const {connection} = require('./config.js')
const {DataRouter} = require('./controllers/data.routes.js')

const app = express();

app.use(cors())
app.use(express.json())


app.get('/',(req,res)=>{
    try {
        res.send(`<h1>Server Working fine ...</h1>
        <h2>Port No. :- ${process.env.PORT}</h2>`)
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:error.message})
    }
})

app.use('/data',DataRouter)

app.listen(process.env.PORT,async ()=>{
    try {
        await connection
        console.log({msg:"Server Working fine on port "+process.env.PORT+" and DB connected"})
    } catch (error) {
        console.log({msg:"Something Went Wrong"})
        console.log(error)
    }
})