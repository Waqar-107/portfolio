import React from "react";

import Colors from "../../../styles/Colors";
import styles from "./styles";

const Intro = () => {
	const classes = styles();
	return (
		<div className={classes.intro}>
			<div
				style={{ color: Colors.themeFontColor }}
				className={classes.hi}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1100"
				data-aos-easing="ease-in-out">
				Hi, my name is
			</div>

			<div
				style={{ color: Colors.nameColor }}
				className={classes.name}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1200"
				data-aos-easing="ease-in-out">
				Waqar Hassan Khan
			</div>

			<div
				style={{ color: Colors.motoColor }}
				className={classes.moto}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1300"
				data-aos-easing="ease-in-out">
				I write codes to stay alive :)
			</div>

			<div
				className={classes.mailMe}
				data-aos="fade-up"
				data-aos-once="true"
				data-aos-offset="0"
				data-aos-delay="10"
				data-aos-duration="1400"
				data-aos-easing="ease-in-out">
				<a className={classes.mailLink} href="mailto:wkhan17@asu.edu">
					Contact Me!!
				</a>
			</div>
		</div>
	);
};

export default Intro;
