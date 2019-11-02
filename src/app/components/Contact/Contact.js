import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Colors from '../../styles/Colors';

const styles = theme => ({
  outerSurface: {
    width: '90%',

    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  heading: {
    //height: '10vh',
    width: '100%',
    //marginBottom: '1vh',

    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

    fontSize: '20px',
    fontWeight: '400',

    color: Colors.themeFontColor,
  },

  head2: {
    width: '100%',
    marginBottom: '2vh',

    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

    fontSize: '50px',
    fontWeight: '600',

    color: Colors.nameColor,
  },

  kotha: {
    marginBottom: '10vh',

    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

    fontSize: '20px',
    textAlign: 'center',
    fontWeight: '400',

    color: Colors.motoColor,

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },

    [theme.breakpoints.up('md')]: {
      width: '60%'
    },
  },

  mailMe: {
    width: '150px',
    height: '60px',

    border: 'solid 1px #64FFDA',
    color: '#64FFDA',
    fontSize: '18px',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#293d5a',
    }
  },

  mailLink: {
    width: '100%',
    height: '100%',
    textDecoration: 'none',
    userSeclect: 'none',
    color: '#64FFDA',

    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  }

});

class Contact extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.outerSurface}>
        <div className={classes.heading}>05. What's Next?</div>
        <div className={classes.head2}>Get In Touch</div>
        <div className={classes.kotha}>
          I am expecting to graduate by July 2020 and eager to do intern to get acquainted with the industry. I'm interested in developing things using C++ and Python. Currently i'm learning React JS to code for the web.
								<br />
          My Inbox is always opened. You can communicate with me through email if you want. I'll try my best to answer back!!!
							</div>
        <div className={classes.mailMe}>
          <a className={classes.mailLink}
            href="mailto:waqar.hassan866@gmail.com">Say Hello</a>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Contact);