import React from "react";
import {connect} from "react-redux";
const Brightness = props => (
	<div className="range-container">
		<label htmlFor="range-brightness">
			brightness
		</label>		
		<div className="range-flex">
			<input 
				onChange={(ev) => props.change(ev.target.value)}
				className="range" 
				type="range"
				min="0"
				max="200"
				step="1"
				id="range-brightness"
				value={parseInt(props.filter['brightness'])} />
			<input 
				type="number" 
				step="1" 
				min="0" 
				max="200" 
				value={parseInt(props.filter['brightness'])}
				onChange={(e) => props.change(e.target.value)}
				className="number" />
		</div>	
	</div>
)

export default connect(
	state => ({
		filter: state.filter
	}),
	dispatch => ({
		change: val => {
			val = val >= 200 ? 200: val <= 0 ? 0 : val;
			dispatch({type: "CHANGE_BRIGHTNESS", payload: val})
		}
	})
)(Brightness)