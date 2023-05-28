import React from 'react';
import classnames from 'classnames';
import styles from './ImagePicker.scss';
const Square = ({ children, className, ...others }) => {
  return (
    <div className={classnames(styles.square, className)} {...others}>
      <div className={styles['square-content']}>{children}</div>
    </div>
  );
};

export default Square;
