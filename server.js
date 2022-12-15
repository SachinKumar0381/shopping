const express = require("express");
const cors = require("cors");
const itemroute = require("./route/item");
const connection = require("./config/bd");

const app=express();
app.use(cors());
app.use(express.json());


app.use("/",itemroute);

app.listen(process.env.PORT || 8080,async()=>{
    await connection;
    console.log("server started")
})