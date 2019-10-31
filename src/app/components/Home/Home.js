import React, { Component } from 'react';
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

import styles from './HomeStyle';

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.mainBody}>
              <div className={classes.nav}><Nav /></div>
              <div className={classes.intro}><Intro /></div>
              <div className={classes.socialWeb}><SocialWeb /></div>
              <div className={classes.commonSegment}><About /></div>
              <div className={classes.commonSegment}><Work /></div>
              <div className={classes.commonSegment}><CP /></div>
              <div className={classes.commonSegment}><Projects /></div>
              <div className={classes.footer}><Footer /></div>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Home);