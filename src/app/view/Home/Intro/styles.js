import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	intro: {
		height: "90vh",
		width: "100%",
	},

	hi: {
		wordSpacing: "5px",
		fontSize: "16px",

		marginTop: 50,
		marginBottom: 20,
	},

	name: {
		fontWeight: "600",
		marginBottom: 0,

		[theme.breakpoints.down("md")]: {
			fontSize: "40px",
		},

		[theme.breakpoints.up("md")]: {
			fontSize: "70px",
		},
	},

	moto: {
		fontWeight: "600",
		marginBottom: 30,

		[theme.breakpoints.down("md")]: {
			fontSize: "50px",
		},

		[theme.breakpoints.up("md")]: {
			fontSize: "70px",
		},
	},

	shortDescription: {
		fontSize: 18,
		fontWeight: 300,
		marginBottom: 50,
		lineHeight: 1.5,

		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},

		[theme.breakpoints.up("sm")]: {
			width: 500,
		},
	},

	mailMe: {
		width: "150px",
		height: "60px",

		border: "solid 1px #64FFDA",
		color: "#64FFDA",
		fontSize: "16px",
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

export default styles;
