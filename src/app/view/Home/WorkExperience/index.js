import React from "react";

import data from "./data";
import TitleHead from "../../../components/TitleHead";
import Experience from "../../../components/Experience";
import styles from "./styles";

const WorkExperience = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<TitleHead number="03." caption="Work Experience" />
			</div>

			<div className={classes.content}>
				<Experience data={data.data} />
			</div>
		</div>
	);
};

export default WorkExperience;
