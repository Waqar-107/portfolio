import React from "react";
import {makeStyles} from "@material-ui/core";
import PropTypes from "prop-types";

import Colors from "../../../styles/Colors";

const styles = makeStyles((theme) => ({
	outerSurface: {
		width: "100%",

		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},

	heading: {
		width: "100%",

		display: "flex",
		flexWrap: "no-wrap",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",

		fontSize: "20px",
		fontWeight: "400",

		color: Colors.themeFontColor,
	},

	head2: {
		width: "100%",
		marginBottom: 20,

		display: "flex",
		flexWrap: "no-wrap",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",

		fontSize: "50px",
		fontWeight: "600",

		color: Colors.nameColor,
	},

	kotha: {
		marginBottom: 50,
		lineHeight: 1.3,

		display: "flex",
		flexWrap: "no-wrap",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",

		fontSize: 18,
		textAlign: "center",
		fontWeight: 300,

		color: Colors.motoColor,

		[theme.breakpoints.down("md")]: {
			width: "100%",
		},

		[theme.breakpoints.up("md")]: {
			width: "75%",
		},
	},

	mailMe: {
		width: "150px",
		height: "60px",
		marginBottom: 70,

		border: "solid 1px #64FFDA",
		color: "#64FFDA",
		fontSize: "18px",
		cursor: "pointer",

		"&:hover": {
			backgroundColor: "#293d5a",
		},
	},

	mailLink: {
		width: "100%",
		height: "100%",
		textDecoration: "none",
		userSeclect: "none",
		color: "#64FFDA",

		display: "flex",
		flexWrap: "no-wrap",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
	},
}));

const Contact = () => {
	const classes = styles();
	return (
		<div className={classes.outerSurface}>
			<div className={classes.heading}>05. What's Next?</div>
			<div className={classes.head2}>Get In Touch</div>
			<div className={classes.kotha}>
				I am expecting to graduate by February 2021 and eager to join the industry. I'm interested
				in developing things using C++ and Python. Currently i'm learning MongoDB.
				<br />
				My Inbox is always opened. You can communicate with me through email or linkedin if you
				want. I'll try my best to answer back!!!
			</div>
			<div className={classes.mailMe}>
				<a className={classes.mailLink} href="mailto:waqar.hassan866@gmail.com">
					Say Hello
				</a>
			</div>
		</div>
	);
};

export default Contact;
