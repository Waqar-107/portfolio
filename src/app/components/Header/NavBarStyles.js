const styles = theme => ({
  mainBody: {
    height: '10vh',
    width: '100%',

    position: 'fixed',
    transition: 'top 0.3s',
    display: 'inline-flex',

    zIndex: '5',
  },

  logo: {
    height: '100%',
    width: '20%',

    // backgroundColor: 'cyan',
  },

  navBody: {
    height: '100%',
    width: '80%',
  },

  webNav: {
    height: '100%',
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },

    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },

  mobileNav: {
    height: '100%',
    width: '100%',

    //backgroundColor: 'yellow',

    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },

    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },

  resume: {
    height: '40px',
    width: '80px',

    marginRight: '60px',
    borderRadius: '5px',
    border: '0.5px solid #64FFDA',
    color: '#64FFDA',

    //backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

    '&:hover': {
      backgroundColor: '#293d5a',
    }
  },

  linkNav: {
    textDecoration: 'none',
    color: '#a8b2d1',

    fontSize: '16px',
  },

  p1: {
    display: 'inline-flex',
    color: '#64FFDA',
  },

  p2: {
    display: 'inline-flex',
    color: '#a8b2d1',

    '&:hover': {
      color: '#64FFDA',
    }
  },

  navItem: {
    cursor: 'pointer',
    marginRight: '20px',
  }


});

export default styles;