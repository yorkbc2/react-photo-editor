import React from "react"
import {connect} from "react-redux"

const HueRotate = props => (
	<div className="range-container">
		<input
			type="range"
			className="range"
			onChange={(ev) => props.change(ev.target.value)} 
			value={parseInt(props.filter['hue-rotate'])}
			min="-180"
			max="180"
			step="1" />
	</div>
)

export default connect(
	state => ({
		filter: state.filter
	}),
	dispatch => ({
		change: val => {
			dispatch({type: "CHANGE_HUE_ROTATE", payload: val})
		}
	})
)(HueRotate)