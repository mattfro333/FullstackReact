var dispatcher = require('./../dispatcher.js');

module.exports = {
    add:function(item){
      console.log(item);
      dispatcher.dispatch({
        payload:item,
        type:"grocery-item:add"

      })
    },
        delete:function(item){
          dispatcher.dispatch({
            payload:item,
            type:"grocery-item:delete"
          })
        }
}
