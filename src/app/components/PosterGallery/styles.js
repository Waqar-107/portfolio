import Colors from "../../styles/Colors";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  posterGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 22,
    marginTop: 20,

    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },

  posterCard: {
    background: Colors.projectBox,
    border: `1px solid ${Colors.lineColor}`,
    borderRadius: 4,
    padding: 16,
    textAlign: "left",
    transition: "transform 0.2s ease, border-color 0.2s ease",

    "&:hover": {
      transform: "translateY(-4px)",
      borderColor: Colors.themeFontColor,
    },
  },

  posterImageWrapper: {
    display: "block",
    width: "100%",
    height: 220,
    overflow: "hidden",
    borderRadius: 4,
    marginBottom: 14,
    background: Colors.mediumDarkNavy,
  },

  posterImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top",
    transition: "transform 0.25s ease",

    "$posterCard:hover &": {
      transform: "scale(1.03)",
    },
  },

  posterTopRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  posterType: {
    fontSize: 12,
    color: Colors.themeFontColor,
    border: `1px solid ${Colors.themeFontColor}`,
    borderRadius: 999,
    padding: "3px 10px",
  },

  posterYear: {
    fontSize: 13,
    color: Colors.fontColor,
  },

  posterTitle: {
    display: "block",
    color: Colors.nameColor,
    fontSize: 16,
    lineHeight: 1.4,
    fontWeight: 700,
    textDecoration: "none",
    marginBottom: 8,

    "&:hover": {
      color: Colors.themeFontColor,
    },
  },

  posterVenue: {
    color: Colors.themeFontColor,
    fontSize: 14,
    lineHeight: 1.5,
    marginBottom: 8,
  },

  posterAuthors: {
    color: Colors.fontColor,
    fontSize: 14,
    lineHeight: 1.6,
    marginBottom: 12,
  },

  myName: {
    color: Colors.themeFontColor,
    fontWeight: 700,
  },

  authorName: {
    color: Colors.fontColor,
  },

  posterLinks: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",

    "& a": {
      fontSize: 13,
      color: Colors.themeFontColor,
      textDecoration: "none",
      border: `1px solid ${Colors.themeFontColor}`,
      borderRadius: 4,
      padding: "4px 9px",
    },

    "& a:hover": {
      background: Colors.featProject,
    },
  },

  posterImageWrapper: {
    display: "block",
    width: "100%",
    height: 220,
    overflow: "hidden",
    borderRadius: 4,
    marginBottom: 14,
    background: Colors.mediumDarkNavy,
    position: "relative",
  },

  posterCard: {
    background: Colors.projectBox,
    border: `1px solid ${Colors.lineColor}`,
    borderRadius: 4,
    padding: 16,
    textAlign: "left",
    transition: "transform 0.2s ease, border-color 0.2s ease",
    display: "flex",
    flexDirection: "column",

    "&:hover": {
      transform: "translateY(-4px)",
      borderColor: Colors.themeFontColor,
    },
  },

  posterBottomRow: {
    marginTop: "auto",
    paddingTop: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  },

  posterAward: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginLeft: "auto",
  },

  posterAwardIcon: {
    color: Colors.themeFontColor,
    fontSize: 18,
  },

  posterAwardText: {
    color: Colors.themeFontColor,
    fontSize: 13,
    fontWeight: 600,
    lineHeight: 1.4,
    textAlign: "right",
  },
}));

export default styles;
