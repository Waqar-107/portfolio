import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import GitLogo from '../../assets/githubLogo.svg';
import QuoraLogo from '../../assets/quora.svg';
import LinkedInLogo from '../../assets/linkedin.svg';
import CfLogo from '../../assets/codeforces.svg';
import Colors from '../../styles/Colors';

const styles = theme => ({
  outerSurface: {
    width: '100%',
		height: '8vh',
		
		display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'center',
		alignContent: 'center',
	},
	
  iconHolder: {
    height: '40px',
		width: '80%',
   
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
		alignContent: 'center',
  },
  
  icon: {
    height: '25px',
    width: '25px',

    // marginLeft: '2px',
    // marginRight: '2px',
  },

  icon2: {
    height: '22px',
    width: '22px',

    // marginLeft: '3px',
    // marginRight: '3px',
  }
});

class SocialMobile extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.outerSurface}>
              <div className={classes.iconHolder}>
                <a href="https://github.com/Waqar-107" target="blank">
                  <img className={classes.icon} src={GitLogo} alt=""/>
                </a>
                <a href="https://bd.linkedin.com/in/waqar-hassan-khan-918a04150" target="blank">
                  <img className={classes.icon2} src={LinkedInLogo} alt=""/>
                </a>
                <a href="https://codeforces.com/profile/_lucifer_" target="blank">
                  <img className={classes.icon} src={CfLogo} alt=""/>
                </a>
                <a href="https://www.quora.com/profile/Waqar-Hassan-Khan" target="blank">
                  <img className={classes.icon2} src={QuoraLogo} alt=""/>
                </a>
              </div>
            </div>
        );
    }
}

SocialMobile.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(SocialMobile);