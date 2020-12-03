const mongoose = require('mongoose');

//importing Schema of ShoppingItem from shoppingitem.js
const Item = require('./shoppingItem');

const Schema = mongoose.Schema;

//creating new Schema for Shoppinglist
const ShoppingListSchema = new Schema({
    listDate: {
        type: Date,
        required: true
    },
    items: Item
});

const List = module.exports = mongoose.model('List',ShoppingListSchema); 