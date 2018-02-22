import React, { Component } from 'react';

class Houses extends Component {

	constructor(props) {
    	super(props)
        this.state = { 
        	listHouses: [],
        	resultCreateUser: null
        }

        this.getHouses = this.getHouses.bind(this);
        this.handleCreateUser = this.handleCreateUser.bind(this);
        this.handleUpdateUser = this.handleUpdateUser.bind(this);
        this.handleCallError = this.handleCallError.bind(this);
    }

    getHouses() {
		fetch('http://localhost:3000/api/houses/byStatus/Publicado')
		.then((response) => {

			return response.json()
		})
		.then((listHouses) => {
			this.setState( { listHouses: listHouses });
		})
	}

	handleCallError(response) {
		if(response.status != 200){
			throw 'Error on save. Estatus: ' + response.status;
		}

		return response.json()
	}

	handleCreateUser() {
		fetch('http://localhost:3000/api/users', {
		  method: 'POST',
		  headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    name: 'Luis Gomez3',
			email: 'lgomez3@mail.com',
			password: '1234',
			userType: 'User',
			isActive: 'true'
		  }),
		})
		.then(this.handleCallError)
		.then((result) => {
			console.log('Post service result: ', result);
			this.setState( { resultCreateUser: 'Usuario creado satisfactoriamente id:' + 
				result._id });
		})
		.catch((error) => {
	      console.error(error);
	      this.setState( { resultCreateUser: error });
	    });
	}


	handleUpdateUser() {
		fetch('http://localhost:3000/api/user/5a8e47da1b92a6037ae9ad12', {
		  method: 'PUT',
		  headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    name: 'Luis Gomez3',
			email: 'supermailYY@mail.com',
			password: '1234',
			userType: 'User',
			isActive: 'true'
		  }),
		})
		.then(this.handleCallError)
		.then((result) => {
			console.log('Post service result: ', result);
			this.setState( { resultCreateUser: 'Usuario creado satisfactoriamente id:' + 
				result._id });
		})
		.catch((error) => {
	      console.error(error);
	      this.setState( { resultCreateUser: error });
	    });
	}

	componentWillMount() {
		this.getHouses();		
	}

	render() {
		

    	return (
    		<div className="App">
	      		<h1>Houses!</h1>
	      		<div>
	      			<button onClick={this.handleCreateUser}>Crear usuario</button>
	      			<button onClick={this.handleUpdateUser}>Actualizar usuario</button>
	      			<br/>
	      			<b>Result: </b><span>{this.state.resultCreateUser}</span>
	      		</div>
	      		<br/>
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