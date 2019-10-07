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

        marginLeft: '10%',
        [theme.breakpoints.down('sm')]:{
            height: '95vh',
        },
  
        [theme.breakpoints.up('sm')]:{
            height: '110vh',
        },
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
        marginLeft: '10%',

        // [theme.breakpoints.down('md')]:{
        //     height: '120vh',
        // },
  
        // [theme.breakpoints.up('md')]:{
        //     height: '110vh',
        // },
        marginBottom: '10vh',
    },

    footer:{
        height: '15vh',
        width: '100%',

        backgroundColor: '#020c1b',
    }
});

export default styles;