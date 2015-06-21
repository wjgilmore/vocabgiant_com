var React = require('react');

var ListItem = require('./components/List.jsx');

React.render(<ListItem url="http://localhost:3000/vocabulary.json" />, document.getElementById('content'));

