import React from "react";
import {connect} from "react-redux"
class Content extends React.Component {
	constructor(props) {
	 	super(props);
		

		this.filterStringCSS = this.filterStringCSS.bind(this);
	}
	filterStringCSS() {
		var stringCSS = "";
		for (var key in this.props.filter) {
			stringCSS += key + "(" + this.props.filter[key] + ")" + " ";
		}
		return stringCSS;
	}
	render() {
		return (
				<div className="content">
						<header>
							<h2>React Photo Editor</h2>
						</header>
					<img src="assets/forest.jpg" 
						alt="" 
						width='720px'
						height="auto"
						style={{
							filter: this.filterStringCSS()
						}}
						/>
				</div>
			)
	}
}

export default connect(
	state => ({
		filter: state.filter
	})
)(Content)