import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import styles from "./styles";

const PublicationCard = ({ data }) => {
  const classes = styles();

  return (
    <div className={classes.publicationCard}>
      <div className={classes.pubTopRow}>
        <div>
          <span className={classes.pubType}>{data.type}</span>
          {data.rank && <span className={classes.pubType} style={{marginLeft: 5}}>{data.rank}</span>}
        </div>
        {data.year && <span className={classes.pubYear}>{data.year}</span>}
      </div>

      <a
        className={classes.pubTitle}
        href={data.paperLink || data.posterLink || data.datasetLink}
        target="_blank"
        rel="noreferrer"
      >
        {data.name}
      </a>

      <div className={classes.pubVenue}>
        {data.venueLink ? (
          <a href={data.venueLink} target="_blank" rel="noreferrer">
            {data.venue}
          </a>
        ) : (
          data.venue
        )}
      </div>

      <div className={classes.pubAuthors}>
        {data.authors.map((author, index) => (
          <span
            key={author}
            className={
              author === "Waqar Hassan Khan"
                ? classes.myName
                : classes.authorName
            }
          >
            {author}
            {index < data.authors.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>

      <div className={classes.pubLinks}>
        {data.paperLink && (
          <a href={data.paperLink} target="_blank" rel="noreferrer">
            Paper
          </a>
        )}
        {data.posterLink && (
          <a href={data.posterLink} target="_blank" rel="noreferrer">
            Poster
          </a>
        )}
        {data.datasetLink && (
          <a href={data.datasetLink} target="_blank" rel="noreferrer">
            Dataset
          </a>
        )}
        {data.venueLink && (
          <a href={data.venueLink} target="_blank" rel="noreferrer">
            Venue
          </a>
        )}
      </div>
    </div>
  );
};

PublicationCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PublicationCard;
