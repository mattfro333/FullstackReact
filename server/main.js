const express = require('express');

const app = new express();
const parser =require('body-parser');
app.get('/', function(req,res){
    res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname + '/../.tmp'))
.listen(7777)

require('./routes/items.js')(app);
