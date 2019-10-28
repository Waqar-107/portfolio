import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import VashaShikkha from '../../assets/vashaShikkha.png'
import Colors from '../../styles/Colors';

const styles = theme => ({
  outerSurface: {
    width: '90%',
		
    backgroundColor: 'cyan',

		display: 'flex',
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'center',
		alignContent: 'center',
  },
  
  mobileSurface: {
    width: '100%',

    [theme.breakpoints.down('md')]:{
      display: 'flex',
    },

    [theme.breakpoints.up('md')]:{
      display: 'none',
    },
  },

  webSurface: {
    width: '100%',
		height: '50vh',
		
		display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
		alignContent: 'center',

    [theme.breakpoints.down('md')]:{
      display: 'none',
    },

    [theme.breakpoints.up('md')]:{
      display: 'flex',
    },
  },

  webLeftT1: {
    width: '55%',
		height: '100%',
		backgroundColor: 'red',
  },

  webRightT1: {
    width: '45%',
		height: '100%',
		
		backgroundColor: 'yellow',
	},
	
	webLeftT2: {
    width: '45%',
    height: '100%',
  },

  webRightT2: {
    width: '60%',
    height: '100%',
	},
	
	dp: {
		height: '100%',
    width: '100%',

    objectFit: 'cover',
    objectPosition: 'center',
	}

});

class FeatProjects extends Component {
		getImage = () => {
			const { classes, imageName } = this.props;
			if(imageName === 'VashaShikkha')
				return <img className={classes.dp} src={VashaShikkha} alt="" />;
		};

    render() {
        const { classes, mirror } = this.props;
        return (
            <div className={classes.outerSurface}>
              
							{
								mirror === false ?
								<div className={classes.webSurface}>
									<div className={classes.webLeftT1}>
										{this.getImage()}
									</div>
									<div className={classes.webRightT1}></div>
								</div>
								:
								<div className={classes.webSurface}></div>
							}

              <div className={classes.mobileSurface}>
              </div>
            </div>
        );
    }
}

FeatProjects.propTypes = {
    classes: PropTypes.object.isRequired,
		mirror: PropTypes.bool.isRequired,
		imageName: PropTypes.string.isRequired,
}


export default withStyles(styles)(FeatProjects);