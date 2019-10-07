import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Intro from '../Intro/Intro';
import SocialWeb from '../SocialLinks/socialWeb';
import Footer from '../Footer/Footer';
import About from '../AboutMe/AboutMe';

import styles from './HomeStyle';

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.mainBody}>
              <div className={classes.nav}></div>
              <div className={classes.intro}><Intro /></div>
              <div className={classes.socialWeb}><SocialWeb /></div>
              <div className={classes.aboutMe}><About /></div>
              <div className={classes.footer}><Footer /></div>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Home);