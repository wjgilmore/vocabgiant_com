"use strict";

var React = require('react');
var Reflux = require('reflux');

var Router = require('react-router');

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div className="container">
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">VocabGiant</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-left">

                <li><Link to="lists">Lists</Link></li>
                <li><Link to="about">About</Link></li>

              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/auth/logout">Sign Out</a></li>
              </ul>
            </div>

          </div>

        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <RouteHandler/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = App;