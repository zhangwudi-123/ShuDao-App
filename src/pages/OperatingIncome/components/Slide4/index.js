import React, { useEffect, useRef, useState } from 'react';
import stylemodule from './style.module.scss';
import Leftthird from '../../../Eacherts/Leftthird';
import MinescreenApi from '~/api/Screen/Minescreen';
import moment from 'moment';

const Market = ({ high, wide }) => {
  const [pricename, setPricename] = useState(null);
  const [leftThird, setLeftThird] = useState(null);
  const [leftThird2, setLeftThird2] = useState(null);

  useEffect(() => {
    MinescreenApi.getProductPriceName(moment(new Date(), 'YYYY').format('YYYY'))
      .then(res => {
        // console.log(res, '>>>.');
        // // 找到 "黄磷" 的索引
        // const index = res.indexOf('黄磷');
        // // 如果 "黄磷" 在数组中存在，则将其删除并插入到数组的第一个位置
        // if (index !== -1) {
        //   res.splice(index, 1); // 删除 "黄磷"
        //   res.unshift('黄磷'); // 将 "黄磷" 插入到数组的第一个位置
        // }
        setPricename(res);
      })
      .catch(err => {});
    MinescreenApi.getSalesUnitPriceJc(moment(new Date(), 'YYYY').format('YYYY'), '黄磷')
      .then(res => {
        setLeftThird2(res);
      })
      .catch(err => {});
    MinescreenApi.getProductPrice(moment(new Date(), 'YYYY').format('YYYY'), '黄磷-金川公司')
      .then(res => {
        // console.log(res, '=======');
        // setPricename(res);
        setLeftThird(res);
      })
      .catch(err => {});
  }, []);

  const handleChange = event => {
    MinescreenApi.getProductPrice(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
      .then(res => {
        setLeftThird(res);
      })
      .catch(err => {});
    MinescreenApi.getSalesUnitPriceJc(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
      .then(res => {
        if (res != null) {
          setLeftThird2(res);
        } else {
          setLeftThird2([]);
        }
      })
      .catch(err => {});
  };

  const handleBlur = event => {};

  const getProductPrice = () => {
    MinescreenApi.getProductPriceHl()
      .then(res => {})
      .catch(err => {});
    MinescreenApi.getProductPriceJc()
      .then(res => {})
      .catch(err => {});
    MinescreenApi.getSalesUnitPriceJc2()
      .then(res => {})
      .catch(err => {});
  };

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
        市场价格对比分析
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
          <div className={stylemodule.leftbackdivsecondselecttext}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{}}>物料:</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <select
                defaultValue={pricename != null && pricename[0]}
                className={stylemodule.leftbackdivsecondselectdiv}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  height: high * 0.05,
                  width: wide * 0.3
                }}
              >
                {pricename != null &&
                  pricename.map((value, index) => {
                    return (
                      <option value={value} key={index}>
                        {value}
                      </option>
                    );
                  })}
              </select>
            </div>
            {/* <div
                  style={{display:'flex',justifyContent:'center',alignItems:'center'}}
                  onClick={getProductPrice}
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
          <Leftthird LeftThird={leftThird} LeftThird2={leftThird2} high={high} wide={wide} />
        </div>
      </div>
    </div>
  );
};

export default Market;
