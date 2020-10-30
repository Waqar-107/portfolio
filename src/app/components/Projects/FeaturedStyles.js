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

	upperLevel: {},

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
}));

export default styles;
