import Colors from "../../styles/Colors";
import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: 350,

		position: "relative",
	},

	lowerLevel: {
		position: "absolute",
		height: "100%",
		width: "100%",

		display: "flex",
		flexDirection: "row",
	},

	upperLevel: {
		position: "absolute",
		height: "100%",
		width: "100%",

		display: "flex",
		flexDirection: "column",

		[theme.breakpoints.down("md")]: {
			padding: 20,
		},

		[theme.breakpoints.up("lg")]: {
			padding: "20px 0px 0px 0px",
		},
	},

	mobileMidLayer: {
		position: "absolute",
		height: "100%",
		width: "100%",

		background: Colors.mediumDarkNavy,
		opacity: 0.9,

		[theme.breakpoints.down("md")]: {
			display: "flex",
		},

		[theme.breakpoints.up("lg")]: {
			display: "none",
		},
	},

	image: {
		height: "100%",
		objectFit: "cover",
		objectPosition: "center",

		[theme.breakpoints.down("md")]: {
			width: "100%",
		},

		[theme.breakpoints.up("lg")]: {
			width: "60%",
		},
	},

	imageCover: {
		height: "100%",
		background: Colors.imageCoverColor,

		cursor: "pointer",
		transition: "0.1s ease-in",

		"&:hover": {
			opacity: 0,
		},

		[theme.breakpoints.down("md")]: {
			width: "100%",
			opacity: "0.17",
		},

		[theme.breakpoints.up("lg")]: {
			width: "60%",
			opacity: "0.4",
		},
	},

	heading: {
		fontSize: 13,
		color: Colors.themeFontColor,
	},

	name: {
		fontSize: 28,
		fontWeight: "400",
		color: Colors.nameColor,
		marginBottom: 20,
	},

	description: {
		color: Colors.iconColor,
		fontSize: 16,
		zIndex: 2,

		[theme.breakpoints.down("md")]: {
			width: "100%",
			padding: 0,
			background: "transparent",
		},

		[theme.breakpoints.up("lg")]: {
			width: "50%",
			padding: 20,
			background: Colors.projectBox,
		},
	},

	tagContainer: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",

		marginTop: 30,

		[theme.breakpoints.down("md")]: {
			width: "100%",
		},

		[theme.breakpoints.up("lg")]: {
			width: "40%",
		},
	},

	tag: {
		fontSize: 14,
		marginBottom: 5,
		color: Colors.iconColor,
	},

	iconContainer: {
		display: "flex",
		flexDirection: "row",
		zIndex: 3,

		marginTop: 20,
	},

	icon: {
		height: 20,
		width: 20,
		transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
		fill: Colors.iconColor,
		cursor: "pointer",

		"&:hover": {
			fill: Colors.themeFontColor,
		},
	},
}));

export default styles;
