import React from "react";

import SocialWeb from "../../components/SocialLinks/socialWeb";
import NavBar from "../../components/Header/NavBar";
import Intro from "./Intro/Intro";
import About from "./AboutMe/AboutMe";
import Footer from "../../components/Footer/Footer";

import styles from "./HomeStyles";
import AboutMe from "./AboutMe/AboutMe";

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
				<div className={classes.itemContainer}>
					<Intro />
				</div>
				<div className={classes.itemContainer}>
					<About />
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
