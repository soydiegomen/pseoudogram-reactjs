import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Items extends Component {


	render() {
		const itemsList = ['one','two','three','four'];
		const htmlList = itemsList.map((item) => {
			
			return (
				<li key={item}>
					<Link to={'/details/'+item}>
	      				<span>{item}</span>
	      			</Link>
				</li>
			);
		});
    	return (
    		<div className="App">
    			<div>
	      			<h1>Items!</h1>
	      			<ul>
	      				{htmlList}
	      			</ul>
	      		</div>
	      	</div>
	    );
  	}
}

export default Items;