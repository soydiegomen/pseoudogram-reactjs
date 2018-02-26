import React, { Component } from 'react';

class UsersList extends Component {

	constructor(props) {
    	super(props);/*
        this.state = { 
        	listUsers: []
        }*/

        this.showUsers = this.showUsers.bind(this);
    }

    componentWillMount() {
		/*fetch('http://localhost:3000/api/users')
		.then((response) => {

			return response.json()
		})
		.then((listUsers) => {
			this.setState( { listUsers: listUsers });
		})*/
	}

	render() {
		

    	return (
    		<div className="App">
	      		<h3 className="user-list-title">Lista de usuarios</h3>	      		
	      		<ul className="user-list">
	      			{this.showUsers(this.props.clickHandle)}
	      		</ul>
	      	</div>
	    );
  	}

  	showUsers(clickHandele) {
  		var users = this.props.listUsers;
  		console.log('userslist', users);
  		if(users){
  			return (
  				<div>
  					{
  						users.map((user) => {
							return (<li><a href="#" onClick={clickHandele} id={user._id}>{user.email}</a></li>);
	      				})	  
	      			}
	      			<h3>Some value!</h3>
				</div>
  			);
  		}
  	}
}

export default UsersList;