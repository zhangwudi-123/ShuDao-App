import React from 'react';
import BendingMachine from '../BendingMachine/index';

const BendingMachine1 = ({ f7router }) => {
  return (
    <BendingMachine bendingNumber={'C001'} tableName={'折弯机工位1'} f7router={f7router}/>
  );
};

export default BendingMachine1;
