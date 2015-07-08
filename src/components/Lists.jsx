"use strict";

var React = require('react');
var Reflux = require('reflux');
var ListStore = require('../stores/ListStore');

var Router = require('react-router');
var Link = Router.Link;
 
var Lists = React.createClass({

  render: function() {

    var listItems = this.props.lists.map(function(item){
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
     <ul className="list-group">
      {listItems}
     </ul>
     </div>
    );

  }

});
 
module.exports = Lists;