import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",

		display: "flex",
		flexDirection: "column",
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
		flexDirection: "column",
		color: "#8892b0",
		lineHeight: 1.5,
	},

	head: {
		width: "100%",
		textAlign: "center",

		fontSize: 22,
		fontWeight: 600,
		color: "white",

		marginTop: 50,
		marginBottom: 20,
	},

	btnContainer: {
		width: "100%",
		height: "150px",

		marginTop: 20,
		marginBottom: 20,

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
	},

	seeMore: {
		width: "150px",
		height: "60px",

		border: "solid 1px #64FFDA",
		color: "#64FFDA",
		fontSize: "18px",

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",

		cursor: "pointer",

		"&:hover": {
			backgroundColor: "#293d5a",
		},
	},
}));

export default styles;
