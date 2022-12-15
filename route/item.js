const express = require("express");

const itemModel = require("../model/item.model");

const itemroute = express.Router();

itemroute.get("/",async(req,res)=>{
    const data = await itemModel.find();
    res.send(data);
})

itemroute.get("/book",async(req,res)=>{
    const data=await itemModel.find({bookmark : true});
    res.send(data);
})

itemroute.post("/post",async(req,res)=>{
    const {title,quantity,priority,date,time,description,bookmark} = req.body;
    const add =new itemModel({title,quantity,priority,date,time,description,bookmark});
    await add.save();
    res.send("item added");
})

itemroute.delete("/delete/:itemId",async(req,res)=>{
    const itemId = req.params.itemId;
    const del = await itemModel.findByIdAndDelete(itemId);
    res.send("item deleted");
})

itemroute.put("/put/:itemId",async(req,res)=>{
    const itemId = req.params.itemId;
    const newitem = await itemModel.findByIdAndUpdate(itemId,req.body);
    res.send("item updated");
})

module.exports = itemroute;