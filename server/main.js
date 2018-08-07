const express = require('express');

const app = new express();

app.get('/', function(req,res){
    res.render('./../app/index.ejs', {});
})
.listen(7777)
