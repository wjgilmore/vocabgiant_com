var Reflux = require('reflux');

var QuizActions = require('../actions/QuizActions');
 
var lo = require('lodash');

var data = {
  listIndex: 0,
  score: 0
};

var QuizStore = Reflux.createStore({

  init: function() {
    this.listenTo(QuizActions.moveAndTally, this.onMoveAndTally);
  },

  onMoveAndTally: function(quizItem, quizAnswer) {

    data.listIndex++;

    if (quizItem == quizAnswer) {
      data.score++;
    }
    
    this.trigger(data);

  },

  getInitialState: function() {
    return data;
  }

});
 
module.exports = QuizStore;