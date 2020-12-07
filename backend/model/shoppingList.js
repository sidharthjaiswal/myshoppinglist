const mongoose = require('mongoose');


const Schema = mongoose.Schema;

//creating new Schema for Shoppinglist
const ShoppingListSchema = new Schema({
    listDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    itemQuantity: {
        type: Number,
        required: true
    },
});

const List = module.exports = mongoose.model('List',ShoppingListSchema); 