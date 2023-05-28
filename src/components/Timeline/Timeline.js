import React from 'react';
import styles from './Timeline.scss';
const Timeline = ({ children }) => {
  return <ul className={styles.timeline}>{children}</ul>;
};

export default Timeline;
