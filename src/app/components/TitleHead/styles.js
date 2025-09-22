import { makeStyles } from "@material-ui/core";
import Colors from "../../styles/Colors";

const styles = makeStyles((theme) => ({
  outer: {
    height: "100%",
    width: "100%",
    position: "relative",
  },

  lineContainer: {
    height: "100%",
    width: "100%",

    position: "absolute",

    display: "flex",
    flexWrap: "no-wrap",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    alignContent: "center",
  },

  line: {
    height: "1px",

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },

    [theme.breakpoints.up("md")]: {
      width: "60%",
    },

    backgroundColor: Colors.lineColor,
  },

  capContainer: {
    height: "100%",
    position: "absolute",

    fontSize: 20,
    fontWeight: 600,

    display: "flex",
    flexWrap: "no-wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",

    backgroundColor: Colors.mediumDarkNavy,
  },
}));

export default styles;