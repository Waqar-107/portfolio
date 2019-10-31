import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './ProjectsStyles';

import TitleHead from '../Header//titleHead'; 
import FeatProject from './FeatProjects';
import OtherProject from './OtherProject';
import { fetchProjects } from './myProjects';
import { fetchUgrad } from './myUgrad';

class Projects extends Component {
		constructor(props)
		{
			super(props);
			this.state = {
				projects: fetchProjects(),
				ugrad: fetchUgrad(),
				seeMore: true,
				seeMoreUgrad: true,
			}
		}

		handleSeeMore = () => {
			let { seeMore } = this.state;
			seeMore = !seeMore;

			this.setState({ seeMore });
		}

		handleUgrad = () => {
			let { seeMoreUgrad } = this.state;
			seeMoreUgrad = !seeMoreUgrad;

			this.setState({ seeMoreUgrad });
		}

    render() {
				const { classes } = this.props;
				const { projects, seeMore, seeMoreUgrad, ugrad } = this.state;
        
        return (
            <div className={classes.mainBody}>
              <div className={classes.heading}>
								<TitleHead number="04." caption="Things I've Developed" />
              </div>

              <div className={classes.content}>
                <FeatProject mirror={false} 
									imageName="VashaShikkha" 
									projectName="vashaShikkha"
									projectDescription="An application that helps us learn English in a very interactive way. In this app, we can practice speaking, reading, listening and writing. Different user will be assigned different tasks based on their chosen topic. In this app, the user can practice speaking, reading, listening and writing.
									This is a group project where i have worked in the web-app team."
									technologiesUsed={["React"]}
									deployedLink=""
									gitURL=""
                />
                
                <FeatProject mirror={true} 
									imageName="Chess"
									projectName="ChessMaestro"
									projectDescription="A multiplayer chess game that i built as a project in my
									level 1, term 2 using java. For the GUI  javafx has been used"
									technologiesUsed={["java", "javaFX"]}
									deployedLink=""
									gitURL="https://github.com/Waqar-107/ChessMaestro"
                />

								<div className={classes.myProjects}>My Projects</div>
								<div className={classes.others}>
									{
										projects.map((data, idx) => (
											seeMore === true && idx > 2 ? null :
											<OtherProject
												key={idx}
												projectName={data.name}
												projectDescription={data.description}
												gitURL={data.gitURL}
												technologiesUsed={data.tech}
											/>
										))
									}
								</div>
								
								<div className={classes.btnContainer}>
									<div 
										className={classes.seeMore}
										onClick={() => this.handleSeeMore()}
									>{seeMore ? 'More Projects' : 'Fewer Projects'}</div>
								</div>

								<div className={classes.myProjects}>Undergraduate Courses</div>
								<div className={classes.others}>
									{
										ugrad.map((data, idx) => (
											seeMoreUgrad === true && idx > 2 ? null :
											<OtherProject
												key={idx}
												projectName={data.name}
												projectDescription={data.description}
												gitURL={data.gitURL}
												technologiesUsed={data.tech}
											/>
										))
									}
								</div>
								<div className={classes.btnContainer}>
									<div 
										className={classes.seeMore}
										onClick={() => this.handleUgrad()}
									>{seeMoreUgrad ? 'More Courses' : 'Fewer Courses'}</div>
								</div>
              </div>
            </div>
        );
    }
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Projects);