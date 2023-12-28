import React from "react";
import {Grid} from "@material-ui/core";

import {posters, papers} from "./data";
import Poster from "../../../components/Publications/Poster";
import TitleHead from "../../../components/TitleHead/TitleHead";
import styles from "./styles";
import "../Projects/transition.css";

// import posterImg from "../../../assets/publications/posters/edtech_soups23.jpg"

const Publications = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<TitleHead number="04." caption="Publications" />
			</div>

      <div className={classes.head}>Posters</div>
			<div className={classes.content}>
				<Grid container direction="column" style={{marginBottom: 60}}>
					{posters.map((obj, idx) => (
						<Grid
							item
							xl={12}
							lg={12}
							md={12}
							sm={12}
							xs={12}
							key={idx}
							style={{marginBottom: idx < posters.length - 1 ? 100 : 0}}
							data-aos="fade-up"
							data-aos-once="true"
							data-aos-offset="10"
							data-aos-delay="10"
							data-aos-duration={1000 + idx * 100}
							data-aos-easing="ease-in-out">
							<Poster data={obj} />
						</Grid>
					))}
				</Grid>

				{/*---------------------------My Projects-----------------------------------*/}
				<div className={classes.head}>Papers</div>
				{/* <Grid
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
				</Grid> */}
			</div>
		</div>
	);
};

export default Publications;
