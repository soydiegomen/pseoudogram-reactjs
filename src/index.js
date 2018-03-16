import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';

//Bootstrp3
import '../node_modules/bootstrap3/dist/css/bootstrap.min.css';
//import App from './App';
import App from './RoutingApp';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyCCFcg7TAt5NBCTQ--IwuGPqnWKBp2qimM",
    authDomain: "curso-reactjs.firebaseapp.com",
    databaseURL: "https://curso-reactjs.firebaseio.com",
    projectId: "curso-reactjs",
    storageBucket: "curso-reactjs.appspot.com",
    messagingSenderId: "28684305066"
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
registerServiceWorker();
