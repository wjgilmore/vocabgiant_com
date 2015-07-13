var Reflux = require('reflux');
var request = require('superagent');
var ListActions = require('../actions/ListActions');
 
var lo = require('lodash');

var lists = [];

var data = {
  filterTerm: '',
  list: [],
  lists: []
};

var ListsStore = Reflux.createStore({

  init: function() {
    this.listenTo(ListActions.loadLists.completed, this.onLoadCompleted);
    this.listenTo(ListActions.loadList.completed, this.onListCompleted);
    this.listenTo(ListActions.filterList, this.onFilterList);
  },

  onFilterList: function(filterTerm) {

    var filteredList = [];

    var filteredList = lo.filter(lists, function(item) {  

      if (item.language.indexOf(filterTerm) != -1) {
        return item;
      }

    });

    data.filterTerm = filterTerm;
    data.lists = filteredList;
    this.trigger(data);

  },

  onLoadCompleted: function(res) {
    data.lists = JSON.parse(res.text);
    lists = data.lists;
    this.trigger(data);
  },

  onListCompleted: function(res) {
    data.list = JSON.parse(res.text);
    this.trigger(data);
  }
  ,

  getInitialState: function() {
    return data;
  }

});
 
module.exports = ListsStore;