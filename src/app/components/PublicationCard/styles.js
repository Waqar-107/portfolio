import Colors from "../../styles/Colors";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  publicationCard: {
    width: "100%",
    padding: "20px 22px",
    marginBottom: 18,
    background: Colors.projectBox,
    borderRadius: 4,
    border: `1px solid ${Colors.lineColor}`,
    textAlign: "left",
    transition: "transform 0.2s ease, border-color 0.2s ease",

    "&:hover": {
      transform: "translateY(-4px)",
      borderColor: Colors.themeFontColor,
    },
  },

  pubTopRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  pubType: {
    fontSize: 12,
    color: Colors.themeFontColor,
    border: `1px solid ${Colors.themeFontColor}`,
    borderRadius: 999,
    padding: "3px 10px",
    lineHeight: 1.4,
  },

  pubYear: {
    fontSize: 13,
    color: Colors.fontColor,
  },

  pubTitle: {
    display: "block",
    fontSize: 16,
    lineHeight: 1.35,
    fontWeight: 700,
    color: Colors.nameColor,
    textDecoration: "none",
    marginBottom: 7,

    "&:hover": {
      color: Colors.themeFontColor,
    },
  },

  pubVenue: {
    fontSize: 14,
    color: Colors.themeFontColor,
    marginBottom: 8,

    "& a": {
      color: Colors.themeFontColor,
      textDecoration: "none",

      "&:hover": {
        textDecoration: "underline",
      },
    },
  },

  pubAuthors: {
    fontSize: 14,
    lineHeight: 1.6,
    color: Colors.fontColor,
    marginBottom: 13,
  },

  myName: {
    color: Colors.themeFontColor,
    fontWeight: 700,
  },

  authorName: {
    color: Colors.fontColor,
  },

  pubLinks: {
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
      lineHeight: 1.4,
      transition: "background 0.2s ease, color 0.2s ease",
    },

    "& a:hover": {
      background: Colors.featProject,
    },
  },

  posterCard: {
    background: Colors.projectBox,
    padding: 14,
    borderRadius: 4,
    border: `1px solid ${Colors.lineColor}`,
    height: "100%",
    textAlign: "left",
    transition: "transform 0.2s ease, border-color 0.2s ease",

    "&:hover": {
      transform: "translateY(-4px)",
      borderColor: Colors.themeFontColor,
    },
  },

  posterImage: {
    width: "100%",
    height: 145,
    objectFit: "cover",
    marginBottom: 12,
    borderRadius: 2,
  },

  posterTitle: {
    fontSize: 14,
    lineHeight: 1.4,
    color: Colors.nameColor,
    fontWeight: 600,
    marginBottom: 8,
  },

  posterMeta: {
    fontSize: 13,
    lineHeight: 1.5,
    color: Colors.fontColor,
  },
}));

export default styles;