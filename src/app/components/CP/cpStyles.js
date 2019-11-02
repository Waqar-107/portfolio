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

  para: {
    width: '90%',

    fontSize: '22px',
    fontWeight: '500',
  },

  link: {
    textDecoration: 'none',
    color: '#64FFDA',
  },

  highlight: {
    color: '#e6f1ff',
  },

  solved: {
    width: '90%',

    textAlign: 'center',
    fontSize: '25px',
    color: '#e6f1ff',

    [theme.breakpoints.down('md')]: {
      marginTop: '5vh',
    },

    [theme.breakpoints.up('md')]: {
      marginTop: '7vh',
    },
  },

  repo: {
    width: '90%',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default styles;