const express = require('express');

const app = new express();
const parser = require('body-parser');
const React = require('react/addons');
var GroceryItem = require('./models/GroceryItem.js');
require('./database.js');
app.get('/', function(req,res){
    // res.render('./../app/index.ejs', {});
var application = React.createfactory(require('./../app/components/GroceryItemList.jsx'))

      GroceryItem.find(function(error,doc){
          var generated = React.renderToString(application({
            items:doc
          }))
          res.redner('./../app/index.ejs', {reactOutput:generated});
      })

})
.use(express.static(__dirname + '/../.tmp'))
.listen(7777)

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/items.js')(app);
