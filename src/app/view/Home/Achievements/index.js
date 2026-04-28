import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { achievements } from "./data";

const AchievementCard = ({ achievement }) => {
  const classes = styles();

  return (
    <div className={classes.achievementCard}>
      <div className={classes.achievementTopRow}>
        <div className={classes.achievementIcon}>{achievement.icon}</div>

        <div className={classes.achievementMeta}>
          <span className={classes.achievementType}>{achievement.type}</span>
          <span className={classes.achievementYear}>{achievement.year}</span>
        </div>
      </div>

      <h3 className={classes.achievementTitle}>{achievement.title}</h3>

      {achievement.subtitle && (
        <div className={classes.achievementSubtitle}>
          {achievement.subtitle}
        </div>
      )}

      <p className={classes.achievementDescription}>
        {achievement.description}
      </p>

      {achievement.tags && (
        <div className={classes.achievementTags}>
          {achievement.tags.map((tag) => (
            <span className={classes.achievementTag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

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
    </>
  );
};

AchievementCard.propTypes = {
  achievement: PropTypes.shape({
    type: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.string,
  }).isRequired,
};

export default Achievements;