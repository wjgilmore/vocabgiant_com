var React = require('react');

var Router = require('react-router');
var Link = Router.Link;

var ListItem = React.createClass({
    render: function() {
        return (
          <Link to="item" params={{id: this.props.item.origin}}>
	          <li className="list-group-item">
	            <h4 className="list-group-item-heading">{this.props.item.origin}</h4>
	            <p className="list-group-item-text">{this.props.item.translation}</p>
	          </li>
          </Link>
        );
    }
});

module.exports = ListItem;