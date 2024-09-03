import React, { useEffect, useRef, useState } from 'react';
import {
  Link,
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Searchbar,
  BlockTitle,
  ListInput,
  List,
  Icon,
  PageContent,
  Button
} from '@hvisions/f-ui';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { useResizeDetector } from 'react-resize-detector';
import stylemodule from './style.module.scss';
import Rightthird from '../Eacherts/Rightthird';
import MinescreenApi from '~/api/Screen/Minescreen';
import './index.css';
import In from '../img/In.png';
import Out from '../img/Out.png';
import Left from '../img/left.png';
import Right from '../img/right.png';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import moment from 'moment';
// import { Sheet, f7 } from 'framework7-react';
// import styles from './style.scss';
// import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
// import { i18n } from '@hvisions/toolkit';
// import { onToast, createDialog } from '~/util/home';
// import useDebounce from '~/Hook/useDebounce';
// import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';
// import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';
// import { isEmpty } from 'lodash';
// import { Skeleton, Empty } from '~/components';

// import PrepareAreaServices from '~/api/PrepareArea';
// import { PrepareAreaState } from '~/enum/enum';

const Stocks = ({ f7router }) => {
  const [comname, setComname] = useState(['环锂']);
  const [buttonCom, setButtonCom] = useState(null);
  const [buttonStyle, setButtonStyle] = useState('月');
  const [detalMouth, setDetalMouth] = useState(null);
  const [visable, setVisable] = useState(false);
  const handleFullScreen = useFullScreenHandle();
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
    // console.log('点击月');
    MinescreenApi.getInventoryDetails(moment(new Date(), 'YYYY-MM').format('YYYY-MM'), comname)
      .then(res => {
        setDetalMouth(res);
        // console.log(res, '===');
        // setPricename(res);
        // setMiddleThird(res);
        // let allsumin = 0;
        // res.forEach(item => {
        //   allsumin += item.costValue;
        // });
        // setAllsumPrice(allsumin);
      })
      .catch(err => {});
  };
  const getYear = () => {
    setButtonStyle('年');
    // console.log('点击月');
    MinescreenApi.getInventoryDetailsByYear(moment(new Date(), 'YYYY').format('YYYY'), comname)
      .then(res => {
        setDetalMouth(res);
        // console.log(res, '===');
        // setPricename(res);
        // setMiddleThird(res);
        // let allsumin = 0;
        // res.forEach(item => {
        //   allsumin += item.costValue;
        // });
        // setAllsumPrice(allsumin);
      })
      .catch(err => {});
  };
  useEffect(() => {
    MinescreenApi.getInventoryDetails(moment(new Date(), 'YYYY-MM').format('YYYY'), '环锂')
      .then(res => {
        setDetalMouth(res);
        // console.log(res, '===');
        // setPricename(res);
        // setMiddleThird(res);
        // let allsumin = 0;
        // res.forEach(item => {
        //   allsumin += item.costValue;
        // });
        // setAllsumPrice(allsumin);
      })
      .catch(err => {});
  }, []);
  // useEffect(() => {
  //   let startX = 0;
  //   let startY = 0;

  //   document.addEventListener('touchstart', e => {
  //     startX = e.touches[0].clientX;
  //     startY = e.touches[0].clientY;
  //   });

  //   document.addEventListener('touchmove', e => {
  //     const moveX = e.touches[0].clientX;
  //     const moveY = e.touches[0].clientY;
  //     const deltaX = moveX - startX;
  //     const deltaY = moveY - startY;

  //     if (deltaX > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
  //       handleBindingLeft();
  //     }
  //   });
  // }, []);
  // useEffect(() => {
  //   let startX = 0;
  //   let startY = 0;

  //   document.addEventListener('touchstart', e => {
  //     startX = e.touches[0].clientX;
  //     startY = e.touches[0].clientY;
  //   });

  //   document.addEventListener('touchmove', e => {
  //     const moveX = e.touches[0].clientX;
  //     const moveY = e.touches[0].clientY;
  //     const deltaX = moveX - startX;
  //     const deltaY = moveY - startY;

  //     if (deltaX < -50 && Math.abs(deltaX) > Math.abs(deltaY)) {
  //       handleBindingRight();
  //     }
  //   });
  // }, []);
  const onResize = width => {
    window.rem = null;
    const doc = window.document;
    const docEl = doc.documentElement;
    // console.log(doc);
    // const screen = document.querySelector('#screen');
    // console.log(width);
    const rem = (10 * width) / 1000;
    docEl.style.fontSize = rem + 'px';
    // console.log(docEl.style.fontSize);
    // const targetX = 1920;
    // const scaleRatio = width / targetX;
    // screen.style.transform = `scale(${scaleRatio})`;

    // if (echartsRef.current) {
    //   echartsRef.current.getEchartsInstance().resize();
    // }
    window.rem = rem;
    // window.a = rem;
    // console.log(window, '(((');
  };
  const { width, height, ref: rightPanelRef, triggerRecompute } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 300,
    onResize
  });
  const handleBindingLeft = async () => {
    f7router.navigate('/unitcost', {});
  };
  const handleBindingRight = async () => {
    f7router.navigate('/operatingIncome', {});
  };
  return (
    <Page pageContent={false}>
      存货
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.navigate('/')} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>存货</NavTitle>
        <NavRight>
          {!visable && (
            <Button
              icon="fullscreen"
              onClick={() => {
                handleFullScreen.enter();
                setVisable(true);
              }}
              className={stylemodule.button}
            >
              <img alt="" style={{ height: 24 }} src={In} />
            </Button>
          )}
        </NavRight>
      </Navbar>
      <FullScreen className={stylemodule.fullScreenContainer} handle={handleFullScreen}>
        <div
          style={{
            position: 'absolute',
            width: '8rem',
            height: '8rem',
            top: '49.5%',
            left: '80%',
            marginLeft: '8rem',
            marginTop: '4rem',
            zIndex: '50'
            // backgroundColor: 'red'
          }}
          onClick={handleBindingRight}
        >
          <img alt="" style={{ height: '100%' }} src={Right} />
        </div>
        <div
          style={{
            position: 'absolute',
            width: '8rem',
            height: '8rem',
            top: '49.5%',
            // left: '80%',
            marginLeft: '8rem',
            marginTop: '4rem',
            zIndex: '50'
            // backgroundColor: 'red'
          }}
          onClick={handleBindingLeft}
        >
          <img alt="" style={{ height: '100%' }} src={Left} />
        </div>
        <div ref={rightPanelRef} className={stylemodule.backdiv}>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: '-50rem'
            }}
          >
            <div
              style={{
                height: '20%',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between'
                // backgroundColor: 'red'
              }}
            >
              {visable && (
                <Button
                  onClick={() => {
                    handleFullScreen.exit();
                    setVisable(false);
                  }}
                  className={stylemodule.button2}
                >
                  <img alt="" style={{ height: 24 }} src={Out} />
                </Button>
              )}
              {/* <div className={stylemodule.leftbackdivfirstovertext}>存货占比</div> */}
              <div className={stylemodule.leftbackdivsecondselecttext} style={{}}>
                <span style={{ marginRight: '1rem', marginTop: '3rem', width: '10rem' }}>
                  公司:
                </span>
                <select
                  defaultValue={comname != null && comname}
                  className={stylemodule.leftbackdivsecondselectdiv}
                  onChange={handleChangecostCom}
                  onBlur={handleBlurCom}
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
              <div className={stylemodule.leftbackdivsecondselecttext}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '30rem',
                    height: '5rem',
                    marginTop: '1rem'
                    // backgroundColor: 'red'
                  }}
                >
                  <div
                    style={{
                      width: '40%',
                      height: '100%',
                      margin: '0 auto',
                      padding: '0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                    className={`textButton ${buttonStyle == '月' ? 'textButton2' : ''}`}
                    onClick={getMonth}
                  >
                    月
                  </div>
                  <div
                    style={{
                      width: '40%',
                      height: '100%',
                      margin: '0',
                      padding: '0',
                      marginRight: '2rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: '2rem',
                      cursor: 'pointer'
                    }}
                    className={`textButton ${buttonStyle == '年' ? 'textButton2' : ''}`}
                    onClick={getYear}
                  >
                    年
                  </div>
                  {/* <div
                    style={{
                      width: '12rem',
                      height: '5rem',
                      margin: '0',
                      padding: '0',
                      marginRight: '2rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      opacity: '0.3'
      
                    }}

                    onClick={getInventoryDetails}
                  >
                    同步
                  </div> */}
                </div>
                {/* <span style={{ marginRight: '1rem' }}>公司:</span> */}
                {/* <select
                            defaultValue={Minleftsecond[0]}
                            className={stylemodule.leftbackdivsecondselectdiv}
                          >
                            {Minrightsecond.map((value, index) => {
                              return (
                                <option value={value} key={index}>
                                  {value}
                                </option>
                              );
                            })}
                          </select> */}
              </div>
            </div>
            <div style={{ marginLeft: '-100rem' }}>
              <Rightthird detalMouth={detalMouth} name={buttonStyle} />
              {/* <div className={stylemodule.leftbackdivfirstechartsphoto}></div> */}
            </div>
          </div>
        </div>
      </FullScreen>
    </Page>
  );
};

export default Stocks;
