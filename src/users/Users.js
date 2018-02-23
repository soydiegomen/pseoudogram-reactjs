import React, { Component } from 'react';
import UsersList from './UsersList';


class Users extends Component {

	constructor(props) {
    	super(props);

        this.handleSelectUser = this.handleSelectUser.bind(this);
    }

	handleSelectUser(e) {
    	console.log('Seleccionado: ' + e.target.id);
    }

	render() {
		

    	return (
    		<div className="App">
	      		<h1>Users view!</h1>	      		
	      		<div>
	      			<UsersList clickHandle={this.handleSelectUser}/>
	      		</div>
	      	</div>
	    );
  	}
}

export default Users;