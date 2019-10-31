import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './NavBarStyles';
import Colors from '../../styles/Colors';

class NavBar extends Component {
		constructor(props){
			super(props);
			this.state = {
				prevScrollPos: window.pageYOffset,
				visible: true,
			}
		}

		componentDidMount() {
			window.addEventListener("scroll", this.handleScroll);
		}

		componentWillUnmount() {
			window.removeEventListener("scroll", this.handleScroll);
		}

		handleScroll = () => {
			let { prevScrollPos, visible } = this.state;
			const currScrollPos = window.pageYOffset;

			console.log(prevScrollPos, currScrollPos);
			
			// if scrolled down y increases
			visible = prevScrollPos > currScrollPos;
			prevScrollPos = currScrollPos;
			
			this.setState({ prevScrollPos});
			this.setState({ visible });
		}

    render() {
				const { classes } = this.props;
				const { visible } = this.state;

        return (
						<div className={classes.mainBody} 
						style={{top: visible ? '0' : '-10vh', backgroundColor: Colors.mediumDarkNavy}}
						>
              
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(NavBar);