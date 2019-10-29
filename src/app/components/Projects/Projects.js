import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import Colors from '../../styles/Colors';
import styles from './ProjectsStyles';
import FeatProject from './FeatProjects';
import OtherProject from './OtherProject';

class Projects extends Component {

    render() {
				const { classes } = this.props;

				// undergrad courses
				const undergradName = [
					'Object Oriented Programming Language',
					'Data Structure and Algorithm part-1',
					'Numerical Methods',
					'Data Structure and Algorithm part-2',
				];
				const undergradDescription = [
					'c++ and java were tought as Object oriented programming languages',
					'Basic data structures like Arraylist, linked-list, binary search tree, heap, graph were taught. Some greedy techniques were also introduced',
					'Numerical Methods like Bisection Method, Runge-Kutta methods were taught using Matlab',
					'Data structures like Hashing, Red-Black Tree and graph algortihms like Floyed-Warshall, Bellman-Ford, Ford-Fulkerson, Prim\'s, Kruskals algorithm were taught'
				];
				const undergradGitURL = [
					'https://github.com/Waqar-107/CSE-108-Object-Oriented-Programming-Language',
					'https://github.com/Waqar-107/CSE-204-Data-Structure-and-Algorithm-1',
					'https://github.com/Waqar-107/CSE-218-Numerical-Methods',
					'https://github.com/Waqar-107/CSE-208-Data-Structure-and-Algorithm-2'
				];
				const undergradTech = [
					['c++', 'java'],
					['c++'],
					['Matlab'],
					['c++'],
				];
        
        return (
            <div className={classes.mainBody}>
              <div className={classes.heading}>
                <div 
                  style={{color: Colors.themeFontColor, marginRight: '15px'}}
                >03.</div>
                <div 
                  style={{color: Colors.nameColor, marginRight: '15px'}}
                >Things I've Developed</div>
                <div 
                  style={{backgroundColor: Colors.lineColor}} className={classes.line}
                ></div>
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

								<div className={classes.myCourses}>Codes I Wrote For Undergrad</div>
								<div className={classes.underGradCode}>
									{
										undergradName.map((data, idx) => (
											<OtherProject
												key={idx}
												projectName={data}
												projectDescription={undergradDescription[idx]}
												gitURL={undergradGitURL[idx]}
												technologiesUsed={undergradTech[idx]}
											/>
										))
									}
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