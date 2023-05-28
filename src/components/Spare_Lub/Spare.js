import React, { useEffect, useState } from 'react';
import CardInfo from './SpareCardItem';
import { isEmpty } from 'lodash';
import SparePartService from '~/api/sparePart';
const SparePartApply = ({ data }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    if (isEmpty(data)) return;
    SparePartService.getSpareApply(data.processInstanceId).then(item => {
      setList(item);
    })
  }, [data])

  const renderCard = (value, index) => (
    <CardInfo
      key={value.id}
      item={value}
      index={index}
    />
  );

  return (
    <>
      {!isEmpty(list) &&
        list.map((value, index) => {
          return renderCard(value, index);
        })
      }
    </>
  );
};

export default SparePartApply;
