import {makeStyles} from "@material-ui/core";
import Colors from "../../styles/Colors";

const styles = makeStyles((theme) => ({
	root: {
		height: "100%",
		width: "100%",
		padding: "0% 5% 0% 5%",

		transition: "top 0.3s",
		display: "inline-flex",

		zIndex: "5",
		backgroundColor: Colors.mediumDarkNavy,
	},

	webNav: {
		height: "100%",
		width: "100%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignContent: "center",
		alignItems: "center",

		[theme.breakpoints.down("md")]: {
			display: "none",
		},

		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},

	mobileNav: {
		height: "100%",
		width: "100%",

		position: "relative",

		[theme.breakpoints.down("md")]: {
			display: "flex",
		},

		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},

	resume: {
		padding: "7px 15px 7px 15px",

		borderRadius: "5px",
		border: "0.5px solid #64FFDA",
		color: "#64FFDA",

		"&:hover": {
			backgroundColor: "#293d5a",
		},
	},

	linkNav: {
		textDecoration: "none",

		fontSize: "14px",
		color: Colors.themeFontColor,
	},

	p1: {
		display: "inline-flex",
		color: "#64FFDA",
		fontSize: "14px",
	},

	p2: {
		display: "inline-flex",
		color: "#a8b2d1",
		fontSize: "14px",

		"&:hover": {
			color: "#64FFDA",
		},
	},

	navItem: {
		cursor: "pointer",
		marginRight: "20px",
	},
}));

export default styles;
