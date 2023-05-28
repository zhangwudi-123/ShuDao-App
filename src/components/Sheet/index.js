import React from 'react';
import { Sheet } from '@hvisions/f-ui';
import styles from './style.scss';
const SheetModal = ({ children, ...other }) => {
  return (
    <Sheet {...other}>
      <div className={styles['swipe-handler']}></div>
      {children}
    </Sheet>
  );
};

export default SheetModal;
