import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from "./store/store.js";
import Wrapper from "./components/Wrapper.jsx";
const renderElement = document.querySelector("#app");

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Wrapper />	
			</Provider>
		)
	}
}

render(<App />, renderElement);