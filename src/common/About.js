import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class About extends Component {

	render() {

    	return (
    		<div className="App">
    			<div>
	      			<h1>About</h1>
	      			<Link to="/details/9">
	      				Ver información
	      			</Link>
	      		</div>
	      	</div>
	    );
  	}
}

export default About;