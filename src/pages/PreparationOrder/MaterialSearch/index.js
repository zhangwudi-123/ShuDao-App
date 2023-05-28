import React, { useEffect, useMemo, useState, useRef } from 'react';
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
  PageContent
} from '@hvisions/f-ui';
import moment from 'moment';
import materialService from '~/api/materialService';
import { session, tree } from '@hvisions/toolkit';
import { isEmpty, debounce } from 'lodash';
import styles from './style.scss';

import backIcon from '~/pages/WarehousinManage/img/backIcon.png';
const MaterialSearch = ({ f7router, moduleList, handleCreateSelect, ...props }) => {
  const [searchOptions, setSearchOptions] = useState([]);
  const [searchParams, setSearchParams] = useState({});
  const [allowInfinite, setAllowInfinite] = useState(true);
  const [showPreloader, setShowPreloader] = useState(false);
  const totalElements = useRef(0);
  const pageInfo = useRef({ page: 0, pageSize: 30 });
  const handleSearch = () => {
    const tempParams = { ...searchParams, ...pageInfo.current };
    materialService.getMaterialByNameOrCode(tempParams, null).then(res => {
      const data = res.content.map(i => ({
        text: `${i.materialCode} ${i.materialName} ${i.extend?.specification || ''}`,
        value: i.id
        // materialCode:i.materialCode,
      }));
      totalElements.current = res.totalElements;
      setSearchOptions(data);

      if (res.totalElements <= pageInfo.current.pageSize) {
        setAllowInfinite(false);
        return;
      } else {
        setAllowInfinite(true);
      }
    });

    setShowPreloader(false);
  };
  const debounceSetParams = debounce(value => {
    pageInfo.current = { page: 0, pageSize: 30 };
    setSearchOptions([]);
    setSearchParams(value);
  }, 300);
  const handleselect = item => {
    if (handleCreateSelect) {
      // f7router.navigate('/yw-preparation-order', {
      //   props: {
      //     createMaterial: item,
      //     createDate: props.createDate,
      //     selectedMaterial: props.selectedMaterial,
      //     date: props.date
      //   }
      // });
      handleCreateSelect(item);
    } else {
      f7router.navigate('/yw-preparation-order', {
        props: { selectedMaterial: item, date: props.date }
      });
    }
  };
  useEffect(() => {
    handleSearch();
  }, [searchParams]);
  const loadMore = async () => {
    if (!allowInfinite) return;
    setAllowInfinite(false);
    setShowPreloader(true);
    if (totalElements.current <= pageInfo.current.pageSize) {
      setShowPreloader(false);
      return;
    }
    pageInfo.current = { page: 0, pageSize: pageInfo.current.pageSize + 30 };
    await handleSearch();
  };

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          {handleCreateSelect == undefined && (
            <a
              onClick={() =>
                f7router.navigate('/yw-preparation-order', {
                  force: true,
                  props: {
                    date: props.date,
                    selectedMaterial: props.selectedMaterial
                  }
                })
              }
              className="ne-navleft"
            >
              <img alt="" style={{ height: 24 }} src={backIcon} />
            </a>
          )}
        </NavLeft>
        <NavTitle>请选择物料</NavTitle>
        <Subnavbar inner={false} className={styles.subnavbar} noHairline>
          <Searchbar
            className={styles.searchBar}
            placeholder="请输入关键词"
            disableButton={false}
            searchContainer=".search-list"
            clearButton={false}
            searchIn=".item-title"
            style={{ fontSize: 13 }}
            onChange={e => {
              debounceSetParams({ keyWord: e.target.value });
            }}
          ></Searchbar>
        </Subnavbar>
      </Navbar>
      <PageContent
        infinite
        infiniteDistance={50}
        infinitePreloader={showPreloader}
        onInfinite={loadMore}
        style={{ paddingTop: '88px' }}
      >
        <List>
          <ListItem
            title="全部类型"
            onClick={() => handleselect({ value: undefined, text: '全部类型' })}
          />
          {searchOptions.map((item, index) => {
            return <ListItem key={index} title={item.text} onClick={() => handleselect(item)} />;
          })}
        </List>
      </PageContent>
    </Page>
  );
};

export default MaterialSearch;
