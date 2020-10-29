import {makeStyles} from "@material-ui/core";
import Colors from "../../styles/Colors";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},

	navContainer: {
		height: "10vh",
		width: "100%",
		position: "fixed",
		zIndex: 1,
		backgroundColor: Colors.mediumDarkNavy,
	},

	content: {
		width: "100%",
	},

	itemContainer: {
		width: "100%",
		[theme.breakpoints.down("md")]: {
			padding: "0% 5% 0% 5%",
		},

		[theme.breakpoints.up("md")]: {
			padding: "0% 12% 0% 12%",
		},
	},

	socialWeb: {
		position: "fixed",
		height: "90vh",
		width: "10%",

		top: "10vh",
		left: 0,
		zIndex: 2,

		[theme.breakpoints.down("md")]: {
			display: "none",
		},

		[theme.breakpoints.up("md")]: {
			display: "block",
		},
	},
}));

export default styles;
