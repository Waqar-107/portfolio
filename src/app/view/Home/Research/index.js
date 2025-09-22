import { Grid } from "@material-ui/core";
import TitleHead from "../../../components/TitleHead";
import CurrentProjects from "./CurrentProjects";
import Publications from "./Publications";
import styles from "./styles";

const Research = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <TitleHead number="04." caption="Research" />
      </div>

      <div className={classes.content}>
        <CurrentProjects />
        <Publications />
      </div>
    </div>
  );
};

export default Research;
