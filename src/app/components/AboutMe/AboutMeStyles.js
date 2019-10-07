const styles = theme => ({
  mainBody:{
    height: '100vh',
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
    width: '200px',
  },

  content: {
    height: '90vh',
    width: '100%',
  },

  mobile:{
    height: '100%',
    width: '100%',

    [theme.breakpoints.down('md')]:{
      display: 'flex',
    },

    [theme.breakpoints.up('md')]:{
        display: 'none',
    },
  },

  web:{
    height: '90vh',
    width: '100%',

    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',

    [theme.breakpoints.down('md')]:{
      display: 'none',
    },

    [theme.breakpoints.up('md')]:{
        display: 'flex',
    },
  },

  webPara: {
    height: '90vh',
    width: '45%',

    fontSize: '22px',
    fontWeight: '500',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },

  webImage: {
    height: '90vh',
    width: '45%',

    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'no-wrap',
    justifyContent: 'flx-start',
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

  dpCover:{
    height: '45vh',
    width: '45vh',

    position: 'absolute',

    backgroundColor: '#64FFDA',
    opacity: '0.3',
    zIndex: '2',
    cursor: 'pointer',

    '&:hover':{
      opacity: 0,
    }
  }
});

export default styles;