import Colors from "../../styles/Colors";
import {makeStyles} from "@material-ui/core";

const styles = makeStyles(() => ({
	root: {
		width: "100%",
		height: 350,
		padding: 15,
		backgroundColor: Colors.projectBox,
		cursor: "pointer",
		marginTop: 10,

		transition: "margin 0.15s ease-out",
		"&:hover": {
			marginTop: 5,
		},
	},

	uno: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",
	},

	dos: {
		lineHeight: 1.5,
		fontSize: 18,
		color: Colors.fontColor,
		marginTop: 20,
	},

	tres: {
		marginTop: 30,

		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		alignContent: "flex-start",
		alignItems: "flex-start",
	},

	tag: {
		fontSize: 12,
		marginRight: 12,
		marginBottom: 5,
	},

	name: {
		fontSize: 20,
		color: Colors.nameColor,
		marginBottom: 10,
	},

	description: {
		fontSize: 16,
		lineHeight: 1.3,
	},

	iconContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
	},

	icon: {
		height: 20,
		width: 20,
		transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s",
		fill: Colors.iconColor,
	},

	doc_icon: {
		height: 40,
		width: 40,
		fill: Colors.themeFontColor,
	},

	icon_hover: {
		"&:hover": {
			fill: Colors.themeFontColor,
		},
	},

	ml10: {
		marginLeft: 10,
	},
}));

export default styles;
