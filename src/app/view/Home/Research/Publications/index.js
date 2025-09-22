import React from "react";
import { Grid } from "@material-ui/core";

import { conference_other_tracks, arxiv_papers, poster_events } from "./data";
import Paper from "../../../../components/Paper";
import Poster from "../../../../components/Poster";
import styles from "./styles";

const Publications = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.head} style={{ marginTop: 100 }}>Peer Reviewed Workshop and Special Track Publications</div>
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

				<div className={classes.head}>Poster Events</div>
				<Grid
					style={{ margin: 0, marginBottom: 20 }}
					container
					spacing={3}
					direction="row"
					wrap="wrap"
					justifyContent="space-between"
					alignContent="flex-start"
					alignItems="flex-start">
					{poster_events.map((obj, idx) => (
						<Grid item xl={4} lg={4} md={6} sm={12} xs={12} key={idx}>
							<Poster data={obj} />
						</Grid>
					))}
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
