import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Intro from '../Intro/Intro';
import SocialWeb from '../SocialLinks/socialWeb';
import Footer from '../Footer/Footer';

import styles from './HomeStyle';

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
              <div className={classes.intro}><Intro /></div>
              <div className={classes.socialWeb}><SocialWeb /></div>
              <div className={classes.footer}><Footer /></div>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Home);