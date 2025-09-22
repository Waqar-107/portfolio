import React from "react";
import styles from "./styles";
import Social from "../SocialLinks/socialMobile";



const Footer = () => {
	const classes = styles();
	return (
		<div className={classes.outerSurface}>
			<div className={classes.social}>
				<Social />
			</div>
			<div className={classes.ack}>
				<a
					className={classes.link}
					href="https://github.com/bchiang7/v4"
					target="blank"
					style={{ marginBottom: 7 }}>
					Originally designed by Brittany Chiang
				</a>
				<a className={classes.link} href="https://github.com/Waqar-107/portfolio" target="blank">
					Re-implemented by Waqar-107
				</a>
			</div>
		</div>
	);
};

export default Footer;
