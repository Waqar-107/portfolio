import React, {useState} from "react";
import PropTypes from "prop-types";
import styles from "./ExperienceStyles";

const Experience = ({data}) => {
	const classes = styles();
	const [idx, setIdx] = useState(0);

	return (
		<div className={classes.root}>
			<div className={classes.tabContainer}></div>

			<div className={classes.descriptionContainer}>
				<div className={classes.descriptionHeading}>
					<div className={classes.role}>{data[idx].role}</div>
					<span className={classes.at}>@</span>
					<a className={classes.institute} href={data[idx].instituteLink} alt="">
						{data[idx].institute}
					</a>
				</div>
				<div className={classes.date}>{data[idx].date}</div>
				<ul className={classes.points}>
					{data[idx].description.map((obj, idx) => (
						<li key={idx} className={classes.lst}>
							{obj}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

Experience.propTypes = {
	data: PropTypes.array.isRequired,
};

export default Experience;
