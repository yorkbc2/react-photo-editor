import React from "react";
import {connect} from "react-redux";
const Brightness = props => (
	<div className="range-container">
		<input 
		onChange={(ev) => props.change(ev.target.value)}
		className="range" 
		type="range"
		min="0"
		max="200"
		step="1"
		value={parseInt(props.filter['brightness'])} />
	</div>
)

export default connect(
	state => ({
		filter: state.filter
	}),
	dispatch => ({
		change: val => {
			dispatch({type: "CHANGE_BRIGHTNESS", payload: val})
		}
	})
)(Brightness)