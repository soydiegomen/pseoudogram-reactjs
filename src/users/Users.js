import React, { Component } from 'react';
import UsersList from './UsersList';
import UserDetails from './UserDetails';
import Createuser from './CreateUser';

import './Users.css'; 


class Users extends Component {

	constructor(props) {
    	super(props);

        this.state = { 
        	userId: null,
        	listUsers: []
        }

        this.handleSelectUser = this.handleSelectUser.bind(this);
        this.handleUserCreated = this.handleUserCreated.bind(this);
    }

    componentWillMount() {
    	this.getUsers();
    }

	handleSelectUser(e) {
    	console.log('Seleccionado: ' + e.target.id);
    	this.setState( { userId: e.target.id });
    }

    handleUserCreated() {
    	console.log('Usuario creado!!');
    	this.getUsers();
    }

    getUsers() {
    	fetch('http://localhost:3000/api/users')
		.then((response) => {

			return response.json()
		})
		.then((listUsers) => {
			this.setState( { listUsers: listUsers });
		})
    }

	render() {
		

    	return (
    		<div className="App">
	      		<h1>Users view!</h1>	      		
	      		<div>
	      			<UsersList listUsers={this.state.listUsers} clickHandle={this.handleSelectUser}/>
	      		</div>
	      		<div>
	      			<UserDetails id={this.state.userId} />
	      		</div>
	      		<div>
	      			<Createuser userCreatedHandel={this.handleUserCreated} />
	      		</div>
	      	</div>
	    );
  	}
}

export default Users;