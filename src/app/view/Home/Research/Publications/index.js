import React from "react";
import { Grid } from "@material-ui/core";
import { peer_reviwed, poster_events, datasets } from "./data";
import PosterGallery from "../../../../components/PosterGallery";
import PublicationCard from "../../../../components/PublicationCard";
import styles from "./styles";


const Publications = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.content}>
				<div className={classes.head} style={{marginBottom: 20}}>Publications</div>
				<Grid container direction="column" style={{ marginBottom: 20 }}>
					{peer_reviwed.map((obj, idx) => (
						<Grid item xl={12} lg={12} md={12} sm={12} xs={12} key={idx}>
							<PublicationCard data={obj}/>
						</Grid>
					))}
				</Grid>

				<div className={classes.head} style={{marginBottom: 20}}>Research Artifacts</div>
				<Grid container direction="column" style={{ marginBottom: 20 }}>
					{datasets.map((obj, idx) => (
						<Grid item xl={12} lg={12} md={12} sm={12} xs={12} key={idx}>
							<PublicationCard data={obj}/>
						</Grid>
					))}
				</Grid>

				<div className={classes.head}>Poster Events</div>
				<PosterGallery posters={poster_events} />
			</div>
		</div>
	);
};

export default Publications;
