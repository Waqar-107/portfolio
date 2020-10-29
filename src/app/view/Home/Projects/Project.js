import React, {useState} from "react";
import {Grid} from "@material-ui/core";
import {Collapse} from "react-collapse";

import {featuredProjects, ugCourses, projects} from "./data";
import ProjectBox from "../../../components/Projects/ProjectBox";
import TitleHead from "../../../components/TitleHead/TitleHead";
import styles from "./ProjectStyles";
import "./transition.css";

const Project = () => {
	const classes = styles();
	const [collapseProject, setCollapseProject] = useState(true);
	const [collapseUgCourses, setCollapseUgCourses] = useState(true);

	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<TitleHead number="05." caption="Things I've Developed" />
			</div>

			<div className={classes.content}>
				{/*---------------------------My Projects-----------------------------------*/}
				<div className={classes.head}>My Projects</div>
				<Grid
					container
					spacing={3}
					direction="row"
					wrap="wrap"
					justify="space-between"
					alignContent="flex-start"
					alignItems="flex-start">
					{projects.slice(0, 6).map((obj, idx) => (
						<Grid item xl={4} lg={4} md={6} sm={12} xs={12} key={idx}>
							<ProjectBox data={obj} />
						</Grid>
					))}
				</Grid>

				<Collapse isOpened={!collapseProject}>
					<Grid
						container
						spacing={3}
						direction="row"
						wrap="wrap"
						justify="space-between"
						alignContent="flex-start"
						alignItems="strech"
						style={{marginTop: 12}}>
						{projects.slice(6, projects.length).map((obj, idx) => (
							<Grid item xl={4} lg={4} md={6} sm={12} xs={12} key={idx}>
								<ProjectBox data={obj} />
							</Grid>
						))}
					</Grid>
				</Collapse>
				<div className={classes.btnContainer}>
					<div className={classes.seeMore} onClick={() => setCollapseProject(!collapseProject)}>
						{collapseProject ? "More Projects" : "Fewer Projects"}
					</div>
				</div>
				{/*---------------------------My Projects-----------------------------------*/}

				{/*---------------------------Undergrad-----------------------------------*/}
				<div className={classes.head}>Undergrad Courses</div>
				<Grid
					container
					spacing={3}
					direction="row"
					wrap="wrap"
					justify="space-between"
					alignContent="flex-start"
					alignItems="stretch">
					{ugCourses.slice(0, 6).map((obj, idx) => (
						<Grid item xl={4} lg={4} md={6} sm={12} xs={12} key={idx}>
							<ProjectBox data={obj} />
						</Grid>
					))}
				</Grid>
				<Collapse isOpened={!collapseUgCourses}>
					<Grid
						container
						spacing={3}
						direction="row"
						wrap="wrap"
						justify="space-between"
						alignContent="flex-start"
						alignItems="stretch"
						style={{marginTop: 12}}>
						{ugCourses.slice(6, ugCourses.length).map((obj, idx) => (
							<Grid item xl={4} lg={4} md={6} sm={12} xs={12} key={idx}>
								<ProjectBox data={obj} />
							</Grid>
						))}
					</Grid>
				</Collapse>
				<div className={classes.btnContainer}>
					<div className={classes.seeMore} onClick={() => setCollapseUgCourses(!collapseUgCourses)}>
						{collapseUgCourses ? "More Projects" : "Fewer Projects"}
					</div>
				</div>
				{/*---------------------------Undergrad-----------------------------------*/}
			</div>
		</div>
	);
};

export default Project;
