const styles = theme => ({
    /* MENU STYLES */
    menu_wrap : {
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1"
    },

    menu_wrap_toggler : {
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "2",
        cursor: "pointer",
        width: "70px",
        height: "70px",
        
        opacity: "0",
        '&:checked' : {
            menu_wrap_hamburger_div : {
                transform: "rotate(135deg)"
            }
        }
    },

    menu_wrap_hamburger : {
        position: "absolute",
        top: "0",
        left: "0",
        zIndex : 1,
        width: "70px",
        height: "70px",
        padding: "1rem",
        backgroundColor : "transparent",
       
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    /* Hamburger Line */
    menu_wrap_hamburger_div : {
        position : "relative",
        flex : "none",
        width : "70%",
        height : "2px",
        backgroundColor : "#2E303E",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        transition : "all 0.4s ease",

        '&:before' : {
            content : "''",
            position : "absolute",
            zIndex : "1",
            top : "10px",
            width : "100%",
            height : "2px",
            backgroundColor : "#2E303E",
        },

        '&:after' : {
            content : "''",
            position : "absolute",
            zIndex : "1",
            top : "-10px",
            width : "100%",
            height : "2px",
            backgroundColor : "#2E303E",
        }
    },

    //use this when checked
    menu_wrap_hamburger_div_ifChecked : {
        position : "relative",
        flex : "none",
        width : "70%",
        height : "2px",
        backgroundColor : "#2E303E",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        transition : "all 0.4s ease",
        transform: "rotate(135deg)",

        '&:before' : {
            content : "''",
            position : "absolute",
            zIndex : "1",
            //top : "10px",
            width : "100%",
            height : "2px",
            backgroundColor : "#2E303E",
            top: 0,
            transform: "rotate(90deg)",
        },

        '&:after' : {
            content : "''",
            position : "absolute",
            zIndex : "1",
            //top : "-10px",
            width : "100%",
            height : "2px",
            backgroundColor : "#2E303E",
            top: 0,
            transform: "rotate(90deg)",
        }
    },

    menu: {
        position : "fixed",
        top : "0",
        left : "0",
        width : "100%",
        height : "100%",
        overflow : "hidden",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
    },

    menu_in1 : {
        backgroundColor : "rgb(252, 253, 255, 0.8)",
        
        borderRadius : "50%",
        width : "200vw",
        height : "200vw",
        display : "flex",
        flex : "none",
        alignItems : "center",
        justifyContent : "center",
        transition : "all 0.4s ease"
    },

    menu_in2 : {
        textAlign : "center",
        maxWidth : "90vw",
        maxHeight : "100vh",

        transition:  "opacity 0.4s ease 0.4s"
    },

    LI : {
        listStyle : "none",
        color : "#2E303E",
        fontSize : "1.5rem",
        padding : "1rem"
    },

    LI_A : {
        color : "#2E303E",
        textDecoration : "none",
        transition : "color 0.4s ease",
        marginBottom : "50%"
    },

});

export default styles