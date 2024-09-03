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
  Button,
  ListItem,
  Card
} from '@hvisions/f-ui';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
import { useResizeDetector } from 'react-resize-detector';
import stylemodule from './style.module.scss';
import Leftthird from '../../../Eacherts/Leftthird';
// import In from '../img/In.png';
// import Out from '../img/Out.png';
// import Left from '../img/left.png';
// import Right from '../img/right.png';
import styles from './style.scss';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import MinescreenApi from '~/api/Minescreen';
import warehouseScreenService from '~/api/warehouseScreen';
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

const Market = ({ high, wide }) => {
  const [pricename, setPricename] = useState(null);
  const [leftThird, setLeftThird] = useState(null);
  const [leftThird2, setLeftThird2] = useState(null);
  const [showPreloader, setShowPreloader] = useState(false);
  const [ptrPreloader, setPtrPreloader] = useState(false);
  const [visable, setVisable] = useState(false);
  const [middledata, setMiddledata] = useState({});
  const handleFullScreen = useFullScreenHandle();
  const [dryProcess, setDryProcess] = useState([]);
  const [dissolving, setDissolving] = useState([]);
  const [extraction, setExtraction] = useState([]);
  const [finished, setFinished] = useState([]);
  const [warehouse, setWarehouse] = useState([]);
  const [tankArea, setTankArea] = useState([]);
  const [raw, setRaw] = useState([]);
  // useEffect(() => {
  //   warehouseScreenService
  //     .getMiddleValue()
  //     .then(res => {
  //       if (res.middlePlc != null) {
  //         setMiddledata(res.middlePlc);
  //       }
  //       // console.log(res.middlePlc);
  //     })
  //     .catch(err => {
  //       // notification.warning({
  //       //   description: err.message
  //       // });
  //     });
  // }, []);
  useEffect(() => {
    MinescreenApi.otherData()
      .then(res => {
        // setRevenue(res.revenue != null ? (Number(res.revenue)/10000).toFixed(2) : null)
        // setProfit(res.profit != null ? (Number(res.profit)/10000).toFixed(2) : null)
        // setCost(res.cost != null ? (Number(res.cost)/1000).toFixed(2) : null)
        setDryProcess(res.dryProcess);
        setDissolving(res.dissolving);
        setExtraction(res.extraction);
        setFinished(res.finished);
        setWarehouse(res.warehouse);
        setTankArea(res.tankArea);
        setRaw(res.raw);
        console.log(res.raw);
      })
      .catch(err => {
        // notification.warning({
        //   description: err.message
        // });
      });
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
  // const handleBindingLeft = async () => {
  //   f7router.navigate('/grossprofit', {});
  // };
  // const handleBindingRight = async () => {
  //   f7router.navigate('/unitcost', {});
  // };
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
  const loadMore = async () => {
    // if (!allowInfinite) return;
    // setShowPreloader(true);
    // if (countRef.current >= total) {
    //   setShowPreloader(false);
    //   return;
    // }
    // setAllowInfinite(false);
    // countRef.current = countRef.current + 10;
    // await loadData(selectValue);
    // await setAllowInfinite(true);
  };
  const data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    }
  ];

  const onHandleRefresh = async done => {
    await setPtrPreloader(true);
    // await loadData(selectValue);
    await setPtrPreloader(false);
    await done();
  };
  const renderCardList = () => {};
  // !loading ? (
  //   !isEmpty(list) ? (
  //     list.map(value => (
  //       <CardInfo
  //         f7router={f7router}
  //         key={value.id}
  //         item={value}
  //         HandlePutOn={HandlePutOn}
  //         tableName={tableName}
  //         bendingNumber={bendingNumber}
  //       />
  //     ))
  //   ) : (
  //     <Empty />
  //   )
  // ) : (
  //   <Skeleton />
  // );
  return (
    // <Page pageContent={false}>
    //   温度显示
    //   <Navbar>
    //     <NavLeft>
    //       <a onClick={() => f7router.navigate('/')} className="ne-navleft">
    //         <img alt="" style={{ height: 24 }} src={backIcon} />
    //       </a>
    //     </NavLeft>
    //     <NavTitle>温度显示</NavTitle>
    //     <NavRight>
    //       {!visable && (
    //         <Button
    //           icon="fullscreen"
    //           onClick={() => {
    //             handleFullScreen.enter();
    //             setVisable(true);
    //           }}
    //           className={stylemodule.button}
    //         >
    //           <img alt="" style={{ height: 24 }} src={In} />
    //         </Button>
    //       )}
    //     </NavRight>
    //   </Navbar>
    //   <FullScreen className={stylemodule.fullScreenContainer} handle={handleFullScreen}>
    //     <div
    //       style={{
    //         position: 'absolute',
    //         width: '8rem',
    //         height: '8rem',
    //         top: '47%',
    //         left: '80%',
    //         marginLeft: '8rem',
    //         marginTop: '4rem',
    //         zIndex: '50'
    //         // backgroundColor: 'red'
    //       }}
    //       onClick={handleBindingRight}
    //     >
    //       <img alt="" style={{ height: '100%' }} src={Right} />
    //     </div>
    //     <div
    //       style={{
    //         position: 'absolute',
    //         width: '8rem',
    //         height: '8rem',
    //         top: '47%',
    //         // left: '80%',
    //         marginLeft: '8rem',
    //         marginTop: '4rem',
    //         zIndex: '50'
    //         // backgroundColor: 'red'
    //       }}
    //       onClick={handleBindingLeft}
    //     >
    //       <img alt="" style={{ height: '100%' }} src={Left} />
    //     </div>
    //     <div ref={rightPanelRef} className={stylemodule.backdiv}>
    //       <div
    //         style={{
    //           width: '100%',
    //           height: '100%',
    //           display: 'flex',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           flexDirection: 'column',
    //           marginTop: '30rem'
    //         }}
    //       >
    //         {visable && (
    //           <Button
    //             onClick={() => {
    //               handleFullScreen.exit();
    //               setVisable(false);
    //             }}
    //             className={stylemodule.button2}
    //           >
    //             <img alt="" style={{ height: 24 }} src={Out} />
    //           </Button>
    //         )}
    //         <BlockTitle>Simple List</BlockTitle>
    //         {/* <List
    //           // grid={{ gutter: 16, column: 4 }}
    //           // dataSource={data}
    //           renderItem={item => (
    //             <List.Item>
    //               <Card title={item.title}>Card content</Card>
    //             </List.Item>
    //           )}
    //         /> */}

    //         <List>
    //           {/* <ListItem title="Ivan Petrov" after="CEO">
    //             <Icon slot="media" icon="demo-list-icon"></Icon>
    //           </ListItem>
    //           <ListItem title="John Doe" badge="5">
    //             <Icon slot="media" icon="demo-list-icon"></Icon>
    //           </ListItem>
    //           <ListItem title="Jenna Smith">
    //             <Icon slot="media" icon="demo-list-icon"></Icon>
    //           </ListItem> */}
    //           <Card title="1#炉壁温度">
    //             {' '}
    //             {Object.keys(middledata).length > 0 && middledata.firstwall}°C
    //           </Card>
    //           <Card
    //             title="气柜高度"
    //             content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
    //           ></Card>
    //           <Card
    //             title="2#炉壁温度"
    //             content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
    //           ></Card>
    //           <Card
    //             title="1#2#配比"
    //             content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
    //           ></Card>
    //           <Card
    //             title="3#4#配比"
    //             content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
    //           ></Card>
    //           <Card
    //             title="3#炉壁温度"
    //             content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
    //           ></Card>
    //           <Card
    //             title="4#炉壁温度"
    //             content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
    //           ></Card>
    //           <Card
    //             title="1#炉底温度"
    //             content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
    //           ></Card>
    //           <Card
    //             title="2#炉底温度"
    //             content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
    //           ></Card>
    //           <Card
    //             title="3#炉底温度"
    //             content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
    //           ></Card>
    //           <Card
    //             title="4#炉底温度"
    //             content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
    //           ></Card>
    //         </List>
    //       </div>
    //     </div>
    //   </FullScreen>
    // </Page>
    // <Page pageContent={false}>
    //   库存管理
    //   {/* <div
    //     style={{
    //       position: 'absolute',
    //       width: '8rem',
    //       height: '8rem',
    //       top: '47%',
    //       left: '84%',
    //       marginLeft: '8rem',
    //       marginTop: '4rem',
    //       zIndex: '50'
    //       // backgroundColor: 'red'
    //     }}
    //     onClick={handleBindingRight}
    //   >
    //     <img alt="" style={{ height: '100%' }} src={Right} />
    //   </div>
    //   <div
    //     style={{
    //       position: 'absolute',
    //       width: '8rem',
    //       height: '8rem',
    //       top: '47%',
    //       left: '-6%',
    //       // left: '80%',
    //       marginLeft: '8rem',
    //       marginTop: '4rem',
    //       zIndex: '50'
    //       // backgroundColor: 'red'
    //     }}
    //     onClick={handleBindingLeft}
    //   >
    //     <img alt="" style={{ height: '100%' }} src={Left} />
    //   </div> */}
    //   <div className={styles.backdiv}>
    //     <PageContent
    //       infinite
    //       infiniteDistance={50}
    //       infinitePreloader={showPreloader}
    //       // onInfinite={loadMore}
    //       ptrPreloader={ptrPreloader}
    //       ptr
    //       // onPtrRefresh={onHandleRefresh}
    //       onPtrPullStart={() => {
    //         setPtrPreloader(true);
    //       }}
    //     >
    //       <div style={{ padding: '0 16px' }} className={styles.tabContainer}>
    //         <div className={`${styles.content} page-content`} style={{ paddingTop: '0' }}>
    //           <Card
    //             title="罐区库存"
    //             className={stylemodule.card}
    //             // content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
    //           >
    //             {tankArea.map((item, index) => {
    //               return (
    //                 <div
    //                   key={index}
    //                   style={{
    //                     display: 'flex',
    //                     justifyContent: 'center',
    //                     marginTop: '0.5rem'
    //                   }}
    //                   className={stylemodule.overdivlist}
    //                 >
    //                   <span style={{ color: 'black', fontSize: '3rem' }}>{item.materialName}</span>
    //                   <span style={{ color: 'black', fontSize: '3rem', marginLeft: '3rem' }}>
    //                     {item.number + 't'}
    //                   </span>
    //                 </div>
    //               );
    //             })}
    //           </Card>
    //           <Card title="原料库存" className={stylemodule.card}>
    //             {raw.map((item, index) => {
    //               return (
    //                 <div
    //                   key={index}
    //                   style={{
    //                     display: 'flex',
    //                     justifyContent: 'center',
    //                     marginTop: '1.5rem'
    //                   }}
    //                   className={stylemodule.overdivlist}
    //                 >
    //                   <span style={{ color: 'black', fontSize: '3rem' }}>{item.materialName}</span>
    //                   <span style={{ color: 'black', fontSize: '3rem', marginLeft: '3rem' }}>
    //                     {item.number + 't'}
    //                   </span>
    //                 </div>
    //               );
    //             })}
    //           </Card>

    //           <Card
    //             title="产品库存"
    //             className={stylemodule.card}
    //             // content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
    //           >
    //             {warehouse.map((item, index) => {
    //               return (
    //                 <div
    //                   key={index}
    //                   style={{
    //                     display: 'flex',
    //                     justifyContent: 'center',
    //                     marginTop: '1.5rem'
    //                   }}
    //                   className={stylemodule.overdivlist}
    //                 >
    //                   <span style={{ color: 'black', fontSize: '3rem' }}>{item.materialName}</span>
    //                   {/* <span style={{ color: '#FFFFFF', fontSize: '3rem' }}>{item.number}</span> */}
    //                   <span style={{ color: 'black', fontSize: '3rem', marginLeft: '3rem' }}>
    //                     {item.number != null ? (Number(item.number) / 1000).toFixed(2) + 't' : null}
    //                   </span>
    //                 </div>
    //               );
    //             })}
    //           </Card>
    //           <Card
    //             title="电池包库"
    //             className={stylemodule.card}
    //             //content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
    //           ></Card>
    //         </div>
    //       </div>
    //     </PageContent>
    //   </div>
    // </Page>
    <Page pageContent={false}>
      {/* <div
          style={{
            position: 'absolute',
            width: '8rem',
            height: '8rem',
            top: '47%',
            left: '84%',
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
            left: '-6%',
            // left: '80%',
            marginLeft: '8rem',
            marginTop: '4rem',
            zIndex: '50'
            // backgroundColor: 'red'
          }}
          onClick={handleBindingLeft}
        >
          <img alt="" style={{ height: '100%' }} src={Left} />
        </div> */}
      {/* <PageContent
        infinite
        infiniteDistance={50}
        infinitePreloader={showPreloader}
        // onInfinite={loadMore}
        ptrPreloader={ptrPreloader}
        ptr
        // onPtrRefresh={onHandleRefresh}
        onPtrPullStart={() => {
          setPtrPreloader(true);
        }}
        style={{ marginTop: `-${high * 0.1}px `, height: high * 1.3 }}
      > */}
      <div style={{ padding: '0 16px' }} className={styles.tabContainer}>
        <div
          className={`${styles.content} page-content`}
          style={{ paddingTop: '0', position: 'absolute', top: '0', left: '0', right: '0' }}
        >
          <Card
            title="罐区库存"
            className={stylemodule.card}
            // content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
          >
            {tankArea.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '0.5rem'
                  }}
                  className={stylemodule.overdivlist}
                >
                  <span style={{ color: 'black', fontSize: '1rem' }}>{item.materialName}</span>
                  <span style={{ color: 'black', fontSize: '1rem', marginLeft: '3rem' }}>
                    {item.number + 't'}
                  </span>
                </div>
              );
            })}
          </Card>
          <Card title="原料库存" className={stylemodule.card}>
            {raw.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '1.5rem'
                  }}
                  className={stylemodule.overdivlist}
                >
                  <span style={{ color: 'black', fontSize: '1rem' }}>{item.materialName}</span>
                  <span style={{ color: 'black', fontSize: '1rem', marginLeft: '3rem' }}>
                    {item.number + 't'}
                  </span>
                </div>
              );
            })}
          </Card>

          <Card
            title="产品库存"
            className={stylemodule.card}
            // content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
          >
            {warehouse.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '1.5rem'
                  }}
                  className={stylemodule.overdivlist}
                >
                  <span style={{ color: 'black', fontSize: '1rem' }}>{item.materialName}</span>
                  {/* <span style={{ color: '#FFFFFF', fontSize: '3rem' }}>{item.number}</span> */}
                  <span style={{ color: 'black', fontSize: '1rem', marginLeft: '3rem' }}>
                    {item.number != null ? (Number(item.number) / 1000).toFixed(2) + 't' : null}
                  </span>
                </div>
              );
            })}
          </Card>
          <Card
            title="电池包库"
            className={stylemodule.card}
            //content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
          ></Card>
        </div>
      </div>
      {/* </PageContent> */}
    </Page>
  );
};

export default Market;
