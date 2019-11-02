import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import { fetchGitStatus } from './cpAxios';
import Colors from '../../styles/Colors';

const styles = theme => ({

  outerSurface: {
    height: '25vh',

    marginLeft: '5px',
    marginRight: '5px',
    marginTop: '30px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      width: '80vw',
    },

    [theme.breakpoints.up('md')]: {
      width: '23vw',
    },

    backgroundColor: Colors.projectBox,
    cursor: 'pointer',
  },

  uno: {
    width: '100%',
    height: '25%',

    display: 'inline-flex',
  },

  uno1: {
    height: '100%',
    width: '60%',
  },

  uno2: {
    height: '100%',
    width: '40%',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
  },

  dos: {
    width: '100%',
    height: '50%',
  },

  pname: {
    fontSize: '22px',
    fontWeight: '400',
    color: Colors.nameColor,

    marginLeft: '15px',
    marginTop: '15px',
  },

  pdesc: {
    fontSize: '18px',
    color: Colors.iconColor,

    marginLeft: '15px',
    marginTop: '10px',
  },

  tres: {
    width: '100%',
    height: '25%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',

    // backgroundColor: 'cyan',
  },

  icon: {
    height: '40px',
    width: '20px',

    cursor: 'pointer',
    marginTop: '15px',
    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s',
  },

  iconGitStat: {
    height: '40px',
    width: '20px',
  },

  SVGCP: {
    width: '100%',
    height: '80%',
    marginTop: '20%',

    fill: Colors.iconColor,
    '&:hover': {
      fill: Colors.themeFontColor,
    }
  },

  loj: {
    width: '100%',
    height: '80%',
    marginTop: '35%',
    fontSize: '20px',

    userSelect: 'none',

    color: Colors.iconColor,
    '&:hover': {
      color: Colors.themeFontColor,
    }
  },

  linkCP: {
    textDecoration: 'none',
  }

});

class cpRepo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gitFork: '-',
      gitStar: '-',
      gitData: {},
    }
  }

  componentDidMount() {
    const { gitAPI } = this.props
    fetchGitStatus(gitAPI, (data) => {
      this.setState({ gitData: data }, () => {
        this.parseData()
      });
    });
  }

  parseData = () => {
    const { gitData } = this.state;
    let { gitFork, gitStar } = this.state;

    gitFork = gitData.data.items[0].forks_count;
    gitStar = gitData.data.items[0].stargazers_count;

    this.setState({ gitFork });
    this.setState({ gitStar });
  }

  getGit = () => {
    const { classes } = this.props;
    return <svg className={classes.SVGCP} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 438.549 438.549"><title>Github</title><path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"></path></svg>;
  };

  getOJ = () => {
    const { projectName } = this.props;

    if (projectName === 'Codeforces')
      return this.getCF();
    else if (projectName === 'LightOj')
      return this.getLoj();
    else
      return this.getHack();
  };

  getCF = () => {
    const { classes } = this.props;
    return <svg className={classes.SVGCP} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z" /></svg>;
  };

  getHack = () => {
    const { classes } = this.props;
    return <svg className={classes.SVGCP} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256s192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69c.87-.87 6.26-1.48 17.55-1.83c0-26.23.59-68.59.94-86.32c0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88c.23 4.54-1.58 6-5.74 5.94c-10.13 0-20.27-.11-30.41-.08c-4.1 0-5.87-1.53-5.74-6.11c.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84c-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64c-.1-3.39.95-5.17 4.21-5.2c11.07-.08 22.15-.13 33.23-.06c3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84c2.88 2.91-33.62 38.69-37.58 38.69z" /></svg>;
  };

  getLoj = () => {
    const { classes } = this.props;
    return <p className={classes.loj}>LOj</p>
  };

  getFork = () => {
    const { classes } = this.props;
    return <svg className={classes.SVGCP} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M6 2a3 3 0 0 1 3 3c0 1.28-.81 2.38-1.94 2.81c.09.46.33 1.02.94 1.82c1 1.29 3 3.2 4 4.54c1-1.34 3-3.25 4-4.54c.61-.8.85-1.36.94-1.82A3.015 3.015 0 0 1 15 5a3 3 0 0 1 3-3a3 3 0 0 1 3 3c0 1.32-.86 2.45-2.05 2.85c-.08.52-.31 1.15-.95 1.98c-1 1.34-3 3.25-4 4.55c-.61.79-.85 1.35-.94 1.81C14.19 16.62 15 17.72 15 19a3 3 0 0 1-3 3a3 3 0 0 1-3-3c0-1.28.81-2.38 1.94-2.81c-.09-.46-.33-1.02-.94-1.81c-1-1.3-3-3.21-4-4.55c-.64-.83-.87-1.46-.95-1.98A3.015 3.015 0 0 1 3 5a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m12 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-6 14a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1z" /></svg>;
  }

  getStar = () => {
    const { classes } = this.props;
    return <svg className={classes.SVGCP} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3z" /></svg>;
  }

  render() {
    const { gitFork, gitStar } = this.state;
    const {
      classes,
      projectName,
      projectDescription,
      profileURL,
      gitURL,
    } = this.props;
    return (
      <div className={classes.outerSurface}>
        <div className={classes.uno}>
          <div className={classes.uno1}>
            <div className={classes.pname}>{projectName}</div>
          </div>
          <div className={classes.uno2}>
            <div className={classes.icon} style={{ marginRight: '10px' }}>
              <a href={gitURL} target="blank" className={classes.linkCP}>
                {this.getGit()}
              </a>
            </div>
            {
              projectName === 'Codebase' || projectName === 'UVA' ? null :
                <div className={classes.icon} style={{ marginRight: '10px' }}>
                  <a href={profileURL} target="blank" className={classes.linkCP}>
                    {this.getOJ()}
                  </a>
                </div>
            }
          </div>
        </div>
        <div className={classes.dos}>
          <div className={classes.pdesc}>{projectDescription}</div>
        </div>
        <div className={classes.tres}>
          <div className={classes.iconGitStat} style={{ marginLeft: '15px' }}>
            {this.getFork()}
          </div>
          <div style={{ marginLeft: '3px', color: Colors.iconColor }}>
            {gitFork}
          </div>
          <div className={classes.iconGitStat} style={{ marginLeft: '10px' }}>
            {this.getStar()}
          </div>
          <div style={{ marginLeft: '3px', color: Colors.iconColor }}>
            {gitStar}
          </div>
        </div>
      </div>
    );
  }
}

cpRepo.propTypes = {
  classes: PropTypes.object.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  gitURL: PropTypes.string.isRequired,
  profileURL: PropTypes.string.isRequired,
  gitAPI: PropTypes.string.isRequired,
}


export default withStyles(styles)(cpRepo);