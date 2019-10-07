const styles = theme => ({
    intro: {
        position: 'absolute',
        height: '100vh',
        width: '90%',

        left: '10%',
        top: '10vh',
    },

    socialWeb: {
        position: 'fixed',
        height: '90vh',
        width: '10%',

        top: '10vh',
        zIndex: '2',
        [theme.breakpoints.down('md')]:{
            display: 'none',
        },
  
        [theme.breakpoints.up('md')]:{
            display: 'block',
        },
    },

    footer:{
        position: 'absolute',
        height: '15vh',
        width: '100%',

        marginTop: '110vh', // ****to be changed later
        backgroundColor: '#020c1b',
    }
});

export default styles;