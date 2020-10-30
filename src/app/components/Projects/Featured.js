import React from "react";
import PropTypes from "prop-types";

import GithubIcon from "../../components/Icons/Github";
import DeployIcon from "../../components/Icons/Deployment";

import ChessImg from "../../assets/featured/chess.png";
import CESImg from "../../assets/featured/ces.jfif";
import VashaShikhhaImg from "../../assets/featured/vashaShikkha.png";

import styles from "./FeaturedStyles";

const Featured = ({data, mirror}) => {
	const classes = styles();

	const selectImage = (name) => {
		if (name === "Centre for Enery Studies") return CESImg;
		else if (name === "ChessMaestro") return ChessImg;
		return VashaShikhhaImg;
	};

	return (
		<div className={classes.root}>
			<div
				className={classes.lowerLevel}
				style={{justifyContent: mirror ? "flex-end" : "flex-start"}}>
				<img src={selectImage(data.name)} alt="" className={classes.image} />
			</div>

			<div
				className={classes.lowerLevel}
				style={{zIndex: 2, justifyContent: mirror ? "flex-end" : "flex-start"}}>
				<div className={classes.imageCover}></div>
			</div>

			<div className={classes.upperLevel}></div>
		</div>
	);
};

Featured.propTypes = {
	data: PropTypes.object.isRequired,
	mirror: PropTypes.number.isRequired,
};

export default Featured;
