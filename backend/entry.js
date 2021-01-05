//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();
const route = require('./route/routes');
var path = require('path');
//Connect to MOngoDB
mongoose.connect('mongodb+srv://sidharth:Sidh221101@myshoppinglist.wetfe.mongodb.net/test',{});

//on connection

mongoose.connection.on('connected', ()=>{
    console.log('MongoDB connected at port 27017');
});

//connection error

mongoose.connection.on('error', (err)=>{
    console.log(err);
});


const PORT = process.env.PORT || 80;

//adding middleWare = cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

app.use('/api', route);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('/',(req,res)=>{
    res.send('foobar');
});
app.listen(PORT, ()=>{
    console.log('Server has been started at Port: +',PORT);
})