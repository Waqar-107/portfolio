import React, {useState} from "react";
import PropTypes from "prop-types";
import Colors from "../../styles/Colors";
import styles from "./ExperienceStyles";

const Experience = ({data}) => {
	const classes = styles();
	const [idx, setIdx] = useState(0);

	return (
		<div className={classes.root}>
			<div className={classes.tabContainer}>
				<div className={classes.webTabContainer}>
					<div className={classes.webLine} style={{height: 50 * data.length}}>
						<div className={classes.webGreenLine} style={{marginTop: 50 * idx}}></div>
					</div>
					<div className={classes.webTabInner}>
						{data.map((obj, jdx) => (
							<div
								onClick={() => setIdx(jdx)}
								key={jdx}
								style={
									idx == jdx ? {color: Colors.themeFontColor, background: Colors.projectBox} : null
								}
								className={classes.webTab}>
								{obj.tab}
							</div>
						))}
					</div>
				</div>
			</div>

			<div className={classes.descriptionContainer}>
				<div className={classes.descriptionHeading}>
					<div className={classes.role}>{data[idx].role}</div>
					<span className={classes.at}>@</span>
					<a className={classes.institute} href={data[idx].instituteLink} alt="" target="blank">
						{data[idx].institute}
					</a>
				</div>
				<div className={classes.date}>{data[idx].date}</div>
				<ul className={classes.points}>
					{data[idx].description.map((obj, jdx) => (
						<li key={jdx} className={classes.lst} dangerouslySetInnerHTML={{__html: obj}}></li>
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
