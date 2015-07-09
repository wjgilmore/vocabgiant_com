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
          height: '100%',
          paddingTop: '10%'
        };

        var reviewItems = lo.map(terms, function(term) {

          return <div key={term.origin} style={divStyle} className="col-md-12">
              <h1 className="list-group-item-heading">{term.origin}</h1>
              <p className="list-group-item-text">{term.translation}</p>
            </div>

        });

        return (
            <ReactSwipe continuous={false}>
            {reviewItems}
            </ReactSwipe>
        );

    }
});

module.exports = Review;