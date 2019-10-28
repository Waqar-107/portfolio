import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Colors from '../../styles/Colors';
import styles from './ProjectsStyles';
import FeatProject from './FeatProjects';

class Projects extends Component {
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
                <div 
                  style={{color: Colors.themeFontColor, marginRight: '15px'}}
                >03.</div>
                <div 
                  style={{color: Colors.nameColor, marginRight: '15px'}}
                >Things I've Developed</div>
                <div 
                  style={{backgroundColor: Colors.lineColor}} className={classes.line}
                ></div>
              </div>
              <div className={classes.content}>
                <FeatProject mirror={false} imageName="VashaShikkha"/>
              </div>
            </div>
        );
    }
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Projects);