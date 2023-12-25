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
					Hi! I'm Waqar. I have completed my undergrad from{" "}
					<a className={classes.link} href="https://www.buet.ac.bd/web/" target="blank">
						Buet
					</a>{" "}
					and my major is in{" "}
					<a className={classes.link} href="https://cse.buet.ac.bd/" target="blank">
						Computer Science and Engineering.
					</a>{" "}
					<br />
					<br />
					Currently, I am persuing my Ph.D. in <a className={classes.link} href="https://scai.engineering.asu.edu/graduate-computer-science/" target="_blank">Computer Science</a> at <a className={classes.link} href="https://www.asu.edu/" target="_blank">Arizona State University</a>. My research interest lies in Software Engineering, HCI and the intersection of machine learning with various domains. 
					<br />
					<br />
					I love to code and solve problems on LeetCode whenever I get time.
					<br />
					<br />
					Here are few technologies I have been working with,
					<br />
					<ul className={classes.techs}>
						<li className={classes.lst}>Agave GPU Clusters</li>
						<li className={classes.lst}>MAXQDA</li>
						<li className={classes.lst}>Python</li>
						<li className={classes.lst}>C++</li>
						<li className={classes.lst}>React.js</li>
						
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
