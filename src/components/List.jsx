"use strict";

var React = require('react');
var Reflux = require('reflux');
var ListStore = require('../stores/ListStore');

var ListItem = require('./ListItem.jsx')
 
var ListItems = React.createClass({

  render: function() {

    var listItems = this.props.lists.map(function(item){
      return <ListItem item={item} />;
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
 
module.exports = ListItems;