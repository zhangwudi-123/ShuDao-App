// import React, { useEffect, useMemo, useRef, useState } from 'react';
// import { Toolbar, Link, Tabs, Tab, Block, SkeletonBlock, Page, Navbar, NavLeft, NavTitle, ListInput, List, Subnavbar, Searchbar, ListItem, PageContent, Button, Sheet, Popup, Input } from '@hvisions/f-ui';
// import styles from './style.scss';
// import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
// import { i18n, page } from '@hvisions/toolkit';
// import { onToast, createDialog } from '~/util/home';

// const getFormattedMsg = i18n.getFormattedMsg;

// const RawMaterialWarehousing = ({ f7router, moduleList, ...props }) => {
//   const [tabKey, setTabKey] = useState(0);
//   const [state, setState] = useState({
//     1: '执行中',
//     2: '已完成',
//     0: '全部'
//   });

//   const handleAutomatic = ()=>{
//     createDialog(
//       '确认自动下架托盘?',
//       '',
//       function() {
//         try {
//           onToast('自动下架成功', styles.toastError);
//           // console.log('11111111111111');
//         } catch (error) {
//           console.log('error',error);
//           onToast('自动下架失败', styles.toastError);
//         }
//       }
//     );
//   }

//   const handleManual = ()=>{
//   }

//   const handleBinding = ()=>{
//   }

//   const handleWeighing = ()=>{
//   }

//   const handleWarehousing = ()=>{
//   }
//   return (
//     <Page pageContent={false}>
//       <Navbar>
//         <NavLeft>
//           <a onClick={() => f7router.back()} className="ne-navleft">
//             <img alt="" style={{ height: 24 }} src={backIcon} />
//           </a>
//         </NavLeft>
//         <NavTitle>备料单</NavTitle>
//       </Navbar>
//       <Toolbar tabbar top noHairline className="ne-top-tab">
//         <Link tabLink="#tab-1" onClick={() => setTabKey(0)} tabLinkActive>
//           全部
//         </Link>
//         <Link tabLink="#tab-2" onClick={() => setTabKey(1)}>
//           执行中
//         </Link>
//         <Link tabLink="#tab-3" onClick={() => setTabKey(2)}>
//           已完成
//         </Link>
//       </Toolbar>
//       <PageContent
//         infinite
//         infiniteDistance={50}
//         // infinitePreloader={showPreloader}
//         // onInfinite={loadMore}
//         // ptrPreloader={ptrPreloader}
//         // ptr
//         // onPtrRefresh={onHandleRefresh}
//         // onPtrPullStart={() => {
//         //   setPtrPreloader(true);
//         // }}
//       >
//         <div style={{ padding: '0 16px' }} className={styles.tabContainer}>
//           <Tabs animated>
//             <Tab
//               id="tab-1"
//               className={`${styles.content} page-content`}
//               style={{ paddingTop: '0' }}
//               tabActive
//             >
//               {/* {renderCardList()} */}
//             </Tab>
//             <Tab
//               id="tab-2"
//               className={`${styles.content} page-content`}
//               style={{ paddingTop: '0' }}
//             >
//               {/* {renderCardList()} */}
//             </Tab>
//             <Tab
//               id="tab-3"
//               className={`${styles.content} page-content`}
//               style={{ paddingTop: '0' }}
//             >
//               {/* {renderCardList()} */}
//             </Tab>
//           </Tabs>
//         </div>
//       </PageContent>
//       <div className={styles['detail-bottom']}>
//         {tabKey == 0 && <Button className={styles['bottom-btn-confirm']}  onClick={() => handleAutomatic()} >
//           {getFormattedMsg('RawMaterialWarehousing.button.automatic')}
//         </Button>}
//         {tabKey == 0 && <Button className={styles['bottom-btn-confirm']}  onClick={() => handleManual()} >
//           {getFormattedMsg('RawMaterialWarehousing.button.manual')}
//         </Button>}
//         {tabKey == 0 && <Button className={styles['bottom-btn-confirm']}  onClick={() => handleBinding()}>
//           {getFormattedMsg('RawMaterialWarehousing.button.binding')}
//         </Button>}
//         {tabKey == 1 && <Button className={styles['bottom-btn-one']}  onClick={() => handleWeighing()} >
//           {getFormattedMsg('RawMaterialWarehousing.button.weighing')}
//         </Button>}
//         {tabKey == 2 && <Button className={styles['bottom-btn-one']}  onClick={() => handleWarehousing()} >
//           {getFormattedMsg('RawMaterialWarehousing.button.warehousing')}
//         </Button>}
//       </div>
//     </Page>
//   );
// };

// export default RawMaterialWarehousing;
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Row,
  Col,
  Icon,
  BlockTitle,
  Block,
  SkeletonBlock,
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  ListInput,
  List,
  Subnavbar,
  Searchbar,
  ListItem,
  PageContent,
  Button,
  Sheet,
  Popup,
  Input
} from '@hvisions/f-ui';
import moment from 'moment';
import { session, tree } from '@hvisions/toolkit';
import materialService from '~/api/materialService';
import PutMaterialService from '~/api/yw_putMaterial';
import { isEmpty, debounce } from 'lodash';
import { onToast, createDialog } from '~/util/home';
import CardInfo from './cardInfo';
import MaterialSearch from './MaterialSearch/index';
import styles from './style.scss';

import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
const PreparationOrder = ({ f7router, moduleList, ...props }) => {
  const [allowInfinite, setAllowInfinite] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState({ value: undefined, text: '全部类型' });
  const [date, setDate] = useState([]);
  const [orderlist, setOrderlist] = useState([]);
  const totalElements = useRef(0);
  const pageInfo = useRef({ page: 0, pageSize: 10 });
  const [ptrPreloader, setPtrPreloader] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);
  const [createSheetOpen, setCreateSheetOpen] = useState(false);
  const [createMaterial, setCreateMaterial] = useState({});
  const [createBatch, setCreateBatch] = useState('');
  const [createNum, setCreateNum] = useState(0);
  const [materialPopup, setMaterialPopup] = useState(false);
  useEffect(() => {
    const searchValue = {};

    if (props?.selectedMaterial?.value !== undefined) {
      setSelectedMaterial(props.selectedMaterial);
      searchValue.materialId = props.selectedMaterial.value;
    }
    if (props?.date && props?.date[0]) {
      setDate(props?.date);
      searchValue.date = moment(props?.date[0]).format('YYYY-MM-DD');
    }

    loadListData(0, 10, { ...searchValue });
  }, []);

  const loadListData = (page = 0, pageSize = 10, searchValue = {}) => {
    f7router.app.preloader.show();
    PutMaterialService.getPutMaterial({ page, pageSize, ...searchValue })
      .then(res => {
        setOrderlist(res.content);
        totalElements.current = res.totalElements;
        if (pageSize > res.totalElements) {
          setShowPreloader(false);
          setAllowInfinite(false);
        } else {
          setShowPreloader(true);
          setAllowInfinite(true);
        }
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      })
      .finally(() => {
        f7router.app.preloader.hide();
        setPtrPreloader(false);
      });
  };

  const onHandleDelete = async record => {
    const id = record.id;
    console.log('id', id);
    await PutMaterialService.deleteSaleLine(id)
      .then(res => {
        const searchValue = {};

        if (selectedMaterial?.value !== undefined) {
          searchValue.materialId = selectedMaterial.value;
        }
        if (date[0]) {
          searchValue.date = moment(date[0]).format('YYYY-MM-DD');
        }
        loadListData(pageInfo.current.page, pageInfo.current.pageSize, { ...searchValue });
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      });
  };
  const handleRefresh = async done => {
    setOrderlist([]);
    const searchValue = {};
    if (selectedMaterial?.value !== undefined) {
      searchValue.materialId = selectedMaterial.value;
    }
    if (date[0]) {
      searchValue.date = moment(date[0]).format('YYYY-MM-DD');
    }
    pageInfo.current = { page: 0, pageSize: 10 };
    await loadListData(0, 10, { ...searchValue });
    await done();
  };

  const loadMore = async () => {
    if (!allowInfinite) return;
    setShowPreloader(true);
    if (pageInfo.current.pageSize >= totalElements.current) {
      setShowPreloader(false);
      setAllowInfinite(false);
      return;
    }
    const newPageSize = pageInfo.current.pageSize + 10;
    pageInfo.current = { page: 0, pageSize: newPageSize };
    const searchValue = {};
    if (selectedMaterial?.value !== undefined) {
      searchValue.materialId = selectedMaterial.value;
    }
    if (date[0]) {
      searchValue.date = moment(date[0]).format('YYYY-MM-DD');
    }
    await loadListData(0, newPageSize, { ...searchValue });
  };
  const handleCreateOrder = () => {};
  const handleSelectMaterial = () => {
    setCreateSheetOpen(false);
    setMaterialPopup(true);
  };
  const handleCreateSelect = item => {
    setCreateMaterial(item);
    setMaterialPopup(false);
    setCreateSheetOpen(true);
  };
  const handleSave = () => {
    if (!createMaterial.value) {
      onToast('请选择物料', styles.toastError);
      return;
    }
    if (!createBatch) {
      onToast('请选择物料批次', styles.toastError);
      return;
    }
    if (!createNum) {
      onToast('请输入数量', styles.toastError);
      return;
    }
    f7router.app.preloader.show();

    PutMaterialService.createPutMaterial({
      materialId: createMaterial.value,
      materialBatch: createBatch,
      quantity: createNum,
      useNum: 0
    })
      .then(res => {
        onToast('新增成功', styles.toastSuccess);
        setCreateMaterial({});
        setCreateBatch('');
        setCreateNum(0);
      })
      .catch(err => {
        onToast(err.message, styles.toastError);
      })
      .finally(() => {
        f7router.app.preloader.hide();
      });
  };
  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back('/zzxt', { force: true })} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>备料单</NavTitle>
      </Navbar>
      <PageContent
        infinite
        infiniteDistance={50}
        infinitePreloader={showPreloader}
        onInfinite={loadMore}
        ptrPreloader={ptrPreloader}
        ptr
        onPtrRefresh={handleRefresh}
        onPtrPullStart={() => {
          setPtrPreloader(true);
        }}
      >
        <div>
          <List className={styles.searchDate}>
            <ListItem
              title="物料"
              placeholder="请选择物料"
              link="#"
              onClick={() => {
                f7router.navigate('/yw-material-search', { props: { date, selectedMaterial } });
              }}
              after={selectedMaterial.text}
            ></ListItem>
            <ListInput
              placeholder="请选择投料时间"
              type="datepicker"
              clearButton={true}
              calendarParams={{
                monthNames: [
                  '一月',
                  '二月',
                  '三月',
                  '四月',
                  '五月',
                  '六月',
                  '七月',
                  '八月',
                  '九月',
                  '十月',
                  '十一月',
                  '十二月'
                ],
                dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                on: {
                  calendarClose: e => {
                    setDate(e.value);
                    const searchValue = {};

                    if (selectedMaterial?.value !== undefined) {
                      searchValue.materialId = selectedMaterial.value;
                    }
                    if (e.value[0]) {
                      searchValue.date = moment(e.value[0]).format('YYYY-MM-DD');
                    }
                    pageInfo.current = { page: 0, pageSize: 10 };
                    loadListData(0, 10, { ...searchValue });
                  }
                }
              }}
              value={date}
              onInputClear={() => {
                setDate([]);
                const searchValue = {};
                if (selectedMaterial?.value !== undefined) {
                  searchValue.materialId = selectedMaterial.value;
                }
                pageInfo.current = { page: 0, pageSize: 10 };
                loadListData(0, 10, { ...searchValue });
              }}
            ></ListInput>
          </List>
        </div>
        {orderlist.map((item, index) => (
          <CardInfo key={index} item={item} f7router={f7router} onHandleDelete={onHandleDelete} />
        ))}
      </PageContent>
      <Sheet
        className={styles['demo-sheet']}
        opened={createSheetOpen}
        onSheetClosed={() => {
          setCreateSheetOpen(false);
        }}
        backdrop
      >
        <div>
          <div className={styles['sheet-top']}>
            <div
              className={styles['sheet-top-close']}
              onClick={() => {
                setCreateSheetOpen(false);
              }}
            >
              X
            </div>
            <div className={styles['sheet-top-title']}>新增备料单</div>
          </div>
          <div className={styles['sheet-content']}>
            <span>物料</span>
            <Input
              onFocus={e => {
                handleSelectMaterial();
              }}
              readOnly
              className={styles['input-style']}
              type="text"
              value={createMaterial.text || ''}
            />
          </div>
          <div className={styles['sheet-content']}>
            <span>物料批次</span>
            <Input
              className={styles['input-style']}
              type="text"
              value={createBatch}
              onChange={e => {
                setCreateBatch(e.target.value);
              }}
            />
          </div>
          <div className={styles['sheet-content']}>
            <span>投料数量</span>
            <Input
              className={styles['input-style']}
              type="text"
              value={createNum}
              onChange={e => {
                setCreateNum(e.target.value);
              }}
            />
          </div>
          <div className={styles['btn-box']}>
            <Button className={styles['confirm-btn']} onClick={handleSave}>
              保存
            </Button>
          </div>
        </div>
      </Sheet>
      <Popup
        opened={materialPopup}
        // swipeToClose
        onPopupClosed={() => {
          setMaterialPopup(false);
        }}
      >
        <MaterialSearch handleCreateSelect={handleCreateSelect}> </MaterialSearch>
      </Popup>
      <div className="ne-bottom-container">
        <Button
          className="ne-bottom-btn"
          onClick={() => {
            setCreateSheetOpen(true);
          }}
        >
          新增
        </Button>
      </div>
    </Page>
  );
};

export default PreparationOrder;
