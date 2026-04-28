import { makeStyles } from "@material-ui/core";
import Colors from "../../../styles/Colors";

const styles = makeStyles(() => ({
  achievementGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 22,
    marginTop: 28,

    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },

  achievementCard: {
    background: Colors.projectBox,
    border: `1px solid ${Colors.lineColor}`,
    borderRadius: 4,
    padding: "20px 22px",
    textAlign: "left",
    transition: "transform 0.2s ease, border-color 0.2s ease",

    "&:hover": {
      transform: "translateY(-4px)",
      borderColor: Colors.themeFontColor,
    },
  },

  achievementTopRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  achievementIcon: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    border: `1px solid ${Colors.themeFontColor}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    background: Colors.mediumDarkNavy,
  },

  achievementMeta: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  achievementType: {
    fontSize: 12,
    color: Colors.themeFontColor,
    border: `1px solid ${Colors.themeFontColor}`,
    borderRadius: 999,
    padding: "3px 10px",
  },

  achievementYear: {
    fontSize: 13,
    color: Colors.fontColor,
  },

  achievementTitle: {
    color: Colors.nameColor,
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 1.35,
    margin: "0 0 8px 0",
  },

  achievementSubtitle: {
    color: Colors.themeFontColor,
    fontSize: 14,
    lineHeight: 1.5,
    marginBottom: 8,
  },

  achievementDescription: {
    color: Colors.fontColor,
    fontSize: 14,
    lineHeight: 1.6,
    margin: "0 0 14px 0",
  },

  achievementTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },

  achievementTag: {
    color: Colors.fontColor,
    fontSize: 12,
    border: `1px solid ${Colors.lineColor}`,
    borderRadius: 999,
    padding: "3px 9px",
    background: Colors.mediumDarkNavy,
  },
}));

export default styles;
