// // import React, { useEffect, useRef, useState } from 'react';
// // import {
// //   Link,
// //   Page,
// //   Navbar,
// //   NavLeft,
// //   NavTitle,
// //   NavRight,
// //   Searchbar,
// //   BlockTitle,
// //   ListInput,
// //   List,
// //   Icon,
// //   PageContent,
// //   Button
// // } from '@hvisions/f-ui';
// // import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
// // import { useResizeDetector } from 'react-resize-detector';
// // import stylemodule from './style.module.scss';
// // import Leftthird from '../Eacherts/Leftthird';
// // import In from '../img/In.png';
// // import Out from '../img/Out.png';
// // import { FullScreen, useFullScreenHandle } from 'react-full-screen';
// // import MinescreenApi from '~/api/Screen/Minescreen';
// // import moment from 'moment';

// // // import { Sheet, f7 } from 'framework7-react';
// // // import styles from './style.scss';
// // // import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
// // // import { i18n } from '@hvisions/toolkit';
// // // import { onToast, createDialog } from '~/util/home';
// // // import useDebounce from '~/Hook/useDebounce';
// // // import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';
// // // import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';
// // // import { isEmpty } from 'lodash';
// // // // import CardInfo from './CardInfo';
// // // import { Skeleton, Empty } from '~/components';

// // // import PrepareAreaServices from '~/api/PrepareArea';
// // // import { PrepareAreaState } from '~/enum/enum';

// // const Market = ({ f7router }) => {
// //   const [pricename, setPricename] = useState(null);
// //   const [leftThird, setLeftThird] = useState(null);
// //   const [leftThird2, setLeftThird2] = useState(null);
// //   const [visable, setVisable] = useState(false);
// //   const handleFullScreen = useFullScreenHandle();
// //   useEffect(() => {
// //     MinescreenApi.getProductPriceName(moment(new Date(), 'YYYY').format('YYYY'))
// //       .then(res => {
// //         console.log(res, '>>>.');
// //         // 找到 "黄磷" 的索引
// //         const index = res.indexOf('黄磷');

// //         // 如果 "黄磷" 在数组中存在，则将其删除并插入到数组的第一个位置
// //         if (index !== -1) {
// //           res.splice(index, 1); // 删除 "黄磷"
// //           res.unshift('黄磷'); // 将 "黄磷" 插入到数组的第一个位置
// //         }
// //         setPricename(res);
// //       })
// //       .catch(err => {});
// //     MinescreenApi.getSalesUnitPriceJc(moment(new Date(), 'YYYY').format('YYYY'), '黄磷')
// //       .then(res => {
// //         // console.log(res, '=======');
// //         // setPricename(res);
// //         setLeftThird2(res);
// //       })
// //       .catch(err => {});
// //     MinescreenApi.getProductPrice(moment(new Date(), 'YYYY').format('YYYY'), '黄磷')
// //       .then(res => {
// //         console.log(res, '=======');
// //         // setPricename(res);
// //         setLeftThird(res);
// //       })
// //       .catch(err => {});
// //   }, []);
// //   const onResize = width => {
// //     window.rem = null;
// //     const doc = window.document;
// //     const docEl = doc.documentElement;
// //     // console.log(doc);
// //     // const screen = document.querySelector('#screen');
// //     // console.log(width);
// //     const rem = (10 * width) / 1000;
// //     docEl.style.fontSize = rem + 'px';
// //     // console.log(docEl.style.fontSize);
// //     // const targetX = 1920;
// //     // const scaleRatio = width / targetX;
// //     // screen.style.transform = `scale(${scaleRatio})`;

// //     // if (echartsRef.current) {
// //     //   echartsRef.current.getEchartsInstance().resize();
// //     // }
// //     window.rem = rem;
// //     // window.a = rem;
// //     // console.log(window, '(((');
// //   };
// //   const { width, height, ref: rightPanelRef, triggerRecompute } = useResizeDetector({
// //     handleHeight: false,
// //     refreshMode: 'debounce',
// //     refreshRate: 300,
// //     onResize
// //   });
// //   const handleChange = event => {
// //     MinescreenApi.getProductPrice(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
// //       .then(res => {
// //         // console.log(res, '===');
// //         // setPricename(res);
// //         setLeftThird(res);
// //       })
// //       .catch(err => {});

// //     console.log(event.target.value);
// //     MinescreenApi.getSalesUnitPriceJc(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
// //       .then(res => {
// //         // console.log(res, '=======');
// //         if (res != null) {
// //           setLeftThird2(res);
// //         } else {
// //           setLeftThird2([]);
// //         }
// //         // setPricename(res);
// //       })
// //       .catch(err => {});
// //   };
// //   const handleBlur = event => {
// //     // console.log(event, '===');
// //   };
// //   const getProductPrice = () => {
// //     console.log('同步');
// //     MinescreenApi.getProductPriceHl()
// //       .then(res => {})
// //       .catch(err => {});
// //     MinescreenApi.getProductPriceJc()
// //       .then(res => {})
// //       .catch(err => {});
// //     MinescreenApi.getSalesUnitPriceJc2()
// //       .then(res => {})
// //       .catch(err => {});
// //   };
// //   return (
// //     <Page pageContent={false}>
// //       市场价格
// //       <Navbar>
// //         <NavLeft>
// //           <a onClick={() => f7router.back()} className="ne-navleft">
// //             <img alt="" style={{ height: 24 }} src={backIcon} />
// //           </a>
// //         </NavLeft>
// //         <NavTitle>市场价格</NavTitle>
// //         <NavRight>
// //           {!visable && (
// //             <Button
// //               icon="fullscreen"
// //               onClick={() => {
// //                 handleFullScreen.enter();
// //                 setVisable(true);
// //               }}
// //               className={stylemodule.button}
// //             >
// //               <img alt="" style={{ height: 24 }} src={In} />
// //             </Button>
// //           )}
// //         </NavRight>
// //       </Navbar>
// //       <FullScreen className={stylemodule.fullScreenContainer} handle={handleFullScreen}>
// //         <div ref={rightPanelRef} className={stylemodule.backdiv}>
// //           <div className={stylemodule.middlebackdiv}>
// //             <div className={stylemodule.leftbackdivsecond}>
// //               {visable && (
// //                 <Button
// //                   onClick={() => {
// //                     handleFullScreen.exit();
// //                     setVisable(false);
// //                   }}
// //                   className={stylemodule.button2}
// //                 >
// //                   <img alt="" style={{ height: 24 }} src={Out} />
// //                 </Button>
// //               )}
// //               <div
// //                 style={{
// //                   height: '10%',
// //                   width: '100%',
// //                   display: 'flex',
// //                   justifyContent: 'space-between'
// //                   // backgroundColor: 'red'
// //                 }}
// //               >
// //                 {/* <div className={stylemodule.leftbackdivfirstovertext}>市场价格对比分析</div> */}
// //                 <div className={stylemodule.leftbackdivsecondselecttext}>
// //                   <div style={{ marginTop: '1.5rem' }}>
// //                     <span style={{ marginRight: '2rem' }}>物料:</span>
// //                   </div>
// //                   <div style={{ marginRight: '2rem' }}>
// //                     <select
// //                       defaultValue={pricename != null && pricename[0]}
// //                       className={stylemodule.leftbackdivsecondselectdiv}
// //                       onChange={handleChange}
// //                       onBlur={handleBlur}
// //                     >
// //                       {pricename != null &&
// //                         pricename.map((value, index) => {
// //                           return (
// //                             <option value={value} key={index}>
// //                               {value}
// //                             </option>
// //                           );
// //                         })}
// //                     </select>
// //                   </div>
// //                   <div
// //                     style={{
// //                       width: 'auto',
// //                       height: 'auto',
// //                       margin: '0',
// //                       padding: '0',
// //                       // marginRight: '2rem',
// //                       marginTop: '2rem',
// //                       cursor: 'pointer',
// //                       opacity: '0.3'
// //                     }}
// //                     // className={`textButton ${buttonStyle == '年' ? 'textButton2' : ''}`}
// //                     onClick={getProductPrice}
// //                   >
// //                     同步
// //                     {/* <HIcon h-type="refresh" className={stylemodule.leftbackdivsecondselectdiv} /> */}
// //                   </div>
// //                 </div>
// //               </div>
// //               <div
// //                 style={{
// //                   marginTop: '10rem',
// //                   marginLeft: '8rem',
// //                   height: '100rem'
// //                   // backgroundColor: 'red'
// //                 }}
// //               >
// //                 <Leftthird LeftThird={leftThird} LeftThird2={leftThird2} />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </FullScreen>
// //     </Page>
// //   );
// // };

// // export default Market;

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
// import Leftthird from '../Eacherts/Leftthird';
// import In from '../img/In.png';
// import Out from '../img/Out.png';
// import { FullScreen, useFullScreenHandle } from 'react-full-screen';
// import MinescreenApi from '~/api/Screen/Minescreen';
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
// // // import CardInfo from './CardInfo';
// // import { Skeleton, Empty } from '~/components';

// // import PrepareAreaServices from '~/api/PrepareArea';
// // import { PrepareAreaState } from '~/enum/enum';

// const Market = ({ f7router }) => {
//   const [pricename, setPricename] = useState(null);
//   const [leftThird, setLeftThird] = useState(null);
//   const [leftThird2, setLeftThird2] = useState(null);
//   const [visable, setVisable] = useState(false);
//   const handleFullScreen = useFullScreenHandle();
//   useEffect(() => {
//     MinescreenApi.getProductPriceName(moment(new Date(), 'YYYY').format('YYYY'))
//       .then(res => {
//         console.log(res, '>>>.');
//         // 找到 "黄磷" 的索引
//         const index = res.indexOf('黄磷');

//         // 如果 "黄磷" 在数组中存在，则将其删除并插入到数组的第一个位置
//         if (index !== -1) {
//           res.splice(index, 1); // 删除 "黄磷"
//           res.unshift('黄磷'); // 将 "黄磷" 插入到数组的第一个位置
//         }
//         setPricename(res);
//       })
//       .catch(err => {});
//     MinescreenApi.getSalesUnitPriceJc(moment(new Date(), 'YYYY').format('YYYY'), '黄磷')
//       .then(res => {
//         // console.log(res, '=======');
//         // setPricename(res);
//         setLeftThird2(res);
//       })
//       .catch(err => {});
//     MinescreenApi.getProductPrice(moment(new Date(), 'YYYY').format('YYYY'), '黄磷')
//       .then(res => {
//         console.log(res, '=======');
//         // setPricename(res);
//         setLeftThird(res);
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
//   const handleChange = event => {
//     MinescreenApi.getProductPrice(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
//       .then(res => {
//         // console.log(res, '===');
//         // setPricename(res);
//         setLeftThird(res);
//       })
//       .catch(err => {});

//     console.log(event.target.value);
//     MinescreenApi.getSalesUnitPriceJc(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
//       .then(res => {
//         // console.log(res, '=======');
//         if (res != null) {
//           setLeftThird2(res);
//         } else {
//           setLeftThird2([]);
//         }
//         // setPricename(res);
//       })
//       .catch(err => {});
//   };
//   const handleBlur = event => {
//     // console.log(event, '===');
//   };
//   const getProductPrice = () => {
//     console.log('同步');
//     MinescreenApi.getProductPriceHl()
//       .then(res => {})
//       .catch(err => {});
//     MinescreenApi.getProductPriceJc()
//       .then(res => {})
//       .catch(err => {});
//     MinescreenApi.getSalesUnitPriceJc2()
//       .then(res => {})
//       .catch(err => {});
//   };
//   return (
//     <Page pageContent={false}>
//       市场价格
//       <Navbar>
//         <NavLeft>
//           <a onClick={() => f7router.back()} className="ne-navleft">
//             <img alt="" style={{ height: 24 }} src={backIcon} />
//           </a>
//         </NavLeft>
//         <NavTitle>市场价格</NavTitle>
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
//               {visable && (
//                 <Button
//                   onClick={() => {
//                     handleFullScreen.exit();
//                     setVisable(false);
//                   }}
//                   className={stylemodule.button2}
//                 >
//                   <img alt="" style={{ height: 24 }} src={Out} />
//                 </Button>
//               )}
//               <div
//                 style={{
//                   height: '10%',
//                   width: '100%',
//                   display: 'flex',
//                   justifyContent: 'space-between'
//                   // backgroundColor: 'red'
//                 }}
//               >
//                 {/* <div className={stylemodule.leftbackdivfirstovertext}>市场价格对比分析</div> */}
//                 <div className={stylemodule.leftbackdivsecondselecttext}>
//                   <div style={{ marginTop: '1.5rem' }}>
//                     <span style={{ marginRight: '2rem' }}>物料:</span>
//                   </div>
//                   <div style={{ marginRight: '2rem' }}>
//                     <select
//                       defaultValue={pricename != null && pricename[0]}
//                       className={stylemodule.leftbackdivsecondselectdiv}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     >
//                       {pricename != null &&
//                         pricename.map((value, index) => {
//                           return (
//                             <option value={value} key={index}>
//                               {value}
//                             </option>
//                           );
//                         })}
//                     </select>
//                   </div>
//                   <div
//                     style={{
//                       width: 'auto',
//                       height: 'auto',
//                       margin: '0',
//                       padding: '0',
//                       // marginRight: '2rem',
//                       marginTop: '2rem',
//                       cursor: 'pointer',
//                       opacity: '0.3'
//                     }}
//                     // className={`textButton ${buttonStyle == '年' ? 'textButton2' : ''}`}
//                     onClick={getProductPrice}
//                   >
//                     同步
//                     {/* <HIcon h-type="refresh" className={stylemodule.leftbackdivsecondselectdiv} /> */}
//                   </div>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   marginTop: '10rem',
//                   marginLeft: '8rem',
//                   height: '80%',
//                   width: '100%'
//                   // backgroundColor: 'red'
//                 }}
//               >
//                 <Leftthird LeftThird={leftThird} LeftThird2={leftThird2} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </FullScreen>
//     </Page>
//   );
// };

// export default Market;
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
// import Leftthird from '../Eacherts/Leftthird';
// import In from '../img/In.png';
// import Out from '../img/Out.png';
// import { FullScreen, useFullScreenHandle } from 'react-full-screen';
// import MinescreenApi from '~/api/Screen/Minescreen';
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
// // // import CardInfo from './CardInfo';
// // import { Skeleton, Empty } from '~/components';

// // import PrepareAreaServices from '~/api/PrepareArea';
// // import { PrepareAreaState } from '~/enum/enum';

// const Market = ({ f7router }) => {
//   const [pricename, setPricename] = useState(null);
//   const [leftThird, setLeftThird] = useState(null);
//   const [leftThird2, setLeftThird2] = useState(null);
//   const [visable, setVisable] = useState(false);
//   const handleFullScreen = useFullScreenHandle();
//   useEffect(() => {
//     MinescreenApi.getProductPriceName(moment(new Date(), 'YYYY').format('YYYY'))
//       .then(res => {
//         console.log(res, '>>>.');
//         // 找到 "黄磷" 的索引
//         const index = res.indexOf('黄磷');

//         // 如果 "黄磷" 在数组中存在，则将其删除并插入到数组的第一个位置
//         if (index !== -1) {
//           res.splice(index, 1); // 删除 "黄磷"
//           res.unshift('黄磷'); // 将 "黄磷" 插入到数组的第一个位置
//         }
//         setPricename(res);
//       })
//       .catch(err => {});
//     MinescreenApi.getSalesUnitPriceJc(moment(new Date(), 'YYYY').format('YYYY'), '黄磷')
//       .then(res => {
//         // console.log(res, '=======');
//         // setPricename(res);
//         setLeftThird2(res);
//       })
//       .catch(err => {});
//     MinescreenApi.getProductPrice(moment(new Date(), 'YYYY').format('YYYY'), '黄磷')
//       .then(res => {
//         console.log(res, '=======');
//         // setPricename(res);
//         setLeftThird(res);
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
//   const handleChange = event => {
//     MinescreenApi.getProductPrice(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
//       .then(res => {
//         // console.log(res, '===');
//         // setPricename(res);
//         setLeftThird(res);
//       })
//       .catch(err => {});

//     console.log(event.target.value);
//     MinescreenApi.getSalesUnitPriceJc(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
//       .then(res => {
//         // console.log(res, '=======');
//         if (res != null) {
//           setLeftThird2(res);
//         } else {
//           setLeftThird2([]);
//         }
//         // setPricename(res);
//       })
//       .catch(err => {});
//   };
//   const handleBlur = event => {
//     // console.log(event, '===');
//   };
//   const getProductPrice = () => {
//     console.log('同步');
//     MinescreenApi.getProductPriceHl()
//       .then(res => {})
//       .catch(err => {});
//     MinescreenApi.getProductPriceJc()
//       .then(res => {})
//       .catch(err => {});
//     MinescreenApi.getSalesUnitPriceJc2()
//       .then(res => {})
//       .catch(err => {});
//   };
//   return (
//     <Page pageContent={false}>
//       市场价格
//       <Navbar>
//         <NavLeft>
//           <a onClick={() => f7router.back()} className="ne-navleft">
//             <img alt="" style={{ height: 24 }} src={backIcon} />
//           </a>
//         </NavLeft>
//         <NavTitle>市场价格</NavTitle>
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
//               {visable && (
//                 <Button
//                   onClick={() => {
//                     handleFullScreen.exit();
//                     setVisable(false);
//                   }}
//                   className={stylemodule.button2}
//                 >
//                   <img alt="" style={{ height: 24 }} src={Out} />
//                 </Button>
//               )}
//               <div
//                 style={{
//                   height: '10%',
//                   width: '100%',
//                   display: 'flex',
//                   justifyContent: 'space-between'
//                   // backgroundColor: 'red'
//                 }}
//               >
//                 {/* <div className={stylemodule.leftbackdivfirstovertext}>市场价格对比分析</div> */}
//                 <div className={stylemodule.leftbackdivsecondselecttext}>
//                   <div style={{ marginTop: '1.5rem' }}>
//                     <span style={{ marginRight: '2rem' }}>物料:</span>
//                   </div>
//                   <div style={{ marginRight: '2rem' }}>
//                     <select
//                       defaultValue={pricename != null && pricename[0]}
//                       className={stylemodule.leftbackdivsecondselectdiv}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     >
//                       {pricename != null &&
//                         pricename.map((value, index) => {
//                           return (
//                             <option value={value} key={index}>
//                               {value}
//                             </option>
//                           );
//                         })}
//                     </select>
//                   </div>
//                   <div
//                     style={{
//                       width: 'auto',
//                       height: 'auto',
//                       margin: '0',
//                       padding: '0',
//                       // marginRight: '2rem',
//                       marginTop: '2rem',
//                       cursor: 'pointer',
//                       opacity: '0.3'
//                     }}
//                     // className={`textButton ${buttonStyle == '年' ? 'textButton2' : ''}`}
//                     onClick={getProductPrice}
//                   >
//                     同步
//                     {/* <HIcon h-type="refresh" className={stylemodule.leftbackdivsecondselectdiv} /> */}
//                   </div>
//                 </div>
//               </div>
//               <div
//                 style={{
//                   marginTop: '10rem',
//                   marginLeft: '8rem',
//                   height: '100rem'
//                   // backgroundColor: 'red'
//                 }}
//               >
//                 <Leftthird LeftThird={leftThird} LeftThird2={leftThird2} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </FullScreen>
//     </Page>
//   );
// };

// export default Market;

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
import Leftthird from '../Eacherts/Leftthird';
import In from '../img/In.png';
import Out from '../img/Out.png';
import Left from '../img/left.png';
import Right from '../img/right.png';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import MinescreenApi from '~/api/Screen/Minescreen';
import moment from 'moment';
import { useSwipeable } from 'react-swipeable';

// import { Sheet, f7 } from 'framework7-react';
// import styles from './style.scss';
// import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
// import { i18n } from '@hvisions/toolkit';
// import { onToast, createDialog } from '~/util/home';
// import useDebounce from '~/Hook/useDebounce';
// import RawMaterialWarehousingApi from '~/api/RawMaterialWarehousing';
// import EmptyPalletDeliveryApi from '~/api/EmptyPalletDelivery';
// import { isEmpty } from 'lodash';
// // import CardInfo from './CardInfo';
// import { Skeleton, Empty } from '~/components';

// import PrepareAreaServices from '~/api/PrepareArea';
// import { PrepareAreaState } from '~/enum/enum';

const Market = ({ f7router }) => {
  const [pricename, setPricename] = useState(null);
  const [leftThird, setLeftThird] = useState(null);
  const [leftThird2, setLeftThird2] = useState(null);
  const [visable, setVisable] = useState(false);
  const handleFullScreen = useFullScreenHandle();
  useEffect(() => {
    MinescreenApi.getProductPriceName(moment(new Date(), 'YYYY').format('YYYY'))
      .then(res => {
        console.log(res, '>>>.');
        // 找到 "黄磷" 的索引
        const index = res.indexOf('黄磷');

        // 如果 "黄磷" 在数组中存在，则将其删除并插入到数组的第一个位置
        if (index !== -1) {
          res.splice(index, 1); // 删除 "黄磷"
          res.unshift('黄磷'); // 将 "黄磷" 插入到数组的第一个位置
        }
        setPricename(res);
      })
      .catch(err => {});
    MinescreenApi.getSalesUnitPriceJc(moment(new Date(), 'YYYY').format('YYYY'), '黄磷')
      .then(res => {
        // console.log(res, '=======');
        // setPricename(res);
        setLeftThird2(res);
      })
      .catch(err => {});
    MinescreenApi.getProductPrice(moment(new Date(), 'YYYY').format('YYYY'), '黄磷')
      .then(res => {
        console.log(res, '=======');
        // setPricename(res);
        setLeftThird(res);
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
  // const handlers = useSwipeable({
  //   onSwipedLeft: () => handleBindingRight(),
  //   onSwipedRight: () => handleBindingLeft(),
  //   preventDefaultTouchmoveEvent: true,
  //   trackMouse: true // 如果你希望在桌面浏览器上模拟滑动手势，可以将其设置为true
  // });
  const handleBindingLeft = async () => {
    f7router.navigate('/grossprofit', {});
  };
  const handleBindingRight = async () => {
    f7router.navigate('/unitcost', {});
  };
  const handleChange = event => {
    MinescreenApi.getProductPrice(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
      .then(res => {
        // console.log(res, '===');
        // setPricename(res);
        setLeftThird(res);
      })
      .catch(err => {});

    console.log(event.target.value);
    MinescreenApi.getSalesUnitPriceJc(moment(new Date(), 'YYYY').format('YYYY'), event.target.value)
      .then(res => {
        // console.log(res, '=======');
        if (res != null) {
          setLeftThird2(res);
        } else {
          setLeftThird2([]);
        }
        // setPricename(res);
      })
      .catch(err => {});
  };
  const handleBlur = event => {
    // console.log(event, '===');
  };
  const getProductPrice = () => {
    console.log('同步');
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
    <Page pageContent={false}>
      市场价格
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.navigate('/')} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>市场价格</NavTitle>
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
            top: '47%',
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
            top: '47%',
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
              marginTop: '30rem'
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

            <div
              style={{
                height: '5%',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row-reverse'
                // backgroundColor: 'red'
              }}
            >
              {/* <div className={stylemodule.leftbackdivfirstovertext}>市场价格对比分析</div> */}
              <div className={stylemodule.leftbackdivsecondselecttext}>
                <div style={{ marginTop: '1.5rem' }}>
                  <span style={{ marginRight: '2rem' }}>物料:</span>
                </div>
                <div style={{ marginRight: '2rem', marginTop: '-2rem' }}>
                  <select
                    defaultValue={pricename != null && pricename[0]}
                    className={stylemodule.leftbackdivsecondselectdiv}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                  style={{
                    width: 'auto',
                    height: 'auto',
                    margin: '0',
                    padding: '0',
                    // marginRight: '2rem',
                    marginTop: '2rem',
                    cursor: 'pointer',
                    opacity: '0.3'
                  }}
                  onClick={getProductPrice}
                >
                  同步

                </div> */}
              </div>
            </div>
            <div
              style={{
                marginTop: '10rem',
                marginLeft: '8rem',
                height: '80%',
                width: '100%'
                // backgroundColor: 'red'
              }}
            >
              <Leftthird LeftThird={leftThird} LeftThird2={leftThird2} />
            </div>
          </div>
        </div>
      </FullScreen>
    </Page>
  );
};

export default Market;
