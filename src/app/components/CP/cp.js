import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import TitleHead from '../Header/titleHead';
import CPRepo from './cpRepo';
import { fetchUserDetail, fetchRating } from './cpAxios';

import styles from './cpStyles';
import Colors from '../../styles/Colors';

class CP extends Component {
  constructor(props) {
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
      this.setState({ userDetails: data }, () => {
        this.parse1()
      });
    });

    fetchRating((data) => {
      this.setState({ userRating: data }, () => {
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
            caption="Problem Solving" />
        </div>

        <div className={classes.content}>
          <div className={classes.para} style={{ color: Colors.motoColor }}>
            <p>I have participated in a few inter university programming contests and also participated in preliminary of acm-icpc Dhaka Regional thrice.<br /><br />
              Mainly i participate in contests held in <a className={classes.link} href="https://codeforces.com/" target="blank">Codeforces</a>. I have participated in <b className={classes.highlight}>{totalContest}</b> contests. My current rating is <b className={classes.highlight}>{currentRating}</b> and i have a maximum  rating of <b className={classes.highlight}>{mxRating}</b>.
                  I have solved about <b className={classes.highlight}>1500</b> problems and in the top <b className={classes.highlight}>250</b> in the standings made in terms of the number of solved problems.
                  <br /><br />
              Also i practice in <a className={classes.link} href="http://lightoj.com/login_main.php" target="blank">Light Oj</a> and <a className={classes.link} href="https://www.hackerrank.com/" target="blank">HackerRank</a>.<br /><br />

              I have participated in <a className={classes.link} href="./hashcode_2019_certificate.pdf" target="blank">Google HashCode 2019</a><br/>
            </p>
          </div>

          <div className={classes.solved}>My Codes</div>
          <div className={classes.repo}>
            <CPRepo
              projectName="Codeforces"
              profileURL="https://codeforces.com/profile/_lucifer_"
              gitURL="https://github.com/Waqar-107/Codeforces"
              projectDescription="accepted problems in Codeforces"
              gitAPI="https://api.github.com/search/repositories?q=user%3AWaqar-107+repo%3Acodeforces+codeforces"
            />
            <CPRepo
              projectName="LightOj"
              profileURL="http://lightoj.com/volume_userstat.php?user_id=35486"
              gitURL="https://github.com/Waqar-107/LightOJ"
              projectDescription="accepted problems in Light Oj"
              gitAPI="https://api.github.com/search/repositories?q=user%3AWaqar-107+repo%3ALightOj+LightOj"
            />
            <CPRepo
              projectName="HackerRank"
              profileURL="https://www.hackerrank.com/waqar_107"
              gitURL="https://github.com/Waqar-107/Hackerrank"
              projectDescription="programming language practices and problems solved in HackerRank"
              gitAPI="https://api.github.com/search/repositories?q=user%3AWaqar-107+repo%3AHackerrank+Hackerrank"
            />
            <CPRepo
              projectName="UVA"
              profileURL=""
              gitURL="https://github.com/Waqar-107/UVa"
              projectDescription="problems solved in UVA"
              gitAPI="https://api.github.com/search/repositories?q=user%3AWaqar-107+repo%3AUVa+UVa"
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