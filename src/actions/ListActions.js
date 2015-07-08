var Reflux = require('reflux');

var request = require('superagent');

var ListActions = Reflux.createActions({
    'loadLists': {children: ['completed','failed']},
    'loadList': {children: ['completed','failed']}
});
 
ListActions.loadLists.listen(function() {
  var thisAction = this;
  console.log('in loadLists');
  request.get('/lists')
    .end(function(err, res) {
      if (err) { return thisAction.failed(err) }
      thisAction.completed(res);
    });
});

ListActions.loadList.listen(function() {
  var thisAction = this;
  console.log('in loadList');
  request.get('/lists/:id')
    .end(function(err, res) {
      if (err) { return thisAction.failed(err) }
      thisAction.completed(res);
    });
});

module.exports = ListActions;