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
    
    [theme.breakpoints.down('md')]:{
      width: '100px',
    },

    [theme.breakpoints.up('md')]:{
      width: '200px',
    },
  },

  content: {
    width: '100%',
  },

  myCourses: {
    width: '90%',
    
    textAlign: 'center',
    fontSize: '35px',
    color: '#e6f1ff',

    [theme.breakpoints.down('md')]:{
      marginTop: '10vh',
    },

    [theme.breakpoints.up('md')]:{
      marginTop: '15vh',
    },
  },

  underGradCode: {
    marginTop: '5vh',
    width: '90%',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  }
});

export default styles;