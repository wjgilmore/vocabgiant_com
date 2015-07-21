var React = require('react');
var Reflux = require('reflux');

var Router = require('react-router');
var Link = Router.Link;

var ListActions = require('../actions/ListActions');
var QuizActions = require('../actions/QuizActions');

var ListsStore = require('../stores/ListsStore');

var QuizStore = require('../stores/QuizStore');

var QuizItem = require('./QuizItem.jsx');


var lo = require('lodash');

var Quiz = React.createClass({

    mixins: [Reflux.connect(ListsStore), Reflux.connect(QuizStore)],

    componentDidMount: function() {
        ListActions.loadList(this.props.params.id);
    },

    render: function() {

        var terms = this.state.list.terms;

        var termsCount = terms.length;

        var divStyle = {
          textAlign: 'center',
          marginTop: '5%'
        };

        if (this.state.listIndex != this.state.list.terms.length) {
          var quizItem = 
            <QuizItem 
              key={terms[this.state.listIndex].origin} 
              dataId={terms[this.state.listIndex].origin}
              quizQuestion={terms[this.state.listIndex].translation}
              />
        } else {
          var quizItem = <h1>Quiz finished!</h1>
        }

        return (
            <div style={divStyle}>
            <p className="score-leader">
            Your Score: {this.state.score} / {termsCount}
            </p>
            {quizItem}
            </div>
        );

    }
});

module.exports = Quiz;