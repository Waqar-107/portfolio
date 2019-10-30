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

  content: {
    width: '100%',
  },

  para: {
    width: '90%',
    height: '10vh',

    fontSize: '22px',
    fontWeight: '500',
  },

  link:{
    textDecoration: 'none',
    color: '#64FFDA',
  },

  highlight: {
    color: '#e6f1ff',
  }
});

export default styles;