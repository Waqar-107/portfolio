const styles = theme => ({
    /* MENU STYLES */
    menu_wrap: {
        position: "absolute",
        top: "0",
        right: "0",
        zIndex: "1",
    },

    menu_wrap_toggler: {
        position: "absolute",
        top: "0",
        right: "0",
        zIndex: "2",

        cursor: "pointer",
        width: "60px",
        height: "60px",

        userSelect: 'none',
        opacity: "0",

        '&:checked': {
            menu_wrap_hamburger_div: {
                transform: "rotate(135deg)"
            }
        }
    },

    menu_wrap_hamburger: {
        position: "absolute",
        top: "0",
        right: "0",
        zIndex: 1,
        width: "60px",
        height: "60px",
        backgroundColor: "transparent",

        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    /* Hamburger Line */
    menu_wrap_hamburger_div: {
        position: "relative",
        flex: "none",
        width: "70%",
        height: "2px",
        backgroundColor: "#64FFDA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.4s ease",

        '&:before': {
            content: "''",
            position: "absolute",
            zIndex: "1",
            top: "10px",
            width: "100%",
            height: "2px",
            backgroundColor: "#64FFDA",
        },

        '&:after': {
            content: "''",
            position: "absolute",
            zIndex: "1",
            top: "-10px",
            width: "100%",
            height: "2px",
            backgroundColor: "#64FFDA",
        }
    },

    //use this when checked
    menu_wrap_hamburger_div_ifChecked: {
        position: "relative",
        flex: "none",
        width: "70%",
        height: "2px",
        backgroundColor: "#64FFDA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.4s ease",
        transform: "rotate(135deg)",

        '&:before': {
            content: "''",
            position: "absolute",
            zIndex: "1",
            //top : "10px",
            width: "100%",
            height: "2px",
            backgroundColor: "#64FFDA",
            top: 0,
            transform: "rotate(90deg)",
        },

        '&:after': {
            content: "''",
            position: "absolute",
            zIndex: "1",
            //top : "-10px",
            width: "100%",
            height: "2px",
            backgroundColor: "#64FFDA",
            top: 0,
            transform: "rotate(90deg)",
        }
    },

    menu: {
        position: 'fixed',
        top: '0',

        height: '100%',
        width: '75vw',
        transition: 'all 0.4s ease-in',

        backgroundColor: '#172A45',

        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },

    p1: {
        //display: 'inline-flex',
        color: '#64FFDA',
        marginBottom: '2px'
    },

    p2H: {
        //display: 'inline-flex',
        color: '#8892b0',

        '&:hover': {
            color: '#64FFDA',
        }
    },

    hamItem: {
        cursor: 'pointer',
        marginBottom: '20px',
    },

    LINK: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },

    linkNav: {
        textDecoration: 'none',
        color: '#a8b2d1',

        fontSize: '16px',
    },

    resume: {
        height: '40px',
        width: '100px',

        marginTop: '10px',
        borderRadius: '5px',
        border: '0.5px solid #64FFDA',
        color: '#64FFDA',

        //backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',

        '&:hover': {
            backgroundColor: '#293d5a',
        }
    },


});

export default styles