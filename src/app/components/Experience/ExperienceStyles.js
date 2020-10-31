import {makeStyles} from "@material-ui/core";
import Colors from "../../styles/Colors";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",

		display: "flex",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},

		[theme.breakpoints.up("md")]: {
			flexDirection: "row",
		},
	},

	descriptionContainer: {
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			paddingLeft: 0,
		},

		[theme.breakpoints.up("md")]: {
			width: "80%",
			paddingLeft: 50,
		},
	},

	tabContainer: {
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},

		[theme.breakpoints.up("md")]: {
			width: "20%",
		},
	},

	descriptionHeading: {
		display: "flex",
		flexWrap: "wrap",

		fontSize: 20,
		fontWeight: 600,
	},

	role: {
		color: Colors.nameColor,
	},

	at: {
		color: Colors.themeFontColor,
		margin: "0px 5px 0px 7px",
	},

	institute: {
		color: Colors.themeFontColor,
		textDecoration: "none",

		"&:after": {
			content: "''",
			display: "block",
			margin: "auto",
			height: "0.5px",
			width: 0,
			backgroundColor: "transparent",
			transition: "width .5s ease, background-color .5s ease",
		},

		"&:hover": {
			color: Colors.themeFontColor,
			"&:after": {
				width: "100%",
				backgroundColor: Colors.themeFontColor,
			},
		},
	},

	date: {
		color: Colors.fontColor,
		fontSize: 13,
		marginTop: 5,
		marginBottom: 15,
	},

	points: {
		listStyle: "none",
		padding: 0,
		margin: 0,
	},

	lst: {
		fontSize: 18,
		marginBottom: 10,
		marginLeft: "1em",
		textIndent: "-1.2em",

		"&:before": {
			content: '"▹"',
			color: Colors.themeFontColor,
			fontSize: 20,
			marginRight: 5,
		},

		"& > a": {
			color: Colors.themeFontColor,
			textDecoration: "none",
		},
	},

	webTabContainer: {
		flexDirection: "row",

		[theme.breakpoints.down("sm")]: {
			display: "none",
		},

		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},

	webTabInner: {
		width: "calc(100% - 2px)",
		display: "flex",
		flexDirection: "column",
	},

	webTab: {
		height: 50,
		width: "100%",

		color: Colors.fontColor,
		fontSize: 16,
		paddingLeft: 20,
		cursor: "pointer",

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignContent: "center",
		alignItems: "center",

		"&:hover": {
			color: Colors.themeFontColor,
			background: Colors.projectBox,
		},
	},

	webLine: {
		background: Colors.lineColor,
		width: 2,
	},

	webGreenLine: {
		position: "absolute",
		height: 50,
		width: 2,
		background: Colors.themeFontColor,
		transition: "margin 0.15s ease-out",
	},

	mobileTabContainer: {
		width: "100%",
		height: 50,
		marginBottom: 25,
		background: "cyan",
		flexDirection: "row",

		[theme.breakpoints.down("sm")]: {
			display: "flex",
		},

		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
}));

export default styles;
