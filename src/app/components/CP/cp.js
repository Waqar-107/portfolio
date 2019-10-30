import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './cpStyles';

import TitleHead from '../Header//titleHead'; 

class CP extends Component {
		constructor(props)
		{
			super(props);
			this.state = {
				
			}
		}

    render() {
				const { classes } = this.props;
				
        return (
            <div className={classes.mainBody}>
              <div className={classes.heading}>
                <TitleHead number="03." 
                caption="My Competitive Programming Career" />
              </div>

              <div className={classes.content}></div>
            </div>
        );
    }
}

CP.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(CP);