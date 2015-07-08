var React = require('react');
var Reflux = require('reflux');

var Router = require('react-router');
var Link = Router.Link;

var ListsStore = require('../stores/ListsStore.js');

var List = React.createClass({

	mixins: [Reflux.connect(ListsStore)],

	componentDidMount: function() {
		console.log('ID: ' + this.props.params.id);
		ListActions.loadList(this.props.params.id);
	},

    render: function() {
        return (
          <Link to="list" params={{id: this.props.list._id}}>
	          <li className="list-group-item">
	            <h4 className="list-group-item-heading">{this.props.list.name}</h4>
	            <p className="list-group-item-text">{this.props.list.language}</p>
	          </li>
          </Link>
        );
    }
});

module.exports = List;