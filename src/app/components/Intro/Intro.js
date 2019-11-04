import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Colors from '../../styles/Colors';
import styles from './IntroStyles';

function Intro(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.intro}>
        <div
          style={{ color: Colors.themeFontColor }}
          className={classes.hi}
        >Hi, my name is</div>

        <div
          style={{ color: Colors.nameColor }}
          className={classes.name}
        >Waqar Hassan Khan</div>

        <div
          style={{ color: Colors.motoColor }}
          className={classes.moto}
        >I write codes to stay alive :)</div>

        <div
          style={{ color: Colors.shortDescriptionColor }}
          className={classes.shortDescription}
        >I'm a final year cs undergrad student,<br /> seeking internship opportunities.</div>

        <div className={classes.mailMe}>
          <a className={classes.mailLink}
            href="mailto:waqar.hassan866@gmail.com">send me owls!!</a>
        </div>
      </div>
    </div>
  );
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Intro);