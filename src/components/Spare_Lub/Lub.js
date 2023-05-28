import React, { useEffect, useState } from 'react';
import CardInfo from './LubCardItem';
import { isEmpty } from 'lodash';
import LubService from '~/api/lub';
const LubApply = ({ data }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    if (isEmpty(data)) return;
    console.log('object', data);
    LubService.getLubApply(data.processInstanceId).then(item => {
      setList(item);
    })
  }, [data]);

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

export default LubApply;
