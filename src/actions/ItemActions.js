var Reflux = require('reflux');

var request = require('superagent');

var ItemActions = Reflux.createActions({
    'loadItem': {children: ['completed','failed']}
});
 
// ListItems.loadItem.listen(function() {
//   var thisAction = this;
//   request.get('/items')
//     .end(function(err, res) {
//       if (err) { return thisAction.failed(err) }
//       thisAction.completed(res);
//     });
// });

module.exports = ListActions;