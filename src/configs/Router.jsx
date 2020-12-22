import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Homepage from "../pages/Homepage/Homepage";
import Login from '../pages/auth/Index';
import Register from "../pages/auth/Register";
import Forgot from "../pages/auth/Forgot";
import Profile from '../pages/Profile/Profile'

const Router = () => {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Homepage} />
			<Route path='/login' component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/forgot" component={Forgot} />
			<Route path='/profile' component={Profile} />
		</BrowserRouter>
	)
}

export default Router