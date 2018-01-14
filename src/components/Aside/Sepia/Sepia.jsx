import React from "react";
import {connect} from "react-redux";
const Sepia = props => (
	<div className="range-container">
		<label htmlFor="range-sepia">
			Sepia
		</label>
		<div className="range-flex">
			<input
			type="range"
			id="range-sepia"
			min="0"
			max="100"
			step="1"
			onChange={(e) => props.change(e.target.value)}
			value={parseInt(props.filter['sepia'])}
			className="range" />
			<input 
				type="number" 
				step="1" 
				min="0" 
				max="100" 
				value={parseInt(props.filter['sepia'])}
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
			val = val >= 100 ? 100: val <= 0 ? 0 : val;
			dispatch({type: "CHANGE_SEPIA", payload: val})
		}
	})
)(Sepia)