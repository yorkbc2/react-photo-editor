import React from "react";
import {connect} from "react-redux";
const Brightness = props => (
	<div className="range-container">
		<input 
		onChange={() => ({})}
		className="range" 
		value={props.filter["brightness"]} />
	</div>
)

export default connect(
	state => ({
		filter: state.filter
	})
)(Brightness)