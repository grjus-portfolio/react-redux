import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { ApolloClient, 
	ApolloProvider, 
	InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri:   'https://api.spacex.land/graphql/',
	cache: new InMemoryCache()

})


ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ApolloProvider client={client}>
				<Provider store={store}>
					<App />
				</Provider>
			</ApolloProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)


