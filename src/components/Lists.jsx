"use strict";

var React = require('react');
var Reflux = require('reflux');

var ListActions = require('../actions/ListActions.js');
var ListsStore = require('../stores/ListsStore');

var SearchBox = require('./Search.jsx');

var Router = require('react-router');
var Link = Router.Link;
 
var Lists = React.createClass({

  mixins: [Reflux.connect(ListsStore)],

  componentDidMount: function() {
    ListActions.loadLists();
  },

  handleUserInput: function(filterTerm) {

    this.setState({
        filterTerm: filterTerm
    });
console.log(this.state.filterTerm);
    ListActions.filterList(this.state.filterTerm);
  },

  render: function() {

    var listItems = this.state.lists.map(function(item){
      
      return <Link key={item._id} to="list" params={{id: item._id}}>
        <li className="list-group-item">
          <h4 className="list-group-item-heading">{item.name}</h4>
          <p className="list-group-item-text">{item.language}</p>
        </li>
      </Link>
    });

    return (
     <div>
     <h1>Your Lists</h1>
     {this.blah}
     <SearchBox 
          filterTerm={this.state.filterTerm} 
          onUserInput={this.handleUserInput} />
          <br />
     <ul className="list-group">
      {listItems}
     </ul>
     </div>
    );

  }

});
 
module.exports = Lists;