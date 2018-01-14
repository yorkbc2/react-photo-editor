import React from "react"
import {connect} from "react-redux"

const HueRotate = props => (
	<div className="range-container">
		<label htmlFor="range-hue-rotate">
			hue rotate
		</label>	
		<div className="range-flex">
			<input
				type="range"
				id="range-hue-rotate"
				className="range"
				onChange={(ev) => props.change(ev.target.value)} 
				value={parseInt(props.filter['hue-rotate'])}
				min="-180"
				max="180"
				step="1" />
			<input 
				type="number" 
				step="1" 
				min="0" 
				max="200" 
				value={parseInt(props.filter['hue-rotate'])}
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
			val = val >= 180 ? 180: val <= -181 ? 0 : val;
			dispatch({type: "CHANGE_HUE_ROTATE", payload: val})
		}
	})
)(HueRotate)