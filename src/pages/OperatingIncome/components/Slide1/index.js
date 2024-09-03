import React, { useEffect, useRef, useState } from 'react';
import stylemodule from './style.module.scss';
import Lsftfirst from '../../../Eacherts/Leftfirst';
import Leftsecond from '../../../Eacherts/Leftsecond';

const OperatingIncome = ({ high, wide, swiperKey }) => {
  useEffect(() => {}, [swiperKey]);

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
        营收构成(万元)
      </div>
      <div style={{ height: high / 2 }}>
        <Lsftfirst high={high} wide={wide} />
      </div>
      <div style={{ height: high / 2 }}>
        <Leftsecond high={high} wide={wide} />
      </div>
    </div>
  );
};

export default OperatingIncome;
