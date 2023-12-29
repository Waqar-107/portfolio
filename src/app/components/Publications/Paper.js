import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";


const Paper = ({data}) => {
	const classes = styles();

	return (
		<div>
      <div className={classes.name}>{data.name}</div>
      <div className={classes.author}>
        {
          data.authors.map((name, idx) => (
            <p className={name === "Waqar Hassan Khan" ? classes.IAmAuthor : classes.otherAuthors} key={idx}>{name}{idx < data.authors.length - 1 ? "," : ""}</p>
          ))
        }
      </div>
      <div className={classes.venue}>{data.venue}</div>
      <div className={classes.paperLinkContainer}>
        <a className={classes.link} href={data.paperLink} target="_blank">Paper</a>
      </div>
		</div>
	);
};

Paper.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Paper;
