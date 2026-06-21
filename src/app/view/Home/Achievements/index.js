import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { achievements, news_coverage } from "./data";
import NewsCoverageCard from "../../../components/Achievement/NewsCoverageCard";
import AchievementCard from "../../../components/Achievement/AchievementCard";

const Achievements = () => {
  const classes = styles();
  console.log("Achievements data:", achievements);
  if (!achievements || achievements.length === 0) return null;

  return (
    <>
      <div className={classes.head} style={{marginBottom: 20}}>Achievements</div>
      <div className={classes.achievementGrid}>
        {achievements.map((achievement) => (
          <AchievementCard
            key={`${achievement.title}-${achievement.year}`}
            achievement={achievement}
          />
        ))}
      </div>
      <div className={classes.head} style={{marginTop: 30, marginBottom: 20}}>News Coverage</div>
      <div className={classes.achievementGrid}>
        {news_coverage.map((news) => (
          <NewsCoverageCard
            key={`${news.newspaper_name}-${news.date}`}
            news={news}
          />
        ))}
      </div>
    </>
  );
};

export default Achievements;