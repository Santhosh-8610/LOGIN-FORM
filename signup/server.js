const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./route/routes');




app.listen(9992,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});


mongoose.connect("mongodb://localhost:27017/abc",{useNewUrlParser: true,  useUnifiedTopology: true },
function checkDb(error)
{
    if(error)
    {
        console.log("Error Connecting to DB");
    }
    else
    {
        console.log("successfully Connected to DB");
    }
});

app.use(express.json())
app.use(routers);