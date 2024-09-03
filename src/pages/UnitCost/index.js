// import React, { useEffect, useRef, useState } from 'react';
// import {
//   Link,
//   Page,
//   Navbar,
//   NavLeft,
//   NavTitle,
//   NavRight,
//   Searchbar,
//   BlockTitle,
//   ListInput,
//   List,
//   Icon,
//   PageContent,
//   Button
// } from '@hvisions/f-ui';
// import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
// import { useResizeDetector } from 'react-resize-detector';
// import stylemodule from './style.module.scss';
// import MinescreenApi from '~/api/Screen/Minescreen';
// import In from '../img/In.png';
// import Out from '../img/Out.png';
// import { FullScreen, useFullScreenHandle } from 'react-full-screen';
// import Middlefirst from '../Eacherts/Middlefirst';
// import moment from 'moment';

// // import { Sheet, f7 } from 'framework7-react';
// // import styles from './style.scss';
// // import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
// // import { i18n } from '@hvisions/toolkit';
// // import { onToast, createDialog } from '~/util/home';
// // import useDebounce from '~/Hook/useDebounce';
// // import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';
// // import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';
// // import { isEmpty } from 'lodash';
// // import { Skeleton, Empty } from '~/components';

// // import PrepareAreaServices from '~/api/PrepareArea';
// // import { PrepareAreaState } from '~/enum/enum';

// const UnitCost = ({ f7router }) => {
//   const [visable, setVisable] = useState(false);
//   const [costname, setCostname] = useState(null);
//   const handleFullScreen = useFullScreenHandle();
//   const [middleThird, setMiddleThird] = useState(null);
//   const handleChangecost = event => {
//     MinescreenApi.getCostProportion(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
//       .then(res => {
//         // console.log(res, '===');
//         // setPricename(res);
//         setMiddleThird(res);
//         // let allsumin = 0;
//         // res.forEach(item => {
//         //   allsumin += item.costValue;
//         // });
//         // setAllsumPrice(allsumin);
//       })
//       .catch(err => {});
//   };
//   const handleBlurcost = event => {
//     // console.log(event, '===');
//   };
//   useEffect(() => {
//     MinescreenApi.getCostProportionName(moment(new Date(), 'YYYY').format('YYYY'))
//       .then(res => {
//         const array = res;

//         // 使用 Set 对象来存储唯一值
//         const uniqueArray = [...new Set(array)];

//         // console.log(uniqueArray); // 输出: ["磷矿石"]

//         setCostname(uniqueArray);
//       })
//       .catch(err => {});

//     MinescreenApi.getCostProportion(moment(new Date(), 'YYYY').format('YYYY'), '黄磷')
//       .then(res => {
//         // console.log(res, '===');
//         // let allsumin = 0;
//         // res.forEach(item => {
//         //   allsumin += item.costValue;
//         // });
//         // setAllsumPrice(allsumin);
//         // setPricename(res);
//         setMiddleThird(res);
//       })
//       .catch(err => {});
//   }, []);
//   const onResize = width => {
//     window.rem = null;
//     const doc = window.document;
//     const docEl = doc.documentElement;
//     // console.log(doc);
//     // const screen = document.querySelector('#screen');
//     // console.log(width);
//     const rem = (10 * width) / 1000;
//     docEl.style.fontSize = rem + 'px';
//     // console.log(docEl.style.fontSize);
//     // const targetX = 1920;
//     // const scaleRatio = width / targetX;
//     // screen.style.transform = `scale(${scaleRatio})`;

//     // if (echartsRef.current) {
//     //   echartsRef.current.getEchartsInstance().resize();
//     // }
//     window.rem = rem;
//     // window.a = rem;
//     // console.log(window, '(((');
//   };
//   const { width, height, ref: rightPanelRef, triggerRecompute } = useResizeDetector({
//     handleHeight: false,
//     refreshMode: 'debounce',
//     refreshRate: 300,
//     onResize
//   });
//   return (
//     <Page pageContent={false}>
//       单位成本
//       <Navbar>
//         <NavLeft>
//           <a onClick={() => f7router.back()} className="ne-navleft">
//             <img alt="" style={{ height: 24 }} src={backIcon} />
//           </a>
//         </NavLeft>
//         <NavTitle>单位成本</NavTitle>
//         <NavRight>
//           {!visable && (
//             <Button
//               icon="fullscreen"
//               onClick={() => {
//                 handleFullScreen.enter();
//                 setVisable(true);
//               }}
//               className={stylemodule.button}
//             >
//               <img alt="" style={{ height: 24 }} src={In} />
//             </Button>
//           )}
//         </NavRight>
//       </Navbar>
//       <FullScreen className={stylemodule.fullScreenContainer} handle={handleFullScreen}>
//         <div ref={rightPanelRef} className={stylemodule.backdiv}>
//           <div className={stylemodule.middlebackdiv}>
//             <div className={stylemodule.leftbackdivsecond}>
//               <div
//                 style={{
//                   height: '10%',
//                   width: '100%',
//                   display: 'flex',
//                   justifyContent: 'space-between'
//                   // backgroundColor: 'red'
//                 }}
//               >
//                 {visable && (
//                   <Button
//                     onClick={() => {
//                       handleFullScreen.exit();
//                       setVisable(false);
//                     }}
//                     className={stylemodule.button2}
//                   >
//                     <img alt="" style={{ height: 24 }} src={Out} />
//                   </Button>
//                 )}
//                 <div className={stylemodule.leftbackdivfirstovertext}>成本趋势</div>
//                 <div className={stylemodule.leftbackdivsecondselecttext}>
//                   <div style={{ marginTop: '1.5rem' }}>
//                     <span style={{ marginRight: '2rem' }}>物料:</span>
//                   </div>
//                   <div style={{ marginRight: '2rem' }}>
//                     <select
//                       defaultValue={costname != null && costname[0]}
//                       className={stylemodule.leftbackdivsecondselectdiv}
//                       onChange={handleChangecost}
//                       onBlur={handleBlurcost}
//                     >
//                       {costname != null &&
//                         costname.map((value, index) => {
//                           return (
//                             <option value={value} key={index}>
//                               {value}
//                             </option>
//                           );
//                         })}
//                     </select>
//                   </div>
//                 </div>
//               </div>
//               <div style={{ marginTop: '10rem', marginLeft: '3rem' }}>
//                 <Middlefirst MiddleThird={middleThird} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </FullScreen>
//     </Page>
//   );
// };

// export default UnitCost;

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
import MinescreenApi from '~/api/Screen/Minescreen';
import In from '../img/In.png';
import Out from '../img/Out.png';
import Left from '../img/left.png';
import Right from '../img/right.png';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Middlefirst from '../Eacherts/Middlefirst';
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

const UnitCost = ({ f7router }) => {
  const [visable, setVisable] = useState(false);
  const [costname, setCostname] = useState(null);
  const handleFullScreen = useFullScreenHandle();
  const [middleThird, setMiddleThird] = useState(null);
  const handleChangecost = event => {
    MinescreenApi.getCostProportion(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
      .then(res => {
        // console.log(res, '===');
        // setPricename(res);
        setMiddleThird(res);
        // let allsumin = 0;
        // res.forEach(item => {
        //   allsumin += item.costValue;
        // });
        // setAllsumPrice(allsumin);
      })
      .catch(err => {});
  };
  const handleBlurcost = event => {
    // console.log(event, '===');
  };
  useEffect(() => {
    MinescreenApi.getCostProportionName(moment(new Date(), 'YYYY').format('YYYY'))
      .then(res => {
        const array = res;

        // 使用 Set 对象来存储唯一值
        const uniqueArray = [...new Set(array)];

        // console.log(uniqueArray); // 输出: ["磷矿石"]

        setCostname(uniqueArray);
      })
      .catch(err => {});

    MinescreenApi.getCostProportion(moment(new Date(), 'YYYY').format('YYYY'), '黄磷')
      .then(res => {
        // console.log(res, '===');
        // let allsumin = 0;
        // res.forEach(item => {
        //   allsumin += item.costValue;
        // });
        // setAllsumPrice(allsumin);
        // setPricename(res);
        setMiddleThird(res);
      })
      .catch(err => {});
  }, []);
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
    f7router.navigate('/market', {});
  };
  const handleBindingRight = async () => {
    f7router.navigate('/stocks', {});
  };
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
  return (
    <Page pageContent={false}>
      单位成本
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.navigate('/', {})} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>单位成本</NavTitle>
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
        <div ref={rightPanelRef} className={stylemodule.backdiv}>
          <div
            style={{
              position: 'absolute',
              width: '8rem',
              height: '8rem',
              top: '45%',
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
              top: '45%',
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
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: '35rem'
            }}
          >
            <div
              style={{
                height: '10%',
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
              {/* <div className={stylemodule.leftbackdivfirstovertext}>成本趋势</div> */}
              <div className={stylemodule.leftbackdivsecondselecttext}>
                <div style={{ marginTop: '1.5rem' }}>
                  <span style={{ marginRight: '2rem' }}>物料:</span>
                </div>
                <div style={{ marginRight: '2rem', marginTop: '-2rem' }}>
                  <select
                    defaultValue={costname != null && costname[0]}
                    className={stylemodule.leftbackdivsecondselectdiv}
                    onChange={handleChangecost}
                    onBlur={handleBlurcost}
                  >
                    {costname != null &&
                      costname.map((value, index) => {
                        return (
                          <option value={value} key={index}>
                            {value}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
            </div>
            <div style={{ height: '90%', width: '80%', marginLeft: '-15rem' }}>
              <Middlefirst MiddleThird={middleThird} />
            </div>
          </div>
        </div>
      </FullScreen>
    </Page>
  );
};

export default UnitCost;
