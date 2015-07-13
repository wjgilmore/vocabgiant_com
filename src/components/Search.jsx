"use strict";

var React = require('react');
var Reflux = require('reflux');

var ListActions = require('../actions/ListActions');

var SearchBox = React.createClass({
    handleChange: function() {
      ListActions.filterList(this.refs.filterTerm.getDOMNode().value);
    },
    render: function() {
      return (
          <form>
            <input 
              type="text"
              className="form-control input-lg"
              id="filter"
              ref="filterTerm" 
              placeholder="Filter by language"
              onChange={this.handleChange}
              value={this.props.filterTerm} />
          </form>
      );
    }
});

module.exports = SearchBox;