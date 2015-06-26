var React = require('react');
var Reflux = require('reflux');

var Router = require('react-router');
var Link = Router.Link;

var Item = React.createClass({

  getInitialState: function() {

    return {
      name: ''
    }

  },

  componentDidMount: function () {
    var id = this.props.params.id;
    // fetchMessage(id, function (err, message) {
    //   this.setState({ message: message });
    // })

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

            // <h4 className="list-group-item-heading">{this.props.item.origin}</h4>
            // <p className="list-group-item-text">{this.props.item.translation}</p>