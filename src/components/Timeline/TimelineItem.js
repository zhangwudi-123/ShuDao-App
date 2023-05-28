import React from 'react';
import classnames from 'classnames';
import styles from './Timeline.scss';
const TimelineItem = ({ children, icon, color }) => {
  const iconStyle = color ? { borderColor: color, color } : undefined;
  const iconCls = classnames(styles.icon, { [styles.customIcon]: Boolean(icon) });
  return (
    <li className={styles.item}>
      <div className={styles.tail} />
      <div className={iconCls} style={iconStyle}>
        {icon}
      </div>
      <div className={styles.content}>{children}</div>
    </li>
  );
};

export default TimelineItem;
