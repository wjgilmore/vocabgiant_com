var React = require('react');
var Reflux = require('reflux');

var Router = require('react-router');
var Link = Router.Link;

var ListActions = require('../actions/ListActions');
var ListsStore = require('../stores/ListsStore');

var _ = require('lodash');

var List = React.createClass({

	mixins: [Reflux.connect(ListsStore)],

	componentDidMount: function() {
		ListActions.loadList(this.props.params.id);
	},

    render: function() {

    	var terms = this.state.list.terms;

	    var listItems = _.map(terms, function(term) {
	        return <li key={term.origin} className="list-group-item">
	          <h4 className="list-group-item-heading">{term.origin}</h4>
	          <p className="list-group-item-text">{term.translation}</p>
	        </li>
	    });

	    return (
	     <div>

	    <h1>{this.state.list.name} ({this.state.list.language})</h1>

		<div className="row button-bar">
		<div className="col-sm-10 col-sm-offset-2">
			<div className="btn-group btn-group-justified" role="group" aria-label="Review and Quiz">
			<div className="btn-group" role="group">
				<Link className="btn btn-info" role="button" to="list.review" params={{id: this.props.params.id}}>
			    Review
			    </Link>
			    </div>
			    <div className="btn-group" role="group">
				<Link className="btn btn-info" role="button" to="list.quiz" params={{id: this.props.params.id}}>
			    Quiz
			    </Link>
			    </div>
		    </div>
		    </div>
		</div>

	     <ul className="list-group">
	      {listItems}
	     </ul>
	     </div>
	    );

    }
});

module.exports = List;