import React from "react";
import styles from "./styles";

const Contact = () => {
	const classes = styles();
	return (
		<div className={classes.outerSurface}>
			<div className={classes.heading}>07. What's Next?</div>
			<div className={classes.head2}>Get In Touch</div>
			<div className={classes.kotha}>
				My Inbox is always opened. You can communicate with me through email or linkedin if you
				want. I'll try my best to answer back!!!
			</div>
			<div className={classes.mailMe}>
				<a className={classes.mailLink} href="mailto:wkhan17@asu.edu">
					Say Hello
				</a>
			</div>
		</div>
	);
};

export default Contact;
