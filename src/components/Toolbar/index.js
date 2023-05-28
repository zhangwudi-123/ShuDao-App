import { Toolbar } from '@hvisions/f-ui';
import React from 'react';
import style from './style.scss';

const Bar = ({ children, ...other }) => {
  return (
    <Toolbar className={style.bar} position="bottom" bottom {...other}>
      {children}
    </Toolbar>
  );
};

export default Bar;
