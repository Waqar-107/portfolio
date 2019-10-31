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
              <div className={classes.logo}></div>
							<div className={classes.navBody}>
								<div className={classes.webNav}>
									<div>
										<a href="#aboutMe" className={classes.linkNav}>
											<p className={classes.p1}>01.</p><p className={classes.p2}>&nbsp;&nbsp;About</p>
										</a>
									</div>

									<div><a href="#" target="blank">01. About</a></div>
									<div><a href="#" target="blank">01. About</a></div>
									<div><a href="#" target="blank">01. About</a></div>
									<div className={classes.resume}>
										<a href="#" target="">resume</a>
									</div>
								</div>
								<div className={classes.mobileNav}></div>
							</div>
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(NavBar);