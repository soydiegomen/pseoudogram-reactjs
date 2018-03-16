import React, { Component } from 'react';

class Home extends Component {
	render() {
    	return (
    		<div className="App">
	      		<h1>Hellow word!</h1>
						<br/>
						<button type="button" className="btn btn-primary">Primary</button>
						<br/>
						<div  className="alert alert-danger">
						  <span  className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
						  <span  className="sr-only">Error:</span>
						  Bootstrap is working ok.
						</div>
	      	</div>
	    );
  	}
}

export default Home;
