import React, { useEffect, useRef, useState } from 'react';
import stylemodule from './style.module.scss';
import Leftsecond from '../../../EachertsJC/Leftsecond';
import { head } from 'lodash';
// import Leftsecond from '../../../Eacherts/Leftsecond';

const OperatingIncome = ({ high, wide, swiperKey }) => {
  useEffect(() => {
    console.log(high, wide);
  }, [swiperKey]);

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
        电能吨耗
      </div>
      <div style={{ height: high * 0.03 }}></div>
      {/* <div style={{ height: high / 2 }}>
        <Lsftfirst high={high} wide={wide} />
      </div> */}
      {/* <div>2222</div> */}
      <div style={{ height: high }}>
        <Leftsecond high={high} wide={wide} />
      </div>
    </div>
  );
};

export default OperatingIncome;
