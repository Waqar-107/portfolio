import React from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "../view/Home/Home";

AOS.init();
const BaseLayout = () => (
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/home" component={Home} />
			</Switch>
		</div>
	</Router>
);

export default BaseLayout;
