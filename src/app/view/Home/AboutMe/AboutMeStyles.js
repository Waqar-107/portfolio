import {makeStyles} from "@material-ui/core";
import Colors from "../../../styles/Colors";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",

		display: "flex",
		flexDirection: "column",
		flexWrap: "no-wrap",
		justifyContent: "flex-start",
		alignItems: "center",
		alignContent: "center",
	},

	heading: {
		height: "10vh",
		width: "100%",

		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		alignContent: "center",
	},

	content: {
		width: "100%",
		fontSize: 18,

		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	},

	left: {
		lineHeight: 1.5,
		color: "#8892b0",
		paddingBottom: 50,

		[theme.breakpoints.down("md")]: {
			width: "100%",
			paddingRight: 0,
		},

		[theme.breakpoints.up("md")]: {
			width: "60%",
			paddingRight: 10,
		},
	},

	right: {
		paddingBottom: 50,

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",

		[theme.breakpoints.down("md")]: {
			width: "100%",
		},

		[theme.breakpoints.up("md")]: {
			width: "40%",
		},
	},

	imageContainer: {
		height: 250,
		width: 250,
		position: "relative",

		backgroundColor: "#64FFDA",

		"&:hover": {
			backgroundColor: "transparent",
			"&:after": {
				top: "15px",
				left: "15px",
			},
		},

		"&:before": {
			content: "''",
			display: "block",
			position: "absolute",
			height: 250,
			width: 250,

			top: 0,
			left: 0,
			right: 0,
			bottom: 0,

			backgroundColor: "#0a192f",
			mixBlendMode: "screen",
		},

		"&:after": {
			content: "''",
			display: "block",
			position: "absolute",
			height: 250,
			width: 250,

			border: "2px solid #64FFDA",
			top: "20px",
			left: "20px",
			zIndex: "-1",

			transition: "all 0.1s ease-in",
		},
	},

	dp: {
		height: 250,
		width: 250,

		position: "absolute",

		objectFit: "cover",
		objectPosition: "center right",
	},

	dpCover: {
		height: 250,
		width: 250,
		zIndex: 10,

		position: "absolute",

		backgroundColor: "#64FFDA",
		opacity: "0.3",
		cursor: "pointer",

		"&:hover": {
			opacity: 0,
			dpFrame: {
				width: 230,
				height: 230,
			},
		},
	},

	link: {
		textDecoration: "none",
		color: "#64FFDA",
	},

	techs: {
		display: "grid",
		gridTemplateColumns: "repeat(2, minmax(140px, 200px))",
		padding: "0px",
		margin: "20px 0px 0px",
		overflow: "hidden",
		listStyle: "none",
	},

	lst: {
		fontSize: 15,

		"&:before": {
			content: '"▹"',
			color: Colors.themeFontColor,
			fontSize: 20,
			marginRight: 5,
		},
	},
}));

export default styles;
