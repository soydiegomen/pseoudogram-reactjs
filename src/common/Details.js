import React, { Component } from 'react';

class Details extends Component {

	constructor ({ match }) {
		super();
		const itemid = match.params.itemid;
		this.state = {
			itemid: itemid
		};
	}

	render() {
    	return (
    		<div className="App">
    			<div>
	      			<h1>Details! {this.state.itemid}</h1>
	      		</div>
	      	</div>
	    );
  	}
}

export default Details;