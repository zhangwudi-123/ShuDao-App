import React from 'react';
import { Button, Icon } from '@hvisions/f-ui';
import style from './style.scss';
const FabComponent = props => {
  return (
    <Button className={style.btn} {...props}>
      <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
    </Button>
  );
};

export default FabComponent;
