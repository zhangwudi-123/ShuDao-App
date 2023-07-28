import React from 'react';
import BendingMachine from '../BendingMachine/index';

const BendingMachine2 = ({ f7router }) => {
  return (
    <BendingMachine bendingNumber={'C003'} tableName={'折弯机工位2'} f7router={f7router}/>
  );
};

export default BendingMachine2;
