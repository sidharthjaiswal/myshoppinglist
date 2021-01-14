var express = require('express');
var router = express.Router();
const List = require('../model/shoppingList');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// retrieving data from DB
router.get('/lists', (req, res, next) => {
    List.find(function(err, items) {
        if (err) {
            res.json(err);
        } else {
            res.json(items);
        }
    });
});
// inserting new data
router.post('/list', (req, res, next) => {
    let newShoppingList = new List({ listName: req.body.listName, itemName: req.body.itemName, itemQuantity: req.body.itemQuantity });
    newShoppingList.save((err, item) => {
        if (err) {
            console.log(res.json(err));
        } else {
            res.json({ msg: "Item has been added sucessfully" });
        }
    })
});
// find function
router.get('/searchlist/:listName', (req, res, next) => {
    List.find({
        listName: req.params.listName
    }, function(err, items) {
        if (err) {
            res.json(err);
        } else {
            res.json(items);
        }
    });
});

// updating new data
router.put('/list/:id', (req, res, next) => {
    List.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: {
            listName: req.body.listName,
            itemName: req.body.itemName,
            itemQuantity: req.body.itemQuantity
        }
    }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

// deleting new data
router.delete('/list/:id', (req, res, next) => {
    List.remove({
        _id: req.params.id
    }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});


//User controller
router.post('/login', (req, res, next) => {
    var username = req.body.username
    var password = req.body.password
    User.findOne({ username: username })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function(err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                    if (result) {
                        let token = jwt.sign({ name: user.name }, 'verySecretValue', { expiresIn: '1h' })
                        res.json({
                            message: 'Login Successful',
                            token
                        })
                    } else {
                        res.json({
                            message: 'Password does not match'
                        })
                    }
                })
            } else {
                res.json({
                    message: 'No User found'
                })
            };
        });
});

router.post('/register', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }
    })

    let user = new User({
        username: req.body.username,
        password: req.body.password
    })
    user.save()
        .then(user => {
            res.json({
                message: 'User added successfully'
            })
        })
        .catch(error => {
            res.json({
                message: error
            })
        })
});

router.get('/users', (req, res, next) => {
    User.find(function(err, users) {
        if (err) {
            res.json(err);
        } else {
            res.json(users);
        }
    });
});
module.exports = router;