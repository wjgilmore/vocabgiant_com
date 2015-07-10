var React = require('react');
var Reflux = require('reflux');
var ReactSwipe = require('react-swipe');

var Router = require('react-router');
var Link = Router.Link;

var ListActions = require('../actions/ListActions');
var ListsStore = require('../stores/ListsStore');

var lo = require('lodash');

var Quiz = React.createClass({

    mixins: [Reflux.connect(ListsStore)],

    componentDidMount: function() {
        ListActions.loadList(this.props.params.id);
    },

    render: function() {

        var terms = this.state.list.terms;

        var termsCount = terms.length;

        var score = 0;

        var divStyle = {
          textAlign: 'center',
          marginTop: '50%'
        };

        var textInputStyle = {
          border: '0px',
          borderBottom: '2px solid black',
          borderStyle: 'solid',
          margin: '3px'
        };

        var reviewItems = lo.map(terms, function(term) {

          return <div key={term.origin} className="col-md-12">
              <h1 className="list-group-item-heading">{term.translation}</h1>
            </div>

        });

        return (
            <div style={divStyle}>
            <p>
            {score} / {termsCount}
            </p>
            <ReactSwipe continuous={false}>
            {reviewItems}
            </ReactSwipe>
            <input style={textInputStyle} type="text" name="origin" size="1" />
            <input style={textInputStyle} type="text" name="origin" size="1" />

            <input style={textInputStyle} type="text" name="origin" size="1" />
            </div>
        );

    }
});

module.exports = Quiz;