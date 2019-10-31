import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from "react-scroll";

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
									<div className={classes.navItem}>
										<Link
												activeClass="active"
												to="aboutMe"
												spy={true}
												smooth={true}
												offset={-70}
												duration= {500}
										>
											<p className={classes.p1}>01.</p><p className={classes.p2}>&nbsp;&nbsp;About</p>
										</Link>
									</div>
									
									<div className={classes.navItem}>
										<Link
												activeClass="active"
												to="work"
												spy={true}
												smooth={true}
												offset={-70}
												duration= {500}
										>
											<p className={classes.p1}>02.</p><p className={classes.p2}>&nbsp;&nbsp;Experience</p>
										</Link>
									</div>

									<div className={classes.navItem}>
										<Link
												activeClass="active"
												to="problemSolving"
												spy={true}
												smooth={true}
												offset={-70}
												duration= {500}
										>
											<p className={classes.p1}>03.</p><p className={classes.p2}>&nbsp;&nbsp;Problem Solving</p>
										</Link>
									</div>

									<div className={classes.navItem}>
										<Link
												activeClass="active"
												to="projects"
												spy={true}
												smooth={true}
												offset={-70}
												duration= {500}
										>
											<p className={classes.p1}>04.</p><p className={classes.p2}>&nbsp;&nbsp;Work</p>
										</Link>
									</div>

									<div className={classes.navItem}>
										<Link
												activeClass="active"
												to="contactMe"
												spy={true}
												smooth={true}
												offset={-70}
												duration= {500}
										>
											<p className={classes.p1}>05.</p><p className={classes.p2}>&nbsp;&nbsp;Contact</p>
										</Link>
									</div>
									
									<div className={classes.resume}>
										<a href="/khan_cv.pdf" target="blank" 
										className={classes.linkNav}
										style={{color: Colors.themeFontColor}}
										>Resume</a>
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