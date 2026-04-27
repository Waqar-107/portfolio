import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import styles from "./styles";


const Paper = ({ data }) => {
  const classes = styles();

  return (
    <div className={classes.root}>
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
        &nbsp;
        [<a className={classes.link} href={data.paperLink} target="_blank">{data.isDataset ? "Dataset" : "Paper"}</a>
        {
          data.posterLink ?
            <span>,&nbsp;<a className={classes.link} href={data.posterLink} target="_blank">Poster</a></span> : ""}
        ]
      </p>
    </div>
  );
};

Paper.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Paper;
