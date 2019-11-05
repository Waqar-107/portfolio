const styles = theme => ({
  intro: {
    height: '100%',
    width: '90%',
    position: 'absolute'
  },

  hi: {
    transitionDelay: '100ms',
    wordSpacing: '5px',
    lineHeight: '10px',

    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
      marginTop: '25%',
      marginBottom: '3%',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
      marginTop: '7%',
      marginBottom: '2%',
    },
  },

  name: {
    // marginBottom: '1%',
    transitionDelay: '200ms',
    fontWeight: '600',

    [theme.breakpoints.down('md')]: {
      fontSize: '40px',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '70px',
    },
  },

  moto: {
    transitionDelay: '300ms',
    fontWeight: '600',

    [theme.breakpoints.down('md')]: {
      fontSize: '50px',
      marginBottom: '10%',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '70px',
      marginBottom: '2%',
    },
  },

  shortDescription: {
    fontWeight: '300',

    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
      wordSpacing: '5px',
      marginBottom: '10%',
    },

    [theme.breakpoints.up('md')]: {
      fontSize: '25px',
      wordSpacing: '6px',
      marginBottom: '8%',
    },
  },

  mailMe: {
    width: '150px',
    height: '60px',

    border: 'solid 1px #64FFDA',
    color: '#64FFDA',
    fontSize: '18px',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#293d5a',
    }
  },

  mailLink: {
    width: '100%',
    height: '100%',
    textDecoration: 'none',
    userSeclect: 'none',
    color: '#64FFDA',

    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  }
});

export default styles;