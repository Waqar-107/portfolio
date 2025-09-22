import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import styles from "./styles";


const Poster = ({ data }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img className={classes.posterImage} src={data.posterImage} alt="Poster" />
      </div>
      <div className={classes.textContainer}>
        <p className={`${classes.container} ${classes.detailsContainer}`}>
          <span className={classes.author}>
            {
              data.authors.map((name, idx) => (
                <span className={name === "Waqar Hassan Khan" ? classes.IAmAuthor : classes.otherAuthors} key={idx}>{name}{idx < data.authors.length - 1 ? ", " : "."}</span>
              ))
            }
          </span>&nbsp;
          <span className={classes.name}><strong>{data.name}</strong></span>.&nbsp;
          <a className={classes.venue} target="_blank" href={data.venueLink}>{data.venue}</a>
          .
          [<a className={classes.link} href={data.posterLink} target="_blank">Poster</a>]
        </p>
      </div>
    </div>
  );
};

Poster.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Poster;
