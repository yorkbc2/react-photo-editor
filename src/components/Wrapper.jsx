import React from "react";
import Aside from "./Aside/Aside.jsx";
import Content from "./Content/Content.jsx";
const Wrapper = props => (
	<div className="wrapper">
		<Aside />
		<Content />
	</div>
)

export default Wrapper;