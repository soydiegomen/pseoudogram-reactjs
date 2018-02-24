import React, { Component } from 'react';

class UsersList extends Component {

	constructor(props) {
    	super(props);
        this.state = { 
        	listUsers: []
        }
    }

    componentWillMount() {
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
	      		<h3 className="user-list-title">Lista de usuarios</h3>	      		
	      		<ul className="user-list">
	      			{this.state.listUsers.map((user) => {
						return (<li><a href="#" onClick={this.props.clickHandle} id={user._id}>{user.email}</a></li>);
	      			}
					)}
	      		</ul>
	      	</div>
	    );
  	}
}

export default UsersList;