import React from "react";

import SocialWeb from "../../components/SocialLinks/socialWeb";
import NavBar from "../../components/Header/NavBar";
import Intro from "./Intro/Intro";
import Footer from "../../components/Footer/Footer";

import styles from "./HomeStyles";

const Home = () => {
	const classes = styles();
	return (
		<div className={classes.root}>
			<div className={classes.navContainer}>
				<NavBar />
			</div>
			<div className={classes.content}>
				<div className={classes.socialWeb}>
					<SocialWeb />
				</div>
				<div style={{height: "10vh"}}></div>
				<Intro />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
