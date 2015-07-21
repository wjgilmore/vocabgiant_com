var React = require('react');
var Reflux = require('reflux');

var QuizActions = require('../actions/QuizActions');

var QuizItem = React.createClass({

    updateScoreAndPosition: function() {

      var quizQuestion = this.refs.quizItem.getDOMNode().getAttribute('data-id');
      var quizAnswer = this.refs.quizAnswer.getDOMNode().value;

      // Determine whether user got answer correct, and move
      // to the next question
      QuizActions.moveAndTally(quizQuestion, quizAnswer);

      // Clear the text field
      this.refs.quizAnswer.getDOMNode().value = "";

    },

  render: function() {

    return (
      <div>
      <div className="col-md-12">
        <h1 ref='quizItem' data-id={this.props.dataId} className='list-group-item-heading'>{this.props.quizQuestion}</h1>
      </div>
      <div className="row">
        <div className="col-xs-6 col-xs-offset-3">
        <input ref="quizAnswer" className="form-control quiz-answer-field" type="text" name="origin" />
        <button type="submit" onClick={this.updateScoreAndPosition} className="btn btn-info">SUBMIT</button>
        </div>
      </div>
    </div>
    );

  }

});

module.exports = QuizItem;