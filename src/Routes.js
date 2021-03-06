import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import News from './News';
const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={News}></Route>

				<Route exact path='/news/:query' component={News}></Route>
			</Switch>
		</>
	);
};

export default Routes;
