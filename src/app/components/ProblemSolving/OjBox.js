import React from "react";
import {makeStyles} from "@material-ui/core";
import PropTypes from "prop-types";

import GithubIcon from "../../components/Icons/Github";
import LeetcodeIcon from "../../components/Icons/Leetcode";
import CodeforcesIcon from "../../components/Icons/Codeforces";
import HackerRank from "../../components/Icons/Hackerrank";
import Fork from "../../components/Icons/Fork";
import Star from "../../components/Icons/Star";

import Colors from "../../styles/Colors";

const styles = makeStyles(() => ({
	root: {
		width: "100%",
		padding: 15,
		backgroundColor: Colors.projectBox,
		cursor: "pointer",
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
		justifyContent: "flex-start",
		alignContent: "center",
		alignItems: "center",
	},

	name: {
		fontSize: 20,
		fontWeight: "400",
		color: Colors.nameColor,
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

	num: {
		fontSize: 18,
		color: Colors.iconColor,
	},

	icon_hover: {
		"&:hover": {
			fill: Colors.themeFontColor,
		},
	},

	m10: {
		marginLeft: 10,
	},

	mr15: {
		marginRight: 15,
	},

	mr5: {
		marginRight: 5,
	},
}));

const OjBox = ({data}) => {
	const classes = styles();

	const getIcon = (name) => {
		if (name === "Leetcode")
			return <LeetcodeIcon iconStyles={`${classes.icon} ${classes.icon_hover} ${classes.m10}`} />;
		if (name === "Codeforces")
			return <CodeforcesIcon iconStyles={`${classes.icon} ${classes.icon_hover} ${classes.m10}`} />;
		if (name === "HackerRank")
			return <HackerRank iconStyles={`${classes.icon} ${classes.icon_hover} ${classes.m10}`} />;

		return null;
	};

	return (
		<div className={classes.root}>
			<div className={classes.uno}>
				<div className={classes.name}>{data.projectName}</div>
				<div className={classes.iconContainer}>
					<a href={data.gitURL} target="blank">
						<GithubIcon iconStyles={`${classes.icon} ${classes.icon_hover}`} />
					</a>
					<a href={data.profileURL} target="blank">
						{getIcon(data.projectName)}
					</a>
				</div>
			</div>
			<div className={classes.dos}>{data.projectDescription}</div>
			<div className={classes.tres}>
				<Star iconStyles={`${classes.icon} ${classes.mr5}`} />
				<div className={`${classes.num} ${classes.mr15}`}>{data.star}</div>
				<Fork iconStyles={`${classes.icon} ${classes.mr5}`} />
				<div className={classes.num}>{data.fork}</div>
			</div>
		</div>
	);
};

OjBox.propTypes = {
	data: PropTypes.object.isRequired,
};

export default OjBox;
