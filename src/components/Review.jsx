var React = require('react');
var Reflux = require('reflux');
var ReactSwipe = require('react-swipe');

var Router = require('react-router');
var Link = Router.Link;

var ListActions = require('../actions/ListActions');
var ListsStore = require('../stores/ListsStore');

var lo = require('lodash');

var Review = React.createClass({

    mixins: [Reflux.connect(ListsStore)],

    componentDidMount: function() {
        ListActions.loadList(this.props.params.id);
    },

    render: function() {

        var terms = this.state.list.terms;

        var divStyle = {
          textAlign: 'center',
          marginTop: '50%'
        };

        var reviewItems = lo.map(terms, function(term) {

          return <div key={term.origin} className="col-md-12">
              <h1 className="list-group-item-heading">{term.origin}</h1>
              <p className="list-group-item-text">{term.translation}</p>
            </div>

        });

        return (
            <div style={divStyle}>
            <ReactSwipe continuous={false}>
            {reviewItems}
            </ReactSwipe>
            </div>
        );

    }
});

module.exports = Review;