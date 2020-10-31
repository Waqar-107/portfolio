import React from "react";

import data from "./data";
import TitleHead from "../../../components/TitleHead/TitleHead";
import Experience from "../../../components/Experience/Experience";
import styles from "./EducationStyles";

const Education = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<TitleHead number="02." caption="Education" />
			</div>

			<div className={classes.content}>
				<Experience data={data.data} />
			</div>
		</div>
	);
};

export default Education;
