import React, { Component } from 'react';

class UpdateUser extends Component {

	constructor(props) {
    	super(props);

        this.state = { 
        	user: null,
        	resultCreateUser: null
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.id) {
            fetch('http://localhost:3000/api/user/'+ nextProps.id)
			.then((response) => {
				return response.json()
			})
			.then((user) => {
				this.setState( { user: user });
			})
        }else {
        	this.setState( { user: null });
        }
    }

	handleInputChange(event) {
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;

	    if(this.state.user){
	    	var user = this.state.user;
	    	user[name] = value;
	    	this.setState( { user: user });
		}
	}

	handleSubmit(event) {
	    event.preventDefault();

	    const user = this.state.user;

  		fetch('http://localhost:3000/api/user/' + user._id, {
		  method: 'PUT',
		  headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(user),
		})
		.then(this.handleCallError)
		.then((result) => {
			
			this.setState( { 
				resultCreateUser: 'Usuario actualizado satisfactoriamente id:' + 
				result._id });
			this.props.onUpdatedUser();
		})
		.catch((error) => {
	      console.error(error);
	      this.setState( { resultCreateUser: error });
	    });
  	}

	render() {
		if(this.state.user){

	    	return (
	    		<div>
		      		<h3 className="user-list-title">Actualizar usuario</h3>	      		
		      		{ this.renderUserForm() }
		      		<br/>
		      		<span>{this.state.resultCreateUser}</span>
		      	</div>

		    );
	    }else {
	    	return (
	    		<span>No hay algún usuario seleccionado para edición</span>
	    	);
	    }

  	}

  	renderUserForm () {
  		if(this.state.user){
  			return(
  				<form onSubmit={this.handleSubmit}>
	      			<table>
	      				<tbody>
	      					<tr>
	      						<td>
	      							<b>Nombre:</b>
	      						</td>
	      						<td>
	      							<input name="name" type="text" onChange={this.handleInputChange} value={this.state.user.name}/>
	      						</td>
	      					</tr>
	      					<tr>
	      						<td>
	      							<b>Email:</b>
	      						</td>
	      						<td>
	      							<input name="email" type="text" onChange={this.handleInputChange} value={this.state.user.email}/>
	      						</td>
	      					</tr>
	      					<tr>
	      						<td>
	      							<b>Password:</b>
	      						</td>
	      						<td>
	      							<input name="password" type="text" onChange={this.handleInputChange} value={this.state.user.password}/>
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

  			);
  		}
  	}

  	/*Utilities*/
  	handleCallError(response) {
		if(response.status != 200){
			throw 'Error on save. Estatus: ' + response.status;
		}

		return response.json()
	}
}

export default UpdateUser;