var React = require('react');
var Reflux = require('reflux');

var Router = require('react-router');

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var ListActions = require('./actions/ListActions.js');

var ListsStore = require('./stores/ListsStore');

var App = require('./components/App.jsx');

var Lists = require('./components/Lists.jsx');

var List = require('./components/List.jsx');

var About = require('./components/About.jsx');

var Item = require('./components/Item.jsx');

var Home = React.createClass({

	componentDidMount: function() {
		ListActions.loadLists();
	},

	mixins: [Reflux.connect(ListsStore)],

    render: function() {

        return (
	        <div>
	        	<Lists lists={this.state.lists} />
	        </div>
        );
    }

});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="lists" handler={Home}/>
    <Route name="list" path="lists/:id" handler={List}/>
    <Route name="quiz" handler={Home}/>
    <Route name="about" handler={About}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('content'));
});

