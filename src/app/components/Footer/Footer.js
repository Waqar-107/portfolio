import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Colors from '../../styles/Colors';
import Social from '../SocialLinks/socialMobile';

const styles = theme => ({
  outerSurface: {
    width: '100%',
    height: '15vh',

    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'center',
		alignContent: 'center',
  },

  social: {
    width: '100%',
    height: '8vh',
  },

  ack: {
    width: '100%',
    color: Colors.motoColor,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
		alignContent: 'center',

    height: '7vh',
    fontSize: '15px',
  },

  ackDivide: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    
    height: '3.5vh',
    fontSize: '15px',
  },

  link:{
    textDecoration: 'none',
    color: Colors.motoColor,

    '&:hover':{
      color: Colors.themeFontColor,
    }
  },
});

class Footer extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.outerSurface}>
              <div className={classes.social}><Social /></div>
              <div className={classes.ack}>
                <div className={classes.ackDivide}>
                  <a className={classes.link} href="https://github.com/bchiang7/v4" target="blank">Originally designed by Brittany Chiang.</a>
                </div>
                
                <div className={classes.ackDivide}>
                  <a className={classes.link} href="https://github.com/Waqar-107" target="blank">Re-implemented by Waqar-107</a>
                </div>
              </div>
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Footer);