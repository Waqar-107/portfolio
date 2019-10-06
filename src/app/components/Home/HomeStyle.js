const styles = theme => ({
    intro: {
        position: 'absolute',
        height: '90vh',
        width: '90%',

        left: '10%',
        top: '10vh',
    },

    socialWeb: {
        position: 'fixed',
        height: '90vh',
        width: '10%',

        top: '10vh',
        [theme.breakpoints.down('md')]:{
            display: 'none',
        },
  
        [theme.breakpoints.up('md')]:{
            display: 'block',
        },
    }
});

export default styles;