import React from "react";
import {Link} from "react-scroll";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import styles from "./NavBarStyles";

const NavBar = () => {
	const classes = styles();
	return (
		<div className={classes.root}>
			<div className={classes.webNav}>
				<div
					className={classes.navItem}
					data-aos="fade-down"
					data-aos-once="true"
					data-aos-offset="0"
					data-aos-delay="10"
					data-aos-duration="700"
					data-aos-easing="ease-in-out"
				>
					<Link
						activeClass="active"
						to="aboutMe"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<p className={classes.p1}>01.</p>
						<p className={classes.p2}>&nbsp;&nbsp;About</p>
					</Link>
				</div>

				<div
					className={classes.navItem}
					data-aos="fade-down"
					data-aos-once="true"
					data-aos-offset="0"
					data-aos-delay="10"
					data-aos-duration="900"
					data-aos-easing="ease-in-out"
				>
					<Link
						activeClass="active"
						to="education"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<p className={classes.p1}>02.</p>
						<p className={classes.p2}>&nbsp;&nbsp;Education</p>
					</Link>
				</div>

				<div
					className={classes.navItem}
					data-aos="fade-down"
					data-aos-once="true"
					data-aos-offset="0"
					data-aos-delay="10"
					data-aos-duration="1100"
					data-aos-easing="ease-in-out"
				>
					<Link activeClass="active" to="work" spy={true} smooth={true} offset={-70} duration={500}>
						<p className={classes.p1}>03.</p>
						<p className={classes.p2}>&nbsp;&nbsp;Experience</p>
					</Link>
				</div>

				<div
					className={classes.navItem}
					data-aos="fade-down"
					data-aos-once="true"
					data-aos-offset="0"
					data-aos-delay="10"
					data-aos-duration="1300"
					data-aos-easing="ease-in-out"
				>
					<Link
						activeClass="active"
						to="problemSolving"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<p className={classes.p1}>04.</p>
						<p className={classes.p2}>&nbsp;&nbsp;Problem Solving</p>
					</Link>
				</div>

				<div
					className={classes.navItem}
					data-aos="fade-down"
					data-aos-once="true"
					data-aos-offset="0"
					data-aos-delay="10"
					data-aos-duration="1500"
					data-aos-easing="ease-in-out"
				>
					<Link
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<p className={classes.p1}>05.</p>
						<p className={classes.p2}>&nbsp;&nbsp;Work</p>
					</Link>
				</div>

				<div
					className={classes.navItem}
					data-aos="fade-down"
					data-aos-once="true"
					data-aos-offset="0"
					data-aos-delay="10"
					data-aos-duration="1700"
					data-aos-easing="ease-in-out"
				>
					<Link
						activeClass="active"
						to="contactMe"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<p className={classes.p1}>06.</p>
						<p className={classes.p2}>&nbsp;&nbsp;Contact</p>
					</Link>
				</div>

				<div
					className={classes.resume}
					data-aos="fade-down"
					data-aos-once="true"
					data-aos-offset="0"
					data-aos-delay="10"
					data-aos-duration="1900"
					data-aos-easing="ease-in-out"
				>
					<a href="/khan_cv.pdf" target="blank" className={classes.linkNav}>
						Resume
					</a>
				</div>
			</div>
			<div className={classes.mobileNav}>
				<HamburgerMenu />
			</div>
		</div>
	);
};

export default NavBar;
