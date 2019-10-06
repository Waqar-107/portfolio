const styles = theme => ({
  intro: {
      height: '100%',
      width: '100%',
  },

  hi: {
      transitionDelay: '100ms',
      wordSpacing: '5px',
      lineHeight: '10px',

      [theme.breakpoints.down('md')]:{
          fontSize: '15px',
          marginTop: '30%',
          marginBottom: '3%',
      },

      [theme.breakpoints.up('md')]:{
          fontSize: '18px',
          marginTop: '10%',
          marginBottom: '2%',
      },
  },
  
  name: {
      // marginBottom: '1%',
      transitionDelay: '200ms',
      fontWeight: '600',

      [theme.breakpoints.down('md')]:{
          fontSize: '40px',
      },

      [theme.breakpoints.up('md')]:{
          fontSize: '70px',
      },
  },

  moto: {
    transitionDelay: '300ms',
    fontWeight: '600',

    [theme.breakpoints.down('md')]:{
      fontSize: '50px',
      marginBottom: '15%',
    },

    [theme.breakpoints.up('md')]:{
      fontSize: '70px',
      marginBottom: '5%',
    },
  },

  shortDescription: {
    fontWeight: '300',

    [theme.breakpoints.down('md')]:{
      fontSize: '20px',
      wordSpacing: '5px',
      lineHeight: '25px',
    },

    [theme.breakpoints.up('md')]:{
      fontSize: '30px',
      wordSpacing: '6px',
      lineHeight: '35px',
    },
  }
});

export default styles;