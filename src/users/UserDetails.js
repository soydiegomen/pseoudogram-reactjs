import React, { Component } from 'react';

class UserDetails extends Component {

	constructor(props) {
    	super(props);
        this.state = { 
        	user: null
        }
    }

    //Este evento se va a ejecutar cuando se actualicen 
    //los valores de las propiedades
	componentWillReceiveProps(nextProps) {
		console.log('newId', nextProps)
        if (nextProps.id) {
            fetch('http://localhost:3000/api/user/'+ nextProps.id)
			.then((response) => {
				return response.json()
			})
			.then((user) => {
				this.setState( { user: user });
			})
        }
    }

    showDetails(){
    	const user = this.state.user;

    	if(user){
    		return (
    			<table className="user-table">
    				<tbody>
		      			<tr>
		      				<td>
		      					<b>Id:</b>
		      				</td>
		      				<td>
		      					{user._id}
		      				</td>
		      			</tr>
		      			<tr>
		      				<td>
		      					<b>Nombre:</b>
		      				</td>
		      				<td>
		      					{user.name}
		      				</td>
		      			</tr>
		      			<tr>
		      				<td>
		      					<b>Email:</b>
		      				</td>
		      				<td>
		      					{user.email}
		      				</td>
		      			</tr>
	      			</tbody>
	      		</table>
    		);
    	}
    }

	render() {		

    	return (
    		<div className="App">
	      		<h3 className="user-list-title">Usuario: {this.props.id}</h3>	      		
	      		{this.showDetails()}
	      		
	      	</div>
	    );
  	}
}

export default UserDetails;