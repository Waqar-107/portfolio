import { Grid } from "@material-ui/core";
import TitleHead from "../../../components/TitleHead";
import { awards } from "./data";
import styles from "./styles";

const Achievements = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <TitleHead number="05." caption="Achievements" />
      </div>

      <div className={classes.content}>
        <Grid container direction="column">
          <ol>
            {awards.map((obj, idx) => (
              <li>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} key={idx}>
                  <div className={classes.awardItem}>
                    <div className={classes.awardTitle}>{obj.title}</div>
                    <div className={classes.awardDetails}>{obj.details}</div>
                  </div>
                </Grid>
              </li>
            ))}
          </ol>
        </Grid>
      </div>
    </div>
  );
};

export default Achievements;
