const styles = theme => ({
    mainBody: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'no-wrap',
      justifyContent: 'flex-start',
      alignItems: 'center',
			alignContent: 'center',
    },

    nav: {
      height: '10vh',
      width: '100%',
    },

    intro: {
      width: '90%',

      [theme.breakpoints.down('md')]:{
        height: '80vh',
        marginLeft: '7%',
      },
  
      [theme.breakpoints.up('md')]:{
        height: '90vh',
        marginLeft: '10%',
      },

      marginBottom: '10vh',
    },

    socialWeb: {
      position: 'fixed',
      height: '90vh',
      width: '10%',

      top: '10vh',
      left: '0',
      zIndex: '2',
      [theme.breakpoints.down('md')]:{
        display: 'none',
      },
  
      [theme.breakpoints.up('md')]:{
        display: 'block',
      },
    },

    aboutMe: {
      width: '90%',
      marginBottom: '30vh',

      [theme.breakpoints.down('md')]:{
        marginLeft: '7%',
      },
  
      [theme.breakpoints.up('md')]:{
        marginLeft: '10%',
      },
    },

    work: {
      width: '90%',
      marginBottom: '30vh',

      [theme.breakpoints.down('md')]:{
        marginLeft: '7%',
      },
  
      [theme.breakpoints.up('md')]:{
        marginLeft: '10%',
      },
    },

    cp: {
      width: '90%',
      marginBottom: '30vh',

      [theme.breakpoints.down('md')]:{
        marginLeft: '7%',
      },
  
      [theme.breakpoints.up('md')]:{
        marginLeft: '10%',
      },
    },

    projects: {
      width: '90%',
      marginBottom: '30vh',

      [theme.breakpoints.down('md')]:{
        marginLeft: '7%',
      },
  
      [theme.breakpoints.up('md')]:{
        marginLeft: '10%',
      },
    },

    footer:{
      height: '15vh',
      width: '100%',

      backgroundColor: '#020c1b',
    }
});

export default styles;