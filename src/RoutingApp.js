import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import About from './common/About';
import Home from './common/Home';
import Items from './common/Items';
import Details from './common/Details';
import Pseudogram from './App';




class App extends Component {
	render() {
    	return (
      		<Router >
      			<div>
      				<Route exact path="/" component={Home} />
      				<Route path="/about" component={About} />
              <Route path="/items" component={Items} />
              <Route path="/details/:itemid" component={Details} />
              <Route path="/pseudogram" component={Pseudogram} />
      			</div>
      		</Router>
	    );
  	}
}

export default App;