import React, { useEffect, useRef, useState } from 'react';
import stylemodule from './style.module.scss';
import Rightthird from '../../../Eacherts/Rightthird';
import MinescreenApi from '~/api/Screen/Minescreen';
import './index.css';
import moment from 'moment';

const Stocks = ({ high, wide }) => {
  const [comname, setComname] = useState(['环锂']);
  const [buttonCom, setButtonCom] = useState(null);
  const [buttonStyle, setButtonStyle] = useState('月');
  const [detalMouth, setDetalMouth] = useState(null);
  const [visable, setVisable] = useState(false);
  const getInventoryDetails = () => {
    MinescreenApi.getInventoryDetails2()
      .then(res => {})
      .catch(err => {});
    MinescreenApi.getInventoryDetailsCcp()
      .then(res => {})
      .catch(err => {});
  };
  const handleChangecostCom = event => {
    setButtonCom(event.target.value);
  };
  const handleBlurCom = () => {};
  const getMonth = () => {
    setButtonStyle('月');
    MinescreenApi.getInventoryDetails(moment(new Date(), 'YYYY-MM').format('YYYY-MM'), comname)
      .then(res => {
        setDetalMouth(res);
      })
      .catch(err => {});
  };
  const getYear = () => {
    setButtonStyle('年');
    MinescreenApi.getInventoryDetailsByYear(moment(new Date(), 'YYYY').format('YYYY'), comname)
      .then(res => {
        setDetalMouth(res);
      })
      .catch(err => {});
  };
  useEffect(() => {
    MinescreenApi.getInventoryDetails(moment(new Date(), 'YYYY-MM').format('YYYY'), '环锂')
      .then(res => {
        setDetalMouth(res);
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
        存货占比
      </div>
      <div
        style={{
          width: wide,
          height: high,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            height: high * 0.1,
            width: wide,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row-reverse'
          }}
        >
          <div className={stylemodule.leftbackdivsecondselecttext} style={{ width: wide * 0.5 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ width: wide * 0.1 }}>公司:</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <select
                defaultValue={comname != null && comname}
                className={stylemodule.leftbackdivsecondselectdiv}
                onChange={handleChangecostCom}
                onBlur={handleBlurCom}
                style={{
                  height: high * 0.05,
                  width: wide * 0.3
                }}
              >
                {comname != null &&
                  comname.map((value, index) => {
                    return (
                      <option value={value} key={index}>
                        {value}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className={stylemodule.leftbackdivsecondselecttext} style={{ width: wide * 0.5 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '40%',
                height: high * 0.05,
                margin: 'auto'
              }}
              className={`textButton ${buttonStyle == '月' ? 'textButton2' : ''}`}
              onClick={getMonth}
            >
              月
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '40%',
                height: high * 0.05,
                margin: 'auto'
              }}
              className={`textButton ${buttonStyle == '年' ? 'textButton2' : ''}`}
              onClick={getYear}
            >
              年
            </div>
            {/* <div
                style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center' ,
                  width: wide * 0.1
                }}
                onClick={getInventoryDetails}
              >
                同步
              </div> */}
          </div>
        </div>
        <div
          style={{
            height: high * 0.85,
            width: wide
          }}
        >
          <Rightthird detalMouth={detalMouth} name={buttonStyle} high={high} wide={wide} />
        </div>
      </div>
    </div>
  );
};

export default Stocks;
