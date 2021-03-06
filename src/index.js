import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header
				title='Pertinent Times'
				navItems={[
					'Home',
					'World',
					'Politics',
					'Magazine',
					'Technology',
					'Science',
					'Health',
					'Sports',
					'Arts',
					'Fashion',
					'Food',
					'Travel',
				]}
			/>
			<Routes />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
