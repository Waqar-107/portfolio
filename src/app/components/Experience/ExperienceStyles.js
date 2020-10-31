import {makeStyles} from "@material-ui/core";
import Colors from "../../styles/Colors";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",

		display: "flex",
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
		},

		[theme.breakpoints.up("lg")]: {
			flexDirection: "row",
		},
	},

	descriptionContainer: {
		[theme.breakpoints.down("md")]: {
			width: "100%",
		},

		[theme.breakpoints.up("lg")]: {
			width: "75%",
		},
	},

	tabContainer: {
		height: "120px",
		background: "yellow",

		[theme.breakpoints.down("md")]: {
			width: "100%",
		},

		[theme.breakpoints.up("lg")]: {
			width: "25%",
		},
	},

	descriptionHeading: {
		display: "inline-flex",
		fontSize: 20,
		fontWeight: 600,
	},

	role: {
		color: Colors.nameColor,
	},

	at: {
		color: Colors.themeFontColor,
		margin: "0px 7px 0px 7px",
	},

	institute: {
		color: Colors.themeFontColor,
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

		"&:before": {
			content: '"▹"',
			color: Colors.themeFontColor,
			fontSize: 20,
			marginRight: 5,
		},
	},
}));

export default styles;
