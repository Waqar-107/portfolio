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

  myProjects: {
    width: '90%',

    textAlign: 'center',
    fontSize: '35px',
    color: '#e6f1ff',

    [theme.breakpoints.down('md')]: {
      marginTop: '10vh',
    },

    [theme.breakpoints.up('md')]: {
      marginTop: '15vh',
    },
  },

  others: {
    marginTop: '5vh',
    width: '90%',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  btnContainer: {
    width: '90%',
    height: '150px',

    marginTop: '5vh',
    marginBottom: '5vh',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  seeMore: {
    width: '150px',
    height: '60px',

    border: 'solid 1px #64FFDA',
    color: '#64FFDA',
    fontSize: '18px',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#293d5a',
    }
  },
});

export default styles;