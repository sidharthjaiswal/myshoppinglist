//Requiring Mongoose
const mongoose = require('mongoose');

//Create variables to store our schemas 
const Schema = mongoose.Schema;

//Create Shoppingitem schema 
const ShoppingItemSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    itemQuantity: {
        type: Number,
        required: true
    },
});

const Item = module.exports = mongoose.Schema(ShoppingItemSchema);