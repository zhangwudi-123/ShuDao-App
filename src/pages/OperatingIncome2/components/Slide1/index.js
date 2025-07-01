import React, { useEffect, useRef, useState } from 'react';
import stylemodule from './style.module.scss';
import Leftsecond from '../../../EachertsHL/Leftsecond';
import { head } from 'lodash';
import { Button } from '../../../../../node_modules/antd-mobile/es/index';
// import Leftsecond from '../../../Eacherts/Leftsecond';
import warehouseScreenService from '~/api/warehouseScreen';
const OperatingIncome = ({ high, wide, swiperKey }) => {
  const base64ToBlob = (base64Data, contentType) => {
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  };

  useEffect(() => {
    console.log(high, wide);
  }, [swiperKey]);
  const downLoad = () => {
    console.log('222');
    warehouseScreenService
      .download()
      .then(res => {
        const base64Data = res.body; // 获取Base64数据
        const fileName = res.fileName || 'download.apk'; // 获取文件名

        const blob = base64ToBlob(base64Data, 'application/vnd.android.package-archive');
        const url = URL.createObjectURL(blob);

        // 使用window.open打开下载链接
        window.open(url, '_blank');
      })
      .catch();
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
        主材耗量
      </div>
      <div style={{ height: high * 0.03 }}></div>
      {/* <div style={{ height: high / 2 }}>
        <Lsftfirst high={high} wide={wide} />
      </div> */}
      {/* <div>2222</div> */}
      <Button onClick={downLoad}>下载</Button>
      <div style={{ height: high }}>
        <Leftsecond high={high} wide={wide} />
      </div>
    </div>
  );
};

export default OperatingIncome;
