var React = require('react');
var Reflux = require('reflux');

var Router = require('react-router');
var Link = Router.Link;

var ListActions = require('../actions/ListActions');
var ListsStore = require('../stores/ListsStore');

var _ = require('lodash');

var Quiz = React.createClass({

	mixins: [Reflux.connect(ListsStore)],

	componentDidMount: function() {
		ListActions.loadList(this.props.params.id);
	},

    render: function() {

	    return (
	     <p>
	     Quiz
	     </p>	     
	    );

    }
});

module.exports = Quiz;