import React, { Component } from 'react';
import UsersList from './UsersList';
import UserDetails from './UserDetails';
import Createuser from './CreateUser';
import UpdateUser from './UpdateUser';

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
        this.handleDeleteUser = this.handleDeleteUser.bind(this);
        this.handleUpdatedUser = this.handleUpdatedUser.bind(this);
    }

    componentWillMount() {
    	this.getUsers();
    }

	handleSelectUser(e) {
    	console.log('Seleccionado: ' + e.target.id);
    	this.setState( { userId: e.target.id });
    }

    handleDeleteUser(e) {
        console.log('Seleccionado para borrar: ' + e.target.id);
        //fetch('http://localhost:3000/api/user/' + e.target.id)
        fetch('http://localhost:3000/api/user/' + e.target.id, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {

            return;
        })
        .then(() => {
            this.getUsers();
        })
    }

    handleUserCreated() {
    	console.log('Usuario creado!!');
    	this.getUsers();
    }

    handleUpdatedUser() {
        console.log('Usuario actualizado!!');
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
	      			<UsersList listUsers={this.state.listUsers} clickHandle={this.handleSelectUser} onDelete={this.handleDeleteUser}/>
	      		</div>
	      		<div>
	      			<UserDetails id={this.state.userId} />
	      		</div>
	      		<div>
	      			<Createuser userCreatedHandel={this.handleUserCreated} />
	      		</div>
                <div>
                    <UpdateUser id={this.state.userId} onUpdatedUser={this.handleUpdatedUser}/>
                </div>
	      	</div>
	    );
  	}
}

export default Users;