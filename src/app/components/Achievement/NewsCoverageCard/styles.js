import { makeStyles } from "@material-ui/core";
import Colors from "../../../styles/Colors";

const styles = makeStyles(() => ({
    newsEmbed: {
        background: Colors.projectBox,
        border: `1px solid ${Colors.lineColor}`,
        borderRadius: 4,
        padding: "20px 22px",
        textAlign: "left",
        transition: "transform 0.2s ease, border-color 0.2s ease",

        "&:hover": {
            transform: "translateY(-3px)",
            borderColor: Colors.themeFontColor,
        },
    },

    newsEmbedHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 18,
        marginBottom: 12,
    },

    newsPublication: {
        color: Colors.themeFontColor,
        fontSize: 13,
        fontWeight: 700,
        lineHeight: 1.4,
        marginBottom: 4,
    },

    newsMeta: {
        color: Colors.fontColor,
        fontSize: 12,
        lineHeight: 1.5,
    },

    newsTitleLink: {
        color: "inherit",
        textDecoration: "none",
    },

    newsTitle: {
        color: Colors.nameColor,
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 1.35,
        margin: "0 0 8px 0",

        "&:hover": {
            color: Colors.themeFontColor,
        },
    },

    newsSubtitle: {
        color: Colors.fontColor,
        fontSize: 14,
        lineHeight: 1.6,
        margin: "0",
        maxWidth: 850,
    },

    newsButton: {
        flexShrink: 0,
        color: Colors.themeFontColor,
        border: `1px solid ${Colors.themeFontColor}`,
        borderRadius: 999,
        padding: "4px 11px",
        fontSize: 12,
        lineHeight: 1.4,
        textDecoration: "none",
        whiteSpace: "nowrap",
        transition: "background 0.2s ease",

        "&:hover": {
            background: Colors.mediumDarkNavy,
        },
    },
}));

export default styles;
