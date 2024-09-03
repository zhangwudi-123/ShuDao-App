import React, { useEffect, useRef, useState } from 'react';
import stylemodule from './style.module.scss';
import Rightfirst from '../../../Eacherts/Rightfirst';
import Rightfirstb from '../../../Eacherts/Rightfirstb';
import MinescreenApi from '~/api/Screen/Minescreen';
import moment from 'moment';

const GrossProfit = ({ high, wide }) => {
  const [allprice, setAllPrice] = useState(null);

  useEffect(() => {
    MinescreenApi.getProfitPieChart(moment(new Date(), 'YYYY').format('YYYY'))
      .then(res => {
        let allsumin = 0;
        res.forEach(item => {
          if (item.companyName == '总利润') {
            allsumin = item.profitValue;
          }
        });
        setAllPrice(allsumin);
      })
      .catch(err => {});
  }, []);

  return (
    <div className={stylemodule.backdiv}>
      <div
        className={stylemodule.leftbackdivfirstovertext}
        style={{
          width: wide,
          height: high * 0.03,
          fontSize: `${high * 0.03 * 0.8}px`
        }}
      >
        利润构成(万元)
      </div>
      <div style={{ height: high * 0.45 }}>
        <Rightfirst high={high} wide={wide} />
      </div>
      <div
        className={stylemodule.rightbackdivfirstechartstitle}
        style={{
          margin: 'auto',
          width: wide * 0.75,
          height: high * 0.07,
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center'
          //   paddingTop: '3rem',
          //   marginBottom: '5rem'
        }}
      >
        <div
          className={stylemodule.rightbackdivfirstechartstitleall}
          style={{
            width: wide * 0.75 * 0.25,
            margin: 'auto',
            textAlign: 'center',
            fontSize: high * 0.015
          }}
        >
          总利润
        </div>
        <div
          className={stylemodule.rightbackdivfirstechartstitleallsum}
          style={{
            width: wide * 0.75 * 0.75,
            margin: 'auto',
            textAlign: 'center',
            fontSize: high * 0.03
          }}
        >
          <span style={{ color: allprice > 0 ? 'green' : 'red' }}>
            {allprice != null && allprice}
          </span>
          万元
        </div>
      </div>
      <div style={{ height: high * 0.45 }}>
        <Rightfirstb high={high} wide={wide} />
      </div>
    </div>
  );
};

export default GrossProfit;
