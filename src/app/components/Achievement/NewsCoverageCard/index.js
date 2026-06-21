import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

const NewsCoverageCard = ({ news }) => {
  const classes = styles();

  return (
    <article className={classes.newsEmbed}>
      <div className={classes.newsEmbedHeader}>
        <div>
          <div className={classes.newsPublication}>{news.newspaper_name}</div>
          <div className={classes.newsMeta}>
            {news.date}
            {news.author && ` · ${news.author}`}
          </div>
        </div>

        <a
          href={news.url}
          target="_blank"
          rel="noreferrer"
          className={classes.newsButton}
        >
          Read article
        </a>
      </div>

      <a
        href={news.url}
        target="_blank"
        rel="noreferrer"
        className={classes.newsTitleLink}
      >
        <h3 className={classes.newsTitle}>{news.title}</h3>
      </a>

      {news.subtitle && (
        <p className={classes.newsSubtitle}>{news.subtitle}</p>
      )}
    </article>
  );
};

NewsCoverageCard.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    newspaper_name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string,
  }).isRequired,
};

export default NewsCoverageCard;