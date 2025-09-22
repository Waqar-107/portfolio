import React from "react";
import PropTypes from "prop-types";
import styles from "./styles"
import Colors from "../../styles/Colors";

const TitleHead = (props) => {
	const { caption, number } = props;
	const classes = styles();

	return (
		<div className={classes.outer}>
			<div className={classes.lineContainer}>
				<div className={classes.line}></div>
			</div>
			<div className={classes.capContainer}>
				<div style={{ color: Colors.themeFontColor, marginRight: 15 }}>{number}</div>
				<div style={{ color: Colors.nameColor, marginRight: 7 }}>{caption}</div>
			</div>
		</div>
	);
};

TitleHead.propTypes = {
	number: PropTypes.string.isRequired,
	caption: PropTypes.string.isRequired,
};

export default TitleHead;
