import React, { useEffect, useMemo, useState } from 'react';
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
  NavTitle
} from '@hvisions/f-ui';
import { session, tree } from '@hvisions/toolkit';
import { isEmpty } from 'lodash';
import styles from './style.scss';
import { navigateTo } from '~/util/home';
import backIcon from '../img/backIcon.png';
const WarehousinManage = ({ f7router, moduleList, ...props }) => {
  const _moduleTree = tree.formatTree(moduleList);
  const flatTree = treeItem => {
    if (isEmpty(treeItem) || isEmpty(treeItem.children)) {
      return [treeItem];
    }
    if (treeItem.parentId == 0) {
      return [].concat(treeItem.children.map(i => flatTree(i)).flat(Infinity));
    }
    return [treeItem].concat(treeItem.children.map(i => flatTree(i)).flat(Infinity));
  };
  const renderSubMenus = submenu => {
    const submenuModules = flatTree(submenu);
    return (
      <Row>
        {submenuModules
          .concat(Array((4 - (submenuModules.length % 4)) % 4).fill({}))
          .map((module, index) => {
            if (isEmpty(module)) {
              return <Col width="25" key={index}></Col>;
            }
            return (
              <Col key={index} width="25">
                <div
                  className={styles.navigateCard}
                  key={index}
                  style={{ textAlign: 'center' }}
                  onClick={() => {
                    navigateTo(module.urlAddress);
                  }}
                >
                  <i
                    className={
                      module.icon
                        ? `app-icon-${module.icon} ${styles.iconContainer}`
                        : styles.iconContainer
                    }
                  />
                  <div className={styles.cardFullName}>{module.fullName}</div>
                </div>
              </Col>
            );
          })}
      </Row>
    );
  };
  const moduleWareHouse = _moduleTree.find(i => i.urlAddress == '/wareManage') || {};
  return (
    <Page>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back('/', { force: true })} className="ne-navleft">
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>仓储管理</NavTitle>
      </Navbar>
      <div className={styles.navigate}>
        <BlockTitle>全部功能</BlockTitle>
        {isEmpty(moduleList) && (
          <Block strong inset className="skeleton-text skeleton-effect-blink">
            <Row>
              {Array(4)
                .fill({})
                .map((_, index) => {
                  return (
                    <Col width="25" key={index}>
                      <div className={styles.navigateCard}>
                        <SkeletonBlock style={{ width: '30px', height: '30px' }} slot="media" />
                        <div className="skeleton-text">aaaaaaa</div>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          </Block>
        )}
        {!isEmpty(moduleList) && (
          <Block strong inset>
            {renderSubMenus(moduleWareHouse)}
          </Block>
        )}
      </div>
    </Page>
  );
};

export default WarehousinManage;
