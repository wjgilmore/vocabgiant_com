var Reflux = require('reflux');

var request = require('superagent');

var QuizActions = Reflux.createActions({
    'manageScore': {}
});
 
module.exports = QuizActions;