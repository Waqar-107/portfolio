import Colors from "../../styles/Colors";
import { makeStyles } from "@material-ui/core";

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
  },

  venue: {
    fontSize: 17,
    color: Colors.iconColor
  },

  author: {
    color: Colors.iconColor
  },

  IAmAuthor: {
    fontStyle: "bold",
    color: Colors.themeFontColor,
    margin: 0,
  },

  otherAuthors: {
    margin: 0,
  },

  linkContainer: {
    display: "flex",
    marginTop: 10,
  },

  link: {
    color: Colors.themeFontColor,
  },
}));

export default styles;
