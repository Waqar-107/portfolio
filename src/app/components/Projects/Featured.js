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
		if (name === "Centre for Energy Studies") return CESImg;
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

			<div className={classes.mobileMidLayer}></div>

			<div
				className={classes.lowerLevel}
				style={{zIndex: 2, justifyContent: mirror ? "flex-end" : "flex-start"}}>
				<div className={classes.imageCover}></div>
			</div>

			<div
				className={classes.upperLevel}
				style={{
					alignContent: mirror ? "flex-start" : "flex-end",
					alignItems: mirror ? "flex-start" : "flex-end",
				}}>
				<div className={classes.heading}>Featured Project</div>
				<div className={classes.name}>{data.name}</div>
				<div className={classes.description} style={{textAlign: mirror ? "left" : "right"}}>
					{data.description}
				</div>
				<div
					className={classes.tagContainer}
					style={{justifyContent: mirror ? "flex-start" : "flex-end"}}>
					{data.tags.map((obj, idx) => (
						<div
							className={classes.tag}
							key={idx}
							style={{marginLeft: mirror ? 0 : 10, marginRight: mirror ? 10 : 0}}>
							{obj}
						</div>
					))}
				</div>

				<div
					className={classes.iconContainer}
					style={{justifyContent: mirror ? "flex-start" : "flex-end"}}>
					{data.gitURL ? (
						<a href={data.gitURL} alt="" target="blank" style={{marginRight: 15}}>
							<GithubIcon iconStyles={classes.icon} />
						</a>
					) : null}

					{data.deployedLink ? (
						<a href={data.deployedLink} alt="" target="blank">
							<DeployIcon iconStyles={classes.icon} />
						</a>
					) : null}
				</div>
			</div>
		</div>
	);
};

Featured.propTypes = {
	data: PropTypes.object.isRequired,
	mirror: PropTypes.number.isRequired,
};

export default Featured;
