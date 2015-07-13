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
          border: '1px',
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
            Your Score: {score} / {termsCount}
            </p>
            <ReactSwipe continuous={false}>
            {reviewItems}
            </ReactSwipe>
            <div className="row">
            <div className="col-xs-6 col-xs-offset-3">
            <input style={textInputStyle} className="form-control" type="text" name="origin" />
            <button type="submit" className="btn btn-info">SUBMIT</button>
            &nbsp;
            <button type="submit" className="btn btn-info">SKIP</button>
            </div>
            </div>
            </div>
        );

    }
});

module.exports = Quiz;