"use strict";

var React = require('react');
var Reflux = require('reflux');
 
var About = React.createClass({

  render: function() {

    return (
      <div>
      <h1>About VocabGiant</h1>
      <p>
      VocabGiant is a vocabulary trainer created by <a href="http://www.wjgilmore.com">W. Jason Gilmore</a> to demonstrate
      the concepts discussed in his new book, <a href="http://easyreactbook.com">Easy React: Build
      Powerful Web Apps Using Modern JavaScript Technologies</a>.
      </p>
      </div>
    );

  }

});
 
module.exports = About;