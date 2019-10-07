import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import DP from '../../assets/khan.jpg';
import Colors from '../../styles/Colors';
import styles from './AboutMeStyles';

class AboutMe extends Component {
    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.mainBody}>
              <div className={classes.heading}>
                <div 
                  style={{color: Colors.themeFontColor, marginRight: '15px'}}
                >01.</div>
                <div 
                  style={{color: Colors.nameColor, marginRight: '15px'}}
                >About Me</div>
                <div 
                  style={{backgroundColor: Colors.lineColor}} className={classes.line}
                ></div>
              </div>

              <div className={classes.content}>
                <div className={classes.mobile}></div>
                <div className={classes.web}>
                  <div className={classes.webPara} style={{color: Colors.motoColor}}>
                  Hello! I'm Brittany, a software engineer based in Boston, MA who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends. Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis
                  </div>
                  <div className={classes.webImage}>
                    <img className={classes.dp} src={DP} alt=""/>
                    <div className={classes.dpCover}></div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

AboutMe.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(AboutMe);