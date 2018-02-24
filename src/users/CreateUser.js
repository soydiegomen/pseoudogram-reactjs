import React, { Component } from 'react';

class CreateUser extends Component {

	constructor(props) {
    	super(props);

        this.state = { 
        	name: null,
        	email: null,
        	password: null
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
	    console.log('An essay was submitted: ' + this.state.name);
	    console.log('An essay was submitted: ' + this.state.email);
	    console.log('An essay was submitted: ' + this.state.password);
	    event.preventDefault();
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
	      	</div>

	    );
  	}
}

export default CreateUser;