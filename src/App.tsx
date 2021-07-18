import React from 'react'
import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Navbar from './features/navbar/navbar'
import User from './features/user-data/User'
import SpaceX from './features/spacex/spacex'

function App():JSX.Element {
	console.log('I am rendering')
	return (
		<div className="App">
			<Navbar/>
			<header className="container">
				<div className="text-center">
					<img src={logo} className="App-logo" alt="logo" />
				</div>
                
				<Switch>
					<Route path="/counter" component={Counter}/>
					<Route path="/introduction" component={User}/>
					<Route path="/spacex" component={SpaceX}/>
				</Switch>
			
			</header>
		</div>
	)
}

export default App
