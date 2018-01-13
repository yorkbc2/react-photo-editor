import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from "./store/store.js";
const renderElement = document.querySelector("#app");

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div className="wrapper">
					Hello world!
				</div>		
			</Provider>
		)
	}
}

render(<App />, renderElement);