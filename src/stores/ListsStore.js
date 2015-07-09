var Reflux = require('reflux');
var request = require('superagent');
var ListActions = require('../actions/ListActions');
 
var ListsStore = Reflux.createStore({

  listenables: [ListActions],

  list: [],
  lists: [],

  data: {lists: [], list: []},

  init: function() {
    this.listenTo(ListActions.loadLists.completed, this.onLoadCompleted);
    this.listenTo(ListActions.loadList.completed, this.onListCompleted);
  },

  onLoadCompleted: function(res) {
    console.log('In onLoadCompleted');
    this.data.lists = JSON.parse(res.text);
    this.trigger(this.data);
  },

  onListCompleted: function(res) {
    this.data.list = JSON.parse(res.text);
    this.trigger(this.data);
  }
  ,

  getInitialState: function() {
    return this.data;
  }

});
 
module.exports = ListsStore;