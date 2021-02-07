import React from "react";

import TitleHead from "../../../components/TitleHead/TitleHead";
import DP from "../../../assets/khan.jpg";
import styles from "./AboutMeStyles";

const AboutMe = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<TitleHead number="01." caption="About Me" />
			</div>

			<div className={classes.content}>
				<div className={classes.left}>
					Hi! I'm Waqar. i am a student at{" "}
					<a className={classes.link} href="https://www.buet.ac.bd/web/" target="blank">
						Buet
					</a>{" "}
					and my major is in{" "}
					<a className={classes.link} href="https://cse.buet.ac.bd/" target="blank">
						Computer Science and Engineering.
					</a>{" "}
					<br />
					<br />
					I enjoy coding in Python and C++. I also love to make webapps using the MERN stack.
					<br />
					<br />
					Here are few technologies I have been working with,
					<br />
					<ul className={classes.techs}>
						<li className={classes.lst}>Python</li>
						<li className={classes.lst}>C++</li>
						<li className={classes.lst}>JavaScript</li>
						<li className={classes.lst}>Java</li>
						<li className={classes.lst}>React.js</li>
						<li className={classes.lst}>Node.js</li>
						<li className={classes.lst}>MongoDB</li>
						<li className={classes.lst}>MySQL</li>
					</ul>
				</div>
				<div className={classes.right}>
					<div className={classes.imageContainer}>
						<img className={classes.dp} src={DP} alt="" />
						<div className={classes.dpCover}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
