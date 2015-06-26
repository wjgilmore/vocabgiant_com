var Reflux = require('reflux');

var request = require('superagent');

var ListActions = Reflux.createActions({
    'loadLists': {children: ['completed','failed']}
});
 
ListActions.loadLists.listen(function() {
  var thisAction = this;
  request.get('/vocabulary.json')
    .end(function(err, res) {
      if (err) { return thisAction.failed(err) }
      thisAction.completed(res);
    });
});

module.exports = ListActions;