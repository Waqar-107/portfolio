import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Nav from '../Header/NavBar';
import Intro from '../Intro/Intro';
import SocialWeb from '../SocialLinks/socialWeb';
import Footer from '../Footer/Footer';
import About from '../AboutMe/AboutMe';
import Work from '../WorkExp/Work';
import CP from '../CP/cp';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

import styles from './HomeStyle';

function Home(props) {
	const { classes } = props;
	return (
		<div className={classes.mainBody}>
			<div className={classes.nav}><Nav /></div>
			<div className={classes.intro}><Intro /></div>
			<div className={classes.socialWeb}><SocialWeb /></div>
			<div id="aboutMe" className={classes.commonSegment}><About /></div>
			<div id="work" className={classes.commonSegment}><Work /></div>
			<div id="problemSolving" className={classes.commonSegment}><CP /></div>
			<div id="projects" className={classes.commonSegment}><Projects /></div>
			<div id="contactMe" className={classes.commonSegment}><Contact /></div>
			<div className={classes.footer}><Footer /></div>
		</div>
	);
}

Home.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home);