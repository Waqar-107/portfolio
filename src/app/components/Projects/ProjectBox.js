import React from "react";

import PropTypes from "prop-types";

import DocumentIcon from "../../components/Icons/Document";
import GithubIcon from "../../components/Icons/Github";
import DeployIcon from "../../components/Icons/Deployment";

import styles from "./ProjectBoxStyles";

const ProjectBox = ({data}) => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.uno}>
				<DocumentIcon iconStyles={classes.doc_icon} />
				<div className={classes.iconContainer}>
					{data.gitURL && data.gitURL.length > 0 ? (
						<a href={data.gitURL} target="blank">
							<GithubIcon iconStyles={`${classes.icon} ${classes.icon_hover}`} />
						</a>
					) : null}
					{data.deployedLink ? (
						<a href={data.deployedLink} target="blank">
							<DeployIcon iconStyles={`${classes.icon} ${classes.icon_hover} ${classes.ml10}`} />
						</a>
					) : null}
				</div>
			</div>
			<div className={classes.dos}>
				<div className={classes.name}>{data.name}</div>
				<div className={classes.description}>{data.description}</div>
			</div>
			<div className={classes.tres}>
				{data.tags.map((tag, idx) => (
					<div key={idx} className={classes.tag}>
						{tag}
					</div>
				))}
			</div>
		</div>
	);
};

ProjectBox.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ProjectBox;
