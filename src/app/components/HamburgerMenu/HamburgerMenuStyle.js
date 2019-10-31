const styles = theme => ({
    /* MENU STYLES */
    menu_wrap : {
        position: "absolute",
        top: "0",
        right: "0",
				zIndex: "1",
    },

    menu_wrap_toggler : {
        position: "absolute",
        top: "0",
        right: "0",
        zIndex: "2",

        cursor: "pointer",
        width: "60px",
				height: "60px",
				
				userSelect: 'none',
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
        right: "0",
        zIndex : 1,
        width: "60px",
        height: "60px",
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
        backgroundColor : "#64FFDA",
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
            backgroundColor : "#64FFDA",
        },

        '&:after' : {
            content : "''",
            position : "absolute",
            zIndex : "1",
            top : "-10px",
            width : "100%",
            height : "2px",
            backgroundColor : "#64FFDA",
        }
    },

    //use this when checked
    menu_wrap_hamburger_div_ifChecked : {
        position : "relative",
        flex : "none",
        width : "70%",
        height : "2px",
        backgroundColor : "#64FFDA",
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
            backgroundColor : "#64FFDA",
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
            backgroundColor : "#64FFDA",
            top: 0,
            transform: "rotate(90deg)",
        }
		},
		
		menu: {
			position: 'fixed',
			top: '0',

			height: '100%',
			width: '75vw',
			transition: 'all 0.5s ease-out',

			display: 'flex',

			backgroundColor: '#0a192f',
		}

    // menu: {
    //     position : "fixed",
    //     top : "0",
    //     left : "0",
    //     width : "100%",
    //     height : "100%",
    //     overflow : "hidden",
    //     display : "flex",
    //     alignItems : "center",
    //     justifyContent : "center",
    // },

    // menu_in1 : {
    //     backgroundColor : "rgb(252, 253, 255, 0.8)",
        
    //     borderRadius : "50%",
    //     width : "200vw",
    //     height : "200vw",
    //     display : "flex",
    //     flex : "none",
    //     alignItems : "center",
    //     justifyContent : "center",
    //     transition : "all 0.4s ease"
    // },

    // menu_in2 : {
    //     textAlign : "center",
    //     maxWidth : "90vw",
    //     maxHeight : "100vh",

    //     transition:  "opacity 0.4s ease 0.4s"
    // },

    // LI : {
    //     listStyle : "none",
    //     color : "#64FFDA",
    //     fontSize : "1.5rem",
    //     padding : "1rem"
    // },

    // LI_A : {
    //     color : "#64FFDA",
    //     textDecoration : "none",
    //     transition : "color 0.4s ease",
    //     marginBottom : "50%"
    // },

});

export default styles