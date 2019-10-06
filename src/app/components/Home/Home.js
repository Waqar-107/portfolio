import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Intro from '../Intro/Intro';

import Colors from '../../styles/Colors';
import styles from './HomeStyle';

class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.intro}><Intro /></div>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Home);