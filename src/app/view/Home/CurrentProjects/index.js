import { Grid } from "@material-ui/core";
import { projects } from "./data";
import ProjectBox from "../../../components/Projects/ProjectBox";
import TitleHead from "../../../components/TitleHead";
import styles from "./styles";

const CurrentProjects = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<div className={classes.heading}>
				<TitleHead number="04." caption="Ongoing Projects" />
			</div>

			<div className={classes.content}>
				<Grid
					container
					spacing={3}
					direction="row"
					wrap="wrap"
					justifyContent="space-between"
					alignContent="flex-start"
					alignItems="flex-start">
					{projects.slice(0, 6).map((obj, idx) => (
						<Grid item xl={4} lg={4} md={6} sm={12} xs={12} key={idx}>
							<ProjectBox data={obj} showTopLink={false} />
						</Grid>
					))}
				</Grid>
			</div>
		</div>
	);
};

export default CurrentProjects;
