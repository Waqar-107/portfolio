import React from "react";
import { Grid } from "@material-ui/core";

import { conference_other_tracks, arxiv_papers } from "./data";
import Paper from "../../../components/Paper";
import TitleHead from "../../../components/TitleHead/TitleHead";
import styles from "./styles";
import "../ArchivalProjects/transition.css";

const Publications = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<TitleHead number="05." caption="Publications" />
			</div>

			<div className={classes.head}>Peer Reviewed Workshop and Special Track Publications</div>
			<div className={classes.content}>
				<Grid container direction="column" style={{ marginBottom: 20 }}>
					<ol>
						{conference_other_tracks.map((obj, idx) => (
							<li>
								<Grid item xl={12} lg={12} md={12} sm={12} xs={12} key={idx}>
									<Paper data={obj} />
								</Grid>
							</li>
						))}
					</ol>
				</Grid>

				<div className={classes.head}>arXiv Papers</div>
				<Grid container direction="column" style={{ marginBottom: 20 }}>
					<ol>
						{arxiv_papers.map((obj, idx) => (
							<li>
								<Grid item xl={12} lg={12} md={12} sm={12} xs={12} key={idx}>
									<Paper data={obj} />
								</Grid>
							</li>
						))}
					</ol>
				</Grid>
			</div>
		</div>
	);
};

export default Publications;
