import Colors from "../../styles/Colors";
import {makeStyles} from "@material-ui/core";

const styles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "auto",

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "flex-start",
    alignItems: "flex-start"
	},

  container: {
    width: "100%",
  },

  detailsContainer: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "5%" 
    }
  },

  posterImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
		objectPosition: "center"
  },

  name: {
    fontStyle: "bolder",
    color: Colors.nameColor,
    marginBottom: 1
  },

  venue: {
    fontSize: 17,
    color: Colors.iconColor
  },

  author: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    fontStyle: "italic",
    fontSize: 17,
    marginBottom: 10,
    color: Colors.iconColor
  },

  IAmAuthor: {
    fontStyle: "bold",
    color: Colors.themeFontColor,
    margin: 0,
    marginRight: 3
  },

  otherAuthors: {
    margin: 0,
    marginRight: 3
  },

  linkContainer:{
    display: "flex",
    
    [theme.breakpoints.up("md")]: {
      marginTop: 50,
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
    }
  },

  link: {
    color: Colors.themeFontColor,
    marginRight: 25
  },

  paperLinkContainer:{
    marginTop: 30
  }
}));

export default styles;
