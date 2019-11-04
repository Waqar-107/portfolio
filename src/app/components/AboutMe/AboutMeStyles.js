const styles = theme => ({
  mainBody: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
  },

  heading: {
    height: '10vh',
    width: '100%',

    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',

    fontSize: '24px',
    fontWeight: '600',
  },


  content: {
    width: '100%',
  },

  mobile: {
    // height: '110vh',
    width: '100%',

    display: 'flex',
    flexWrap: 'no-wrap',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',

    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },

    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  web: {
    width: '100%',

    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },

    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  webPara: {
    width: '45%',

    fontSize: '22px',
    fontWeight: '500',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',

    color: '#8892b0',
  },

  mobilePara: {
    width: '90%',

    fontSize: '22px',
    fontWeight: '500',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',

    marginBottom: '20vh',
    color: '#8892b0',
  },

  webImage: {
    width: '45%',
    marginTop: '2%',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'center',
  },

  mobileImage: {
    width: '90%',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  webImageContainer: {
    height: '45vh',
    width: '45vh',
    position: 'relative',

    backgroundColor: '#64FFDA',

    '&:hover': {
      backgroundColor: 'transparent',
      '&:after': {
        top: '15px',
        left: '15px',
      }
    },

    '&:before': {
      content: "''",
      display: 'block',
      position: 'absolute',
      height: '45vh',
      width: '45vh',

      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

      backgroundColor: '#0a192f',
      mixBlendMode: 'screen',
    },

    '&:after': {
      content: "''",
      display: 'block',
      position: 'absolute',
      height: '45vh',
      width: '45vh',

      border: '2px solid #64FFDA',
      top: '20px',
      left: '20px',
      zIndex: '-1',

      transition: 'all 0.1s ease-in',
    },
  },

  dp: {
    height: '45vh',
    width: '45vh',

    position: 'absolute',

    objectFit: 'cover',
    objectPosition: 'center right',
  },

  mobileDp: {
    height: '30vh',
    width: '30vh',

    position: 'absolute',

    objectFit: 'cover',
    objectPosition: 'center right',
  },

  dpCover: {
    height: '45vh',
    width: '45vh',

    position: 'absolute',

    backgroundColor: '#64FFDA',
    opacity: '0.3',
    cursor: 'pointer',

    '&:hover': {
      opacity: 0,
      dpFrame: {
        width: '43vh',
        height: '43vh',
      }
    },
  },

  mobileDpCover: {
    height: '30vh',
    width: '30vh',

    position: 'absolute',

    backgroundColor: '#64FFDA',
    opacity: '0.3',
  },

  mobileDpFrame: {
    position: 'absolute',
    height: '30vh',
    width: '30vh',

    marginLeft: '1.5vh',
    marginTop: '1.5vh',

    border: 'solid 3px #64FFDA',
  },

  link: {
    textDecoration: 'none',
    color: '#64FFDA',
  }
});

export default styles;