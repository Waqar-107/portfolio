const styles = theme => ({
  mainBody:{
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
  },

  heading:{
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

  line:{
    height: '1px',
    
    [theme.breakpoints.down('sm')]:{
      width: '110px',
    },

    [theme.breakpoints.up('sm')]:{
      width: '200px',
    },
  },

  content: {
    width: '100%',
  },
});

export default styles;