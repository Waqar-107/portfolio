import React from "react";
import PropTypes from "prop-types";
import EmojiEventsOutlinedIcon from "@material-ui/icons/EmojiEventsOutlined";
import styles from "./styles";

const PosterGallery = ({ posters }) => {
  const classes = styles();

  if (!Array.isArray(posters) || posters.length === 0) return null;

  return (
    <div className={classes.posterGrid}>
      {posters.map((poster) => {
        const posterHref = poster.posterLink || poster.image;

        return (
          <div className={classes.posterCard} key={poster.title}>
            <a
              href={posterHref}
              target="_blank"
              rel="noreferrer"
              className={classes.posterImageWrapper}
            >
              <img
                src={poster.image}
                alt={poster.title}
                className={classes.posterImage}
              />
            </a>

            <div className={classes.posterTopRow}>
              <span className={classes.posterType}>
                {poster.type || "Poster Event"}
              </span>
              {poster.year && (
                <span className={classes.posterYear}>{poster.year}</span>
              )}
            </div>

            <a
              href={posterHref}
              target="_blank"
              rel="noreferrer"
              className={classes.posterTitle}
            >
              {poster.title}
            </a>

            {poster.venue && (
              <div className={classes.posterVenue}>{poster.venue}</div>
            )}

            {poster.authors && (
              <div className={classes.posterAuthors}>
                {poster.authors.map((author, index) => (
                  <span
                    key={author}
                    className={
                      author === "Waqar Hassan Khan"
                        ? classes.myName
                        : classes.authorName
                    }
                  >
                    {author}
                    {index < poster.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            )}

            <div className={classes.posterBottomRow}>
              <div className={classes.posterLinks}>
                {poster.posterLink && (
                  <a href={poster.posterLink} target="_blank" rel="noreferrer">
                    View Poster
                  </a>
                )}
              </div>

              {poster.award && (
                <div className={classes.posterAward}>
                  <EmojiEventsOutlinedIcon className={classes.posterAwardIcon} />
                  <span className={classes.posterAwardText}>{poster.award}</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

PosterGallery.propTypes = {
  posters: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      year: PropTypes.string,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      venue: PropTypes.string,
      image: PropTypes.string.isRequired,
      posterLink: PropTypes.string,
      award: PropTypes.string,
    })
  ).isRequired,
};

export default PosterGallery;