import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import styles from "./PosterStyles";


const Poster = ({data}) => {
	const classes = styles();

	return (
		<div className={classes.root}>
      <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
        <div className={classes.container}>
          <img src={data.imageLink} className={classes.posterImage}/>
        </div>
      </Grid>
      <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
        <div className={`${classes.container} ${classes.detailsContainer}`}>
          <div className={classes.name}>{data.name}</div>
          <div className={classes.author}>
            {
              data.authors.map((name, idx) => (
                <p className={name === "Waqar Hassan Khan" ? classes.IAmAuthor : classes.otherAuthors} key={idx}>{name}{idx < data.authors.length - 1 ? "," : ""}</p>
              ))
            }
          </div>
          <div className={classes.venue}>{data.venue}</div>
          <div className={classes.linkContainer}>
            <a className={classes.link} href={data.posterLink} target="_blank">Poster</a>
            <a className={classes.link} href={data.paperLink} target="_blank">Abstract</a>
          </div>
        </div>
      </Grid>
		</div>
	);
};

Poster.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Poster;
