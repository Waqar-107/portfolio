import React from "react";
import {Grid} from "@material-ui/core";

import data from "./data";
import TitleHead from "../../../components/TitleHead/TitleHead";
import OjBox from "../../../components/ProblemSolving/OjBox";
import styles from "./ProblemSolvingStyles";

const ProblemSolving = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<TitleHead number="05." caption="Problem Solving" />
			</div>

			<div className={classes.content}>
				<div>
					I have participated in a few inter university programming contests and also participated
					in preliminary of ACM-ICPC Dhaka Regional thrice. Mostly I have participated in the
					contests at{" "}
					<a className={classes.link} href="https://codeforces.com/" target="blank">
						CodeForces
					</a>{" "}
					and{" "}
					<a className={classes.link} href="https://leetcode.com/" target="blank">
						LeetCode
					</a>
					.<br />
					<br />I have participated in <span className={classes.stats}>88</span> contests and solved
					about <span className={classes.stats}>1700</span> problems with a max rating of{" "}
					<span className={classes.stats}>1658</span> at Codeforces. In LeetCode I have participated
					in <span className={classes.stats}>7</span> contests and solved about{" "}
					<span className={classes.stats}>430</span> problems with the max rating of{" "}
					<span className={classes.stats}>1609</span>.
					<br />
					<br />I have also participated in{" "}
					<a className={classes.link} href="./hashcode_2019_certificate.pdf" target="blank">
						Google HashCode 2019
					</a>
					<br />
					<br />I used to practice at LightOj, HackerRank and Uva too. Currently I'm concentrating
					on LeetCode to keep up the practice.
				</div>

				<div className={classes.head}>My Codes</div>
				<Grid
					container
					spacing={3}
					direction="row"
					wrap="wrap"
					justify="center"
					alignContent="flex-start"
					alignItems="flex-start">
					{data.data.map((obj, idx) => (
						<Grid item xl={4} lg={4} md={6} sm={6} xs={12} key={idx}>
							<OjBox data={obj} />
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
};

export default ProblemSolving;
