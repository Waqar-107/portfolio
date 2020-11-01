import React, {useState} from "react";
import PropTypes from "prop-types";
import {Tab, Tabs} from "@material-ui/core";

import Colors from "../../styles/Colors";
import styles from "./ExperienceStyles";

const Experience = ({data}) => {
	const classes = styles();
	const [idx, setIdx] = useState(0);

	const handleChange = (event, newValue) => {
		setIdx(newValue);
	};

	return (
		<div className={classes.root}>
			<div className={classes.tabContainer}>
				<div className={classes.mobileTabContainer}>
					<Tabs
						value={idx}
						onChange={handleChange}
						variant="scrollable"
						classes={{
							indicator: classes.indicator,
						}}>
						{data.map((obj, jdx) => (
							<Tab
								label={obj.tab}
								key={jdx}
								classes={{
									wrapper: classes.mobile_tab,
								}}
								style={
									idx === jdx ? {color: Colors.themeFontColor, background: Colors.projectBox} : null
								}
							/>
						))}
					</Tabs>
				</div>

				<div className={classes.webTabContainer}>
					<Tabs
						value={idx}
						onChange={handleChange}
						orientation="vertical"
						classes={{
							indicator: classes.indicator,
						}}>
						{data.map((obj, jdx) => (
							<Tab
								classes={{
									wrapper: classes.web_tab,
								}}
								label={obj.tab}
								key={jdx}
								style={
									idx === jdx ? {color: Colors.themeFontColor, background: Colors.projectBox} : null
								}
							/>
						))}
					</Tabs>
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
