const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    title : String,
    quantity : Number,
    priority : String,
    date : String,
    time : String,
    description : String,
    bookmark : Boolean
})

const itemModel = mongoose.model("item",itemSchema);

module.exports = itemModel;