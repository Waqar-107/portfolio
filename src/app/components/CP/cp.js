import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import TitleHead from '../Header/titleHead'; 
import CPRepo from './cpRepo';
import { fetchUserDetail, fetchRating } from './cpAxios';

import styles from './cpStyles';
import Colors from '../../styles/Colors';

class CP extends Component {
		constructor(props)
		{
			super(props);
			this.state = {
        userDetails: {},
        userRating: {},
        
        currentRating: 'loading',
        mxRating: 'loading',
        totalContest: 'loading',
			}
    }
    
    componentDidMount() {
      fetchUserDetail((data) => {
        this.setState({ userDetails : data },  () => {
          this.parse1()
        });
      });

      fetchRating((data) => {
        this.setState({ userRating : data },  () => {
          this.parse2()
        });
      });
    }

    parse1 = () => {
      let { mxRating, currentRating } = this.state;
      const { userDetails } = this.state;

      mxRating = userDetails.data.result[0].maxRating;
      currentRating = userDetails.data.result[0].rating;
      
      this.setState({ mxRating });
      this.setState({ currentRating });
    }

    parse2 = () => {
      let { totalContest } = this.state;
      const { userRating } = this.state;

      totalContest = userRating.data.result.length;
      this.setState({ totalContest });
    }

    render() {
        const { classes } = this.props;
        const { totalContest, mxRating, currentRating } = this.state;
				
        return (
            <div className={classes.mainBody}>
              <div className={classes.heading}>
                <TitleHead number="03." 
                caption="My Competitive Programming Career" />
              </div>

              <div className={classes.content}>
                <div className={classes.para} style={{color: Colors.motoColor}}>
                  <p>I have participated in a few inter university programming contests and also participated in preliminary of acm-icpc Dhaka Regional thrice.<br/>
                  Mainly i participate in contests held in <a className={classes.link} href="https://codeforces.com/" target="blank">Codeforces</a>. I have participated in <b className={classes.highlight}>{totalContest}</b> contests. My current rating is <b className={classes.highlight}>{currentRating}</b> and i have a maximum  rating of <b className={classes.highlight}>{mxRating}</b>.
                  I have solved about <b className={classes.highlight}>1500</b> problems and in the top <b className={classes.highlight}>250</b> in the standings made in terms of the number of solved problems. 
                  <br/>
                  </p>
                </div>

                <div className={classes.solved}>My Codes</div>
                <div className={classes.repo}>
                  <CPRepo
                    projectName="Codeforces"
                    profileURL="https://codeforces.com/profile/_lucifer_"
                    gitURL=""
                    projectDescription=""
                  />
                  <CPRepo
                    projectName="LightOj"
                    profileURL="http://lightoj.com/volume_userstat.php?user_id=35486"
                    gitURL=""
                    projectDescription=""
                  />
                  <CPRepo
                    projectName="HackerRank"
                    profileURL="https://www.hackerrank.com/waqar_107"
                    gitURL=""
                    projectDescription=""
                  />
                  <CPRepo
                    projectName="UVA"
                    profileURL=""
                    gitURL=""
                    projectDescription=""
                  />
                  <CPRepo
                    projectName="Codebase"
                    profileURL=""
                    gitURL=""
                    projectDescription=""
                  />
                </div>
              </div>
            </div>
        );
    }
}

CP.propTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(CP);