const styles = theme => ({
  mainBody:{
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',

    // [theme.breakpoints.down('md')]:{
    //   height: '120vh',
    // },
  
    // [theme.breakpoints.up('md')]:{
    //   height: '110vh',
    // },
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
    width: '200px',
  },

  content: {
    //height: '100%',
    width: '100%',

    // [theme.breakpoints.down('md')]:{
    //   height: '110vh',
    // },
  
    // [theme.breakpoints.up('md')]:{
    //   height: '100vh',
    // },
  },

  mobile:{
    height: '110vh',
    width: '100%',

    display: 'flex',
    flexWrap: 'no-wrap',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',

    [theme.breakpoints.down('md')]:{
      display: 'flex',
    },

    [theme.breakpoints.up('md')]:{
        display: 'none',
    },
  },

  web:{
    // height: '100vh',
    width: '100%',

    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',

    [theme.breakpoints.down('md')]:{
      display: 'none',
    },

    [theme.breakpoints.up('md')]:{
        display: 'flex',
    },
  },

  webPara: {
    // height: '100%',
    width: '45%',

    fontSize: '22px',
    fontWeight: '500',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },

  mobilePara: {
    height: '60vh',
    width: '90%',

    fontSize: '22px',
    fontWeight: '500',
   
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
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

  mobileImage:{
    height: '50vh',
    width: '90%',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  dp:{
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

  dpCover:{
    height: '45vh',
    width: '45vh',

    position: 'absolute',

    backgroundColor: '#64FFDA',
    opacity: '0.3',
    cursor: 'pointer',

    '&:hover':{
      opacity: 0,
    },
  },

  mobileDpCover:{
    height: '30vh',
    width: '30vh',

    position: 'absolute',

    backgroundColor: '#64FFDA',
    opacity: '0.3',
  },

  dpFrame:{
    position: 'absolute',

    marginLeft: '3vh',
    marginTop: '3vh',
    
    transition: '0.1s ease-in', 
    cursor: 'pointer',

    border: 'solid 3px #64FFDA',
  },
  
  mobileDpFrame:{
    position: 'absolute',
    height: '30vh',
    width: '30vh',

    marginLeft: '1.5vh',
    marginTop: '1.5vh',

    border: 'solid 3px #64FFDA',
  },

  link:{
    textDecoration: 'none',
    color: '#64FFDA',
  }
});

export default styles;