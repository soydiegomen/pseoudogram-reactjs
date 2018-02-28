import React, { Component } from 'react';

class CreateUser extends Component {

	constructor(props) {
    	super(props);

        this.state = { 
        	name: null,
        	email: null,
        	password: null,
        	resultCreateUser: null
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

	handleInputChange(event) {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
	}

	handleSubmit(event) {

	    var user = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			userType: 'User',
			isActive: 'true'
		};

		this.saveUser(user);

	    event.preventDefault();
  	}

  	saveUser(user){
  		fetch('http://localhost:3000/api/users', {
		  method: 'POST',
		  headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(user),
		})
		.then(this.handleCallError)
		.then((result) => {
			this.setState( { 
				resultCreateUser: 'Usuario creado satisfactoriamente id:' + 
				result._id });
			this.props.userCreatedHandel();
		})
		.catch((error) => {
	      console.error(error);
	      this.setState( { resultCreateUser: error });
	    });
  	}	

	render() {
    	return (
    		<div>
	      		<h3 className="user-list-title">Añadir un usuario</h3>	      		
	      		<form onSubmit={this.handleSubmit}>
	      			<table>
	      				<tbody>
	      					<tr>
	      						<td>
	      							<b>Nombre:</b>
	      						</td>
	      						<td>
	      							<input name="name" type="text" onChange={this.handleInputChange} />
	      						</td>
	      					</tr>
	      					<tr>
	      						<td>
	      							<b>Email:</b>
	      						</td>
	      						<td>
	      							<input name="email" type="text" onChange={this.handleInputChange} />
	      						</td>
	      					</tr>
	      					<tr>
	      						<td>
	      							<b>Password:</b>
	      						</td>
	      						<td>
	      							<input name="password" type="text" onChange={this.handleInputChange} />
	      						</td>
	      					</tr>
	      					<tr>
	      						<td>
	      						</td>
	      						<td>
	      							<input type="submit" value="Guardar" />
	      						</td>
	      					</tr>
	      				</tbody>
	      			</table>
	      		</form>
	      		<br/>
	      		<span>{this.state.resultCreateUser}</span>
	      	</div>

	    );
  	}

  	/*Utilities*/
  	handleCallError(response) {
		if(response.status != 200){
			throw 'Error on save. Estatus: ' + response.status;
		}

		return response.json()
	}
}

export default CreateUser;