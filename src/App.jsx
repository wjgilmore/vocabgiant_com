var React = require('react');
var Reflux = require('reflux');

var Router = require('react-router');

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var ListActions = require('./actions/ListActions.js');

var ListStore = require('./stores/ListStore.js');

var App = require('./components/App.jsx');

var List = require('./components/List.jsx');

var About = require('./components/About.jsx');


var Home = React.createClass({

	componentDidMount: function() {
		ListActions.loadLists();
	},

	mixins: [Reflux.connect(ListStore)],

    render: function() {

        return (
	        <div>
	        	<List lists={this.state.lists} />
	        </div>
        );
    }

});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="lists" handler={Home}/>
    <Route name="quiz" handler={Home}/>
    <Route name="about" handler={About}/>
    <Route name="item" path="items/:id" handler={Home}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('content'));
});

