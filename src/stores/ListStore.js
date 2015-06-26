var Reflux = require('reflux');
var request = require('superagent');
var ListActions = require('../actions/ListActions');
 
var ListStore = Reflux.createStore({

  listenables: [ListActions],

  lists: [],

  data: {lists: []},

  init: function() {
    this.listenTo(ListActions.loadLists.completed, this.onLoadCompleted);
  },

  onLoadCompleted: function(res) {
    this.data.lists = JSON.parse(res.text);
    this.trigger(this.data);
  },

  getInitialState: function() {
    return this.data;
  }

//   fetchLists: function() {
//     $.ajax('http://localhost:3000/vocabulary.json', {}).done( function(data) {
//       this.lists = data.words;
//       this.trigger(this.lists);
//     }.bind(this));
//   }

});
 
module.exports = ListStore;