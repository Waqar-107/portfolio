import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},

	navContainer: {
		height: "10vh",
		width: "100%",
		position: "fixed",
	},

	content: {
		height: "150vh",
		width: "100%",

		background: "green",
	},
}));

export default styles;
