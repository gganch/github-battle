var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
<<<<<<< HEAD
var Results = require('./Results');
=======
var Popular = require('./Popular');
var Results = require('./Results');

>>>>>>> eeafc4bfaf12ca1a9af593eed74d6b6e12bc65f1

class App extends React.Component {
  render() {
    return (
		<Router>
			<div className="container">
			  <Nav />
			  <Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/battle' component={Battle} />
<<<<<<< HEAD
        <Route path='/battle/results' component={Results} />
=======
				<Route path='/battle/results' component={Results} />
>>>>>>> eeafc4bfaf12ca1a9af593eed74d6b6e12bc65f1
				<Route path='/popular' component={Popular} />
				<Route render={function () {
					return <p>NOT FOUND</p>
				}} />
			  </Switch>
			</div>
		</Router>
    )
  }
}

module.exports = App;
