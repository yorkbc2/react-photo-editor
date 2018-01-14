import React from "react";

import Brightness from "./Brightness/Brightness.jsx";
import Sepia from "./Sepia/Sepia.jsx";
import HueRotate from "./HueRotate/HueRotate.jsx";
import Contrast from "./Contrast/Contrast.jsx";
import Grayscale from "./Grayscale/Grayscale.jsx";

const Aside = props => (
	<aside className='aside'>
		<Brightness />
		<Sepia />
		<Contrast />
		<HueRotate />
		<Grayscale />
	</aside>
)

export default Aside;