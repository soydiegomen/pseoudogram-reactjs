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
        	listUsers: [],
            showAddForm: false
        }

        this.handleSelectUser = this.handleSelectUser.bind(this);
        this.handleUserCreated = this.handleUserCreated.bind(this);
        this.handleDeleteUser = this.handleDeleteUser.bind(this);
        this.handleUpdatedUser = this.handleUpdatedUser.bind(this);
        this.handleShowAddForm = this.handleShowAddForm.bind(this);
        
    }

    componentWillMount() {
    	this.getUsers();
    }

    /*List Users*/
    getUsers() {
        fetch('http://localhost:3000/api/users')
        .then((response) => {

            return response.json()
        })
        .then((listUsers) => {
            this.setState( { listUsers: listUsers });
        })
    }

	handleSelectUser(e) {
    	this.setState( { userId: e.target.id });
    }

    /*Delete User*/
    handleDeleteUser(e) {
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

    /*Update User*/
    handleUpdatedUser() {
        this.getUsers(); 
        this.setState( { userId: null });  
    }

    /*Add User*/
    handleShowAddForm(){
        this.setState({
            showAddForm: !this.state.showAddForm
        });
    }

    renderAddForm() {
        if(this.state.showAddForm){
            return (
                <Createuser userCreatedHandel={this.handleUserCreated} />
            );
        }
    }

    handleUserCreated() {
        this.setState({
            showAddForm: false
        });
        this.getUsers();
    }

    /*Render Control*/
	render() {
		
    	return (
    		<div className="App">
	      		<h1>Users view!</h1>	      		
	      		<div>
	      			<UsersList listUsers={this.state.listUsers} clickHandle={this.handleSelectUser} onDelete={this.handleDeleteUser}/>
	      		</div>
	      		<div>
                    <button onClick={this.handleShowAddForm}>Añadir un usuario</button>
                    { this.renderAddForm() }
	      		</div>
                <div>
                    <UpdateUser id={this.state.userId} onUpdatedUser={this.handleUpdatedUser}/>
                </div>
	      	</div>
	    );
  	}
}

export default Users;