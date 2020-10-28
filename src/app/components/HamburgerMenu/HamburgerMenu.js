import React, {useState} from "react";
import {withStyles} from "@material-ui/core/styles";
import {Link} from "react-scroll";

import styles from "./HamburgerMenuStyle";
import Colors from "../../styles/Colors";

const HamburgerMenu = () => {
	const classes = styles();
	const [checked, setChecked] = useState(false);

	const handleCheckBox = () => {
		setChecked(!checked);
	};

	return (
		<div className={classes.menu_wrap}>
			<input
				onChange={() => handleCheckBox()}
				type="checkbox"
				className={classes.menu_wrap_toggler}
			/>
			<div className={classes.menu_wrap_hamburger}>
				<div
					className={
						checked ? classes.menu_wrap_hamburger_div_ifChecked : classes.menu_wrap_hamburger_div
					}
				></div>
			</div>

			<div className={classes.menu} style={{right: checked ? "0" : "-75vw"}}>
				<div className={classes.hamItem}>
					<Link
						activeClass="active"
						to="aboutMe"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						onClick={handleCheckBox}
						className={classes.LINK}
					>
						<div className={classes.p1}>01.</div>
						<div className={classes.p2H}>About</div>
					</Link>
				</div>
				<div className={classes.hamItem}>
					<Link
						activeClass="active"
						to="work"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						onClick={handleCheckBox}
						className={classes.LINK}
					>
						<div className={classes.p1}>02.</div>
						<div className={classes.p2H}>Experience</div>
					</Link>
				</div>
				<div className={classes.hamItem}>
					<Link
						activeClass="active"
						to="problemSolving"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						onClick={handleCheckBox}
						className={classes.LINK}
					>
						<div className={classes.p1}>03.</div>
						<div className={classes.p2H}>Problem Solving</div>
					</Link>
				</div>
				<div className={classes.hamItem}>
					<Link
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						onClick={handleCheckBox}
						className={classes.LINK}
					>
						<div className={classes.p1}>04.</div>
						<div className={classes.p2H}>Work</div>
					</Link>
				</div>
				<div className={classes.hamItem}>
					<Link
						activeClass="active"
						to="contactMe"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						onClick={handleCheckBox}
						className={classes.LINK}
					>
						<div className={classes.p1}>05.</div>
						<div className={classes.p2H}>Contact</div>
					</Link>
				</div>

				<div className={classes.resume}>
					<a
						href="/khan_cv.pdf"
						target="blank"
						className={classes.linkNav}
						style={{color: Colors.themeFontColor}}
					>
						Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default HamburgerMenu;
