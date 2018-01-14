import React from "react"
import {connect} from "react-redux"

const Grayscale = props => (
	<div className="range-container">
		<label htmlFor="range-grayscale">
			grayscale
		</label>		
		<div className="range-flex">
			<input 
				onChange={(ev) => props.change(ev.target.value)}
				className="range" 
				type="range"
				min="0"
				max="100"
				step="1"
				id="range-grayscale"
				value={parseInt(props.filter['grayscale'])} />
			<input 
				type="number" 
				step="1" 
				min="0" 
				max="100" 
				value={parseInt(props.filter['grayscale'])}
				onChange={(e) => props.change(e.target.value)}
				className="number" />
		</div>	
	</div>
)

export default connect(
	state => ({
		filter :state.filter
	}),
	dispatch => ({
		change: val => {
			val = val >= 100? 100: val <= 0? 0: val;
			dispatch({type: "CHANGE_GRAYSCALE", payload: val});
		}
	})
)(Grayscale)