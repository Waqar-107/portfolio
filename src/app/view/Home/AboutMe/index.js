import React from "react";

import TitleHead from "../../../components/TitleHead/TitleHead";
import DP from "../../../assets/khan.jpg";
import styles from "./styles";

const AboutMe = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<TitleHead number="01." caption="About Me" />
			</div>

			<div className={classes.content}>
				<div className={classes.left}>
					I am a Ph.D. student in the Department of Computer Science at the School of Computing and Augmented Intelligence, Arizona State University. I work in the <a className={classes.link} href="https://shadelab.asu.edu/" target="blank">SHaDE Lab</a> under the supervision of Dr. Ariane Middel. My research interest lies in Accessibility, Human-Computer Interaction (HCI), and Urban Climate.
					<br /><br />
					Here are some methods and technologies I’ve been working with:
					<br />
					<ul className={classes.techs}>
						<li className={classes.lst}>Python</li>
						<li className={classes.lst}>HPC Clusters</li>
						<li className={classes.lst}>Qualitative Analysis</li>
						<li className={classes.lst}>React</li>
						<li className={classes.lst}>QGIS</li>
						<li className={classes.lst}>C++</li>
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
