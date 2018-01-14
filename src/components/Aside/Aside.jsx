import React from "react";

import Brightness from "./Brightness/Brightness.jsx";
import Sepia from "./Sepia/Sepia.jsx";
import HueRotate from "./HueRotate/HueRotate.jsx";

const Aside = props => (
	<aside className='aside'>
		<Brightness />
		<Sepia />
		<HueRotate />
	</aside>
)

export default Aside;