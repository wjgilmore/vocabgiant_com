var React = require('react'),
    ListItem = require('./ListItem.jsx');

var ListItems = React.createClass({
    render: function() {

var words = [
    {
    "origin": "accogliere",
    "translation": "to welcome"
    },
    {
    "origin": "affrettarsi",
    "translation": "to hurry"
    },
    {
    "origin": "ammettere",
    "translation": "to admit"
    }
    ];

	    var listItems = words.map(function(item){
	      return <ListItem item={item} />;
	    });

      return (
       <ul className="list-group">
       {listItems}
       </ul>
      );
    }
});

var SearchBox = React.createClass({
    handleChange: function() {
      this.props.onUserInput(
          this.refs.filterTerms.getDOMNode().value
      );
    },
    render: function() {
      return (
          <form>
            <label>Filter List</label>
            <input 
              type="text"
              id="filter"
              ref="filterTerms" 
              placeholder="Find term"
              className="form-control"
              onChange={this.handleChange}
              value={this.props.filterTerm} />
          </form>
      );
    }
});

var ListUI = React.createClass({

  getInitialState: function() {
    return {
        filterTerm: '',
    };
  },
  handleUserInput: function(filterTerm) {
      this.setState({
          filterTerm: filterTerm
      });
  },
  render: function(){
    return (
      <div>
        <SearchBox 
          filterTerm={this.state.filterTerm} 
          onUserInput={this.handleUserInput} />
        <ListItems
          filterChore={this.state.filterTerm} 
          chores={this.props.chores} />
      </div>
    )
  }

});

var Home = React.createClass({

  getInitialState: function(){
    return {
      vocabulary: [],
      filterTerm: ''
    }
  },

  handleUserInput: function(filterTerm) {
      this.setState({
          filterTerm: filterTerm
      });
  },

  componentDidMount: function() {
    $.get(this.props.url, function(result) {
      var words = result.words;
      if (this.isMounted()) {
        this.setState({
          vocabulary: words
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
      	<br />
        <SearchBox 
          filterTerm={this.state.filterTerm} 
          onUserInput={this.handleUserInput} />
          <br />
        <ListItems 
        	items={this.state.vocabulary}
			filterTerm={this.state.filterTerm}
        />
      </div>
    );
  }
});



//React.render(<Home url="http://localhost:3000/vocabulary.json" />, document.body);



module.exports = Home;