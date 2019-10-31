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

    [theme.breakpoints.down('md')]:{
      display: 'none',
    },

    [theme.breakpoints.up('md')]:{
      display: 'flex'
    }
  },

  mobileNav: {
    height: '100%',
    width: '100%',

    [theme.breakpoints.down('md')]:{
      display: 'flex',
    },

    [theme.breakpoints.up('md')]:{
      display: 'none'
    }
  },

  resume: {
    height: '80%',
    width: '10vw',

    backgroundColor: 'white',
  },

  linkNav:{
    textDecoration: 'none',
    color: '#a8b2d1',

    fontSize: '16px',
  },

  p1:{
    display: 'inline-flex',
    color: '#64FFDA',
  },

  p2: {
    display: 'inline-flex',
  }

 
});

export default styles;