var React = require('react');
var Reflux = require('reflux');

var Router = require('react-router');
var Link = Router.Link;
var ListActions = require('../actions/ListActions');

var Item = React.createClass({

  getInitialState: function() {

    return {
      name: ''
    }

  },

  componentDidMount: function () {
    var id = this.props.params.id;

    ListActions.loadList(id);

    this.setState({ 
      name: id 
    });

  },

  render: function() {

    var divStyle = {
      textAlign: 'center'
    };

    return (
      <div style={divStyle} className="col-md-12">
      <h1>{this.state.name}</h1>
      </div>
    );
  }
});

module.exports = Item;