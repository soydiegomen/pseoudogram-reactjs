import React, { Component } from 'react';

class Houses extends Component {

	constructor(props) {
    	super(props)
        this.state = { listHouses: [] }
    }

	componentWillMount() {
		fetch('http://localhost:3000/api/houses/byStatus/Publicado')
		.then((response) => {

			return response.json()
		})
		.then((listHouses) => {
			this.setState( { listHouses: listHouses });
		})
	}
	render() {
		

    	return (
    		<div className="App">
	      		<h1>Houses!</h1>
	      		<ul>
	      			{this.state.listHouses.map((house) => {
						return (<li><b>{house.title}</b><span> - {house.propertyType}</span></li>);
	      			}
					)}
	      		</ul>
	      	</div>
	    );
  	}
}

export default Houses;