import React, { useEffect, useRef, useState } from 'react';
import stylemodule from './style.module.scss';
import Rightfirstb from '../../../EachertsJC/Rightfirstb';
// import MiddleThrid from '../../../Eacherts/MiddleThrid';

const OverallOperatingIndicators = ({ high, wide }) => {
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
        主材吨耗
      </div>
      <div style={{ height: high }}>
        <Rightfirstb high={high} wide={wide} />
      </div>
      {/* <div style={{ height: high / 2 }}>
        <MiddleThrid high={high} wide={wide} />
      </div> */}
    </div>
  );
};

export default OverallOperatingIndicators;
