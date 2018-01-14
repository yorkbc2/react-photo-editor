import React from "react";
import {connect} from "react-redux";
const Sepia = props => (
	<div className="range-container">
		<input
			type="range"
			min="0"
			max="100"
			step="1"
			onChange={(e) => props.change(e.target.value)}
			value={parseInt(props.filter['sepia'])}
			className="range" />
	</div>
)


export default connect(
	state => ({
		filter: state.filter
	}),
	dispatch => ({
		change: val => {
			dispatch({type: "CHANGE_SEPIA", payload: val})
		}
	})
)(Sepia)