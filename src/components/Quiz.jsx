var React = require('react');
var Reflux = require('reflux');
var ReactSwipe = require('react-swipe');

var Router = require('react-router');
var Link = Router.Link;

var ListActions = require('../actions/ListActions');
var QuizActions = require('../actions/QuizActions');

var ListsStore = require('../stores/ListsStore');

var QuizStore = require('../stores/QuizStore');

var lo = require('lodash');

var Quiz = React.createClass({

    mixins: [Reflux.connect(ListsStore), Reflux.connect(QuizStore)],

    componentDidMount: function() {
        ListActions.loadList(this.props.params.id);
    },

    updateScoreAndPosition: function() {

      var quizItem = this.refs.quizItem.getDOMNode().getAttribute('data-id');
      var quizAnswer = this.refs.quizAnswer.getDOMNode().value;

      QuizActions.moveAndTally(quizItem, quizAnswer);

      //this.refs.quizSwipe.swipe.next();

    },

    render: function() {

        var terms = this.state.list.terms;

        var termsCount = terms.length;

        var divStyle = {
          textAlign: 'center',
          marginTop: '50%'
        };

        var textInputStyle = {
          border: '1px',
          borderStyle: 'solid',
          margin: '3px'
        };

        if (this.state.listIndex != this.state.list.terms.length) {
        var quizItem = 
        <div key={terms[this.state.listIndex].origin} className="col-md-12">
          <h1 ref='quizItem' data-id={terms[this.state.listIndex].origin} className='list-group-item-heading'>{terms[this.state.listIndex].translation}</h1>
        </div>
      } else {
        var quizItem = <h1>Quiz finished!</h1>
      }

        return (
            <div style={divStyle}>
            <p>
            Your Score: {this.state.score} / {termsCount}
            </p>
            {quizItem}
            <div className="row">
            <div className="col-xs-6 col-xs-offset-3">
            <input ref="quizAnswer" style={textInputStyle} className="form-control" type="text" name="origin" />
            <button type="submit" onClick={this.updateScoreAndPosition} className="btn btn-info">SUBMIT</button>
            </div>
            </div>
            </div>
        );

    }
});

module.exports = Quiz;