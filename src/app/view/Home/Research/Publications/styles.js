import { makeStyles } from "@material-ui/core";

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
		// lineHeight: 1.5,
	},

	head: {
		width: "100%",
		textAlign: "center",

		fontSize: 22,
		fontWeight: 600,
		color: "white",

		marginBottom: 5,
	},

	paperContainer: {
		display: "flex"
	}
}));

export default styles;
