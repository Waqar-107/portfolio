import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Colors from '../../styles/Colors';

const styles = theme => ({
	outer: {
		height: '100%',
		width: '90%',
		position: 'relative',
	},

	lineContainer: {
		height: '100%',
		width: '100%',

		position: 'absolute',

		display: 'flex',
		flexWrap: 'no-wrap',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		alignContent: 'center',
	},

	line: {
		height: '1px',

		[theme.breakpoints.down('770')]: {
			width: '100%',
		},

		[theme.breakpoints.up('770')]: {
			width: '60%',
		},

		backgroundColor: Colors.lineColor,
	},

	capContainer: {
		height: '100%',
		position: 'absolute',

		display: 'flex',
		flexWrap: 'no-wrap',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		alignContent: 'center',

		backgroundColor: Colors.mediumDarkNavy,
	},

	cap: {
		height: '100%',
		width: 'auto',

		position: 'absolute',
	}
});

function titleHead(props) {
	const { classes, caption, number } = props;

	return (
		<div className={classes.outer}>
			<div className={classes.lineContainer}>
				<div className={classes.line}></div>
			</div>
			<div className={classes.capContainer}>
				<div
					style={{ color: Colors.themeFontColor, marginRight: '15px' }}
				>{number}</div>
				<div style={{ color: Colors.nameColor, marginRight: '7px' }}>{caption}</div>
			</div>
		</div>
	);
}

titleHead.propTypes = {
	classes: PropTypes.object.isRequired,
	number: PropTypes.string.isRequired,
	caption: PropTypes.string.isRequired,
}


export default withStyles(styles)(titleHead);