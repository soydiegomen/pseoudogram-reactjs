import React, { Component } from 'react';

class UsersList extends Component {

	constructor(props) {
    	super(props);
        this.showUsers = this.showUsers.bind(this);
    }

	render() {
		

    	return (
    		<div className="App">
	      		<h3 className="user-list-title">Lista de usuarios</h3>	      		
	      		<table className="user-table">
	      			<thead>
	      				<tr>
	      					<td>
	      						Nombre
	      					</td>
	      					<td>
	      						Email
	      					</td>
	      					<td>
	      						Acciones
	      					</td>
	      				</tr>
	      			</thead>
	      			{this.showUsers(this.props.clickHandle, this.props.onDelete)}
	      		</table>
	      	</div>
	    );
  	}

  	showUsers(clickHandele, handleDeleteUser) {
  		var users = this.props.listUsers;
  		console.log('userslist', users);
  		if(users){
  			return (
  				<tbody>
  					{
  						users.map((user) => {
							return (
									<tr>
										<td>
											<span>{user.name}</span>
										</td>
										<td>
											<span>{user.email}</span>
										</td>
										<td>
											<button onClick={clickHandele} id={user._id}>Ver detalles</button>
											<button onClick={handleDeleteUser} id={user._id}>Eliminar</button>
										</td>
									</tr>

							);
	      				})	  
	      			}
				</tbody>
  			);
  		}
  	}
}

export default UsersList;