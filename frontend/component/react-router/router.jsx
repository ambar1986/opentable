import React from 'react';

import {
 App,
 store,
 Home,
 OpenTableContainer,
 SignupContainer,
 restaurantContainer,
 confirmationContainer,
 dispatchOpentableInfo,
 LoginContainer,
 userAuth,
 appContainer,
 displayRestaurantContainer
} from '../index';

import {
	Router,
	Route,
	IndexRoute,
	browserHistory
} from 'react-router';

const enterApp = ()=>{
	store.dispatch(userAuth.userAuth());
}

const Routes = (props) => (
	<Router history={browserHistory}>
		<Route path='/' component={appContainer} onEnter={enterApp}>
		<IndexRoute component={restaurantContainer} />
			<Route path='/signup' component={SignupContainer} />
			<Router path='login' component={LoginContainer} />
			<Route path='/opentable/:RestaurantId' component={OpenTableContainer}/>
			<Route path='/confirmation/:opentable' component={confirmationContainer} onEnter={dispatchOpentableInfo}/>
		</Route>
	</Router>
);

export default Routes;
