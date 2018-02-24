import React, { Component } from 'react';
import UsersList from './UsersList';
import UserDetails from './UserDetails';
import Createuser from './CreateUser';

import './Users.css'; 


class Users extends Component {

	constructor(props) {
    	super(props);

        this.handleSelectUser = this.handleSelectUser.bind(this);
        this.state = { 
        	userId: null
        }
    }

	handleSelectUser(e) {
    	console.log('Seleccionado: ' + e.target.id);
    	this.setState( { userId: e.target.id });
    }

	render() {
		

    	return (
    		<div className="App">
	      		<h1>Users view!</h1>	      		
	      		<div>
	      			<UsersList clickHandle={this.handleSelectUser}/>
	      		</div>
	      		<div>
	      			<UserDetails id={this.state.userId} />
	      		</div>
	      		<div>
	      			<Createuser />
	      		</div>
	      	</div>
	    );
  	}
}

export default Users;