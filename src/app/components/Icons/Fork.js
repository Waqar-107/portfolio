import React from "react";
import PropTypes from "prop-types";

const Fork = (props) => {
	return (
		<svg
			className={props.iconStyles}
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
			width="1em"
			height="1em"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24">
			<path
				d="M12 20a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm1.033-3.817A3.001 3.001 0 1 1 11 16.17v-1.047c0-.074.003-.148.008-.221a1 1 0 0 0-.462-.637L7.46 12.42A3 3 0 0 1 6 9.845V7.829a3.001 3.001 0 1 1 2 0v2.016a1 1 0 0 0 .487.858l3.086 1.846a3 3 0 0 1 .443.324a3 3 0 0 1 .444-.324l3.086-1.846a1 1 0 0 0 .487-.858V7.841A3.001 3.001 0 0 1 17 2a3 3 0 0 1 1.033 5.817v2.028a3 3 0 0 1-1.46 2.575l-3.086 1.846a1 1 0 0 0-.462.637c.005.073.008.147.008.22v1.06zM7 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"
				fill="#a8b2d1"
			/>
			<rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
		</svg>
	);
};

Fork.propTypes = {
	iconStyles: PropTypes.string.isRequired,
};

export default Fork;
