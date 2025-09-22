import { makeStyles } from "@material-ui/core";
import Colors from "../../../styles/Colors";

const styles = makeStyles((theme) => ({
  root: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
  },

  heading: {
    height: "10vh",
    width: "100%",

    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
  },

  content: {
    width: "100%",
    fontSize: 18,

    display: "flex",
    flexDirection: "column",
    color: "#8892b0",
  },

  awardTitle: {
    fontStyle: "bold",
    color: Colors.themeFontColor,
    marginBottom: 5,
  },

  awardDetails: {
    marginBottom: 25,
  }

}));

export default styles;
