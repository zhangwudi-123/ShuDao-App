import React, { Component } from 'react';
import { scan, cancel, toggleCamera, toggleLight } from '~/plugins/QRScanner';
import { Page, Navbar, Link, NavRight, PageContent } from '@hvisions/f-ui';
import { pick } from 'lodash';
import styles from './style.scss';
import scanIcon from './scan.svg';
class Scan extends Component {
  state = {
    alertVisible: false,
    qrcodeTxt: ''
  };

  componentDidMount() {
    document.getElementById('framework7-root').style.opacity = 0.3;
    scan().then(text => {
      console.log(text);
      document.getElementById('framework7-root').style.opacity = 1;
    });

    return () => {
      cancel();
    };
  }

  // 过滤自带的props
  reduceObject(aObj, bObj) {
    const aArr = Object.keys(aObj);
    const bArr = Object.keys(bObj);
    const a2 = aArr.filter(word => bArr.indexOf(word) === -1);
    const b2 = bArr.filter(word => aArr.indexOf(word) === -1);
    const rObj = {};
    a2.forEach(function(e) {
      rObj[e] = aObj[e];
    });
    b2.forEach(function(e) {
      rObj[e] = bObj[e];
    });
    return rObj;
  }

  handleToggleLight = () => {
    toggleLight();
  };
  handleToggleCamera = () => {
    toggleCamera();
  };

  handleClose = () => {
    document.getElementById('framework7-root').style.opacity = 1;
    cancel();
  };

  render() {
    return (
      <Page style={{ backgroundColor: 'transparent' }}>
        <Navbar title="扫码">
          <NavRight>
            <Link popupClose onClick={this.handleClose}>
              关闭
            </Link>
          </NavRight>
        </Navbar>

        <PageContent className={styles['back-transparent']} no-bounce>
          <div className={styles['page-scan-camera-ready']}>
            <div className={styles['guides']}>
              <div
                className={styles['qr-scan-guides']}
                style={{ width: 200, height: 200, borderRadius: '4px', border: '1px solid blue' }}
              >
                <div style={{ width: '100%', height: 2, background: 'blue' }}></div>
              </div>
            </div>
            <div className={styles['scanner-controls']}>
              <span className={styles['icon-flash']} onClick={this.handleToggleLight} />
              <span className={styles['icon-camera-toggle']} onClick={this.handleToggleCamera} />
            </div>
          </div>
        </PageContent>
      </Page>
    );
  }
}

export default Scan;
