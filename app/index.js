import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import {Router, Route, hashHistory} from 'react-router'
import appState from './reducers/appState';

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/AppContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

let rootElement;

const store = createStore(appState);

const renderStore = () => {
	rootElement = document.getElementById('root')

	render(
		<MuiThemeProvider>
		<div className="root">
				<Provider store={store}>
					<Router history={ hashHistory }
							routes={[{path: '/', component: App}]}/>
				</Provider>
			</div>
			</MuiThemeProvider>
		,
		rootElement
	);
}

renderStore();
