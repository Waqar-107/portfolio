import React from "react";
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";

import SocialWeb from "../../components/SocialLinks/socialWeb";
import styles from "./HomeStyles";
import NavBar from "../../components/Header/NavBar";

function Home(props) {
	const classes = styles();
	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<NavBar />
			</div>
			<div className={classes.content}></div>
			{/* <div className={classes.socialWeb}>
				<SocialWeb />
			</div>
			<div className={classes.footer}>
				<Footer />
			</div> */}
		</div>
	);
}

Home.propTypes = {};

export default Home;
