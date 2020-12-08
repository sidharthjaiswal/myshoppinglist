const { request } = require('express');
var express = require('express');
var router = express.Router();
const List = require('../model/shoppingList');

//retrieving data from DB
router.get('/lists', (req,res, next)=>{
    List.find(function(err, items){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(items);
        }
    });
});
//inserting new data
router.post('/list', (req,res, next)=>{
    let newShoppingList = new List({
        listName: req.body.listName,
        itemName: req.body.itemName,
        itemQuantity: req.body.itemQuantity,
    });
    newShoppingList.save((err, item)=>{
        if(err)
        {
           console.log( res.json(err));
        }
        else
        {
            res.json({msg: "Item has been added sucessfully"});
        }
    })
});

//updating new data
router.put('/list/:id', (req,res, next)=>{
    List.findOneAndUpdate({_id: req.params.id}, {
        $set:{
            itemName: req.body.itemName,
            itemQuantity: req.body.itemQuantity,
        }
    },
    function(err, result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    })
});

//deleting new data
router.delete('/list/:id', (req,res,next)=>{
    List.remove({_id: req.params.id},
        function(err,result)
        {
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(result);
            }
        });
});
module.exports= router;
