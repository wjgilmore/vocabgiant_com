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
	      return <Link key={term.translation} to="list" params={{id: term.translation}}>
	        <li className="list-group-item">
	          <h4 className="list-group-item-heading">{term.translation}</h4>
	          <p className="list-group-item-text">{term.origin}</p>
	        </li>
	      </Link>
	    });

	    return (
	     <div>

	     <h1>{this.state.list.name} ({this.state.list.language})</h1>

		<div className="row button-bar">
		<div className="col-sm-10 col-sm-offset-2">
			<div className="btn-group btn-group-justified" role="group" aria-label="...">
			<div className="btn-group" role="group">
			    <a href="" className="btn btn-info" role="button">Review</a>
			    </div>
			    <div className="btn-group" role="group">
			    <a href="" className="btn btn-info" role="button">Quiz</a>
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