import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import TitleHead from '../Header/titleHead';

import DP from '../../assets/khan.jpg';
import styles from './AboutMeStyles';

function AboutMe(props) {
	const { classes } = props;

	return (
		<div className={classes.mainBody}>
			<div className={classes.heading}>
				<TitleHead number="01." caption="About Me" />
			</div>

			<div className={classes.content}>
				<div className={classes.mobile}>
					<div className={classes.mobilePara}>
						<p>Hi! I'm Waqar. I am in the final year of my undergrad course at
												<a className={classes.link} href="https://www.buet.ac.bd/web/" target="blank"> Buet </a>
							and expecting to complete graduation by July, 2020. My major is in
												<a className={classes.link} href="https://cse.buet.ac.bd/" target="blank"> Computer Science and Engineering. </a>
							<br /><br />I am currently working on a group project called <i>vashaShikkha</i> that will help to teach English at primary school level. The ui will also be in Bangla so that native Bengali kids finds it easier to learn.
												<br /><br />I am doing my thesis work on <i>Semantic specification of program for development</i>. The target is to develop ontology from requirement analysis, create ontology from source code using a parser and then check if we have made the software we wanted.</p>
					</div>
					<div className={classes.mobileImage}>
						<div className={classes.mobileDpFrame}></div>
						<img className={classes.mobileDp} src={DP} alt="" />
						<div className={classes.mobileDpCover}></div>
					</div>
				</div>

				<div className={classes.web}>
					<div className={classes.webPara}>
						<p>Hi! I'm Waqar. I am in the final year of my undergrad course at
											 <a className={classes.link} href="https://www.buet.ac.bd/web/" target="blank"> Buet </a>
							and expecting to complete graduation by May, 2020. My major is in
											 <a className={classes.link} href="https://cse.buet.ac.bd/" target="blank"> Computer Science and Engineering. </a>
							<br /><br />I am currently working on a group project called <i>vashaShikkha</i> that will help to teach English at primary school level. The ui will also be in Bangla so that native Bengali kids finds it easier to learn.
											<br /><br />I am doing my thesis work on <i>Semantic specification of program for development</i>. The target is to develop ontology from requirement analysis, create ontology from source code using a parser and then check if we have made the software we wanted.</p>
					</div>
					<div className={classes.webImage}>
						<div className={classes.webImageContainer}>
							<img className={classes.dp} src={DP} alt="" />
							<div className={classes.dpCover}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

AboutMe.propTypes = {
	classes: PropTypes.object.isRequired
}


export default withStyles(styles)(AboutMe);