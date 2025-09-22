import Colors from "../../../styles/Colors";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  outerSurface: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  heading: {
    width: "100%",

    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",

    fontSize: "20px",
    fontWeight: "400",

    color: Colors.themeFontColor,
  },

  head2: {
    width: "100%",
    marginBottom: 20,

    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",

    fontSize: "50px",
    fontWeight: "600",

    color: Colors.nameColor,
  },

  kotha: {
    marginBottom: 50,
    lineHeight: 1.3,

    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",

    fontSize: 18,
    textAlign: "center",
    fontWeight: 300,

    color: Colors.motoColor,

    [theme.breakpoints.down("md")]: {
      width: "100%",
    },

    [theme.breakpoints.up("md")]: {
      width: "75%",
    },
  },

  mailMe: {
    width: "150px",
    height: "60px",
    marginBottom: 70,

    border: "solid 1px #64FFDA",
    color: "#64FFDA",
    fontSize: "18px",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#293d5a",
    },
  },

  mailLink: {
    width: "100%",
    height: "100%",
    textDecoration: "none",
    userSeclect: "none",
    color: "#64FFDA",

    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
}));

export default styles;