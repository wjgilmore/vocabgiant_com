var Reflux = require('reflux');

var request = require('superagent');

var ListActions = Reflux.createActions({
    'loadLists': {children: ['completed','failed']},
    'loadList': {children: ['completed','failed']},
    'filterList': {}
});
 
ListActions.loadLists.listen(function() {
  var thisAction = this;
  request.get('/lists')
    .end(function(err, res) {
      if (err) { return thisAction.failed(err) }
      thisAction.completed(res);
    });
});

ListActions.loadList.listen(function(listId) {
  var thisAction = this;
  request.get('/lists/' + listId)
    .end(function(err, res) {
      if (err) { return thisAction.failed(err) }
      thisAction.completed(res);
    });
});

module.exports = ListActions;