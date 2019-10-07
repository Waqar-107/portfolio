import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Colors from '../../styles/Colors';

const styles = theme => ({
  outerSurface: {
    width: '100%',
    height: '100%',
  },
});

class SocialWeb extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.outerSurface}>
              
            </div>
        );
    }
}

SocialWeb.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(SocialWeb);