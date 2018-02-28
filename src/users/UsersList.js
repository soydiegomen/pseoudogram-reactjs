import React, { Component } from 'react';

class UsersList extends Component {

	constructor(props) {
    	super(props);

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
	      			{ this.renderUsers() }
	      		</table>
	      	</div>
	    );
  	}

  	renderUsers() {
  		var users = this.props.listUsers;
  		
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
											<button onClick={this.props.clickHandle} 
												id={user._id}>Modificar</button>
											<button onClick={this.props.onDelete} 
												id={user._id}>Eliminar</button>
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