import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import TitleHead from '../Header/titleHead';

import Colors from '../../styles/Colors';
import styles from './WorkStyles';

function Work(props) {
  const { classes } = props;

  return (
    <div className={classes.mainBody}>
      <div className={classes.heading}>
        <TitleHead number="02." caption="Where I've Worked" />
      </div>
      <div className={classes.content}
        style={{ color: Colors.motoColor, fontSize: '22px' }}>
        I haven't worked officially anywhere but did a project with a group of 12 peoples in a cross-platform application.
      </div>
    </div>
  );
}

Work.propTypes = {
  classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Work);