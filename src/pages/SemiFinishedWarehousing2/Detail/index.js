import React, { useEffect, useRef, useState } from 'react';
import { Page, Navbar, NavLeft, NavTitle, Block, List, PageContent,ListItem } from '@hvisions/f-ui';
import styles from './style.scss';
import backIcon from '~/pages/WarehousinManage/img/backIcon.png';

const SemiFinishedWarehousingDetail1 = ({ f7router ,item }) => {
  const [showPreloader, setShowPreloader] = useState(false);
  const [ptrPreloader, setPtrPreloader] = useState(false);


  useEffect(() => {

  }, []);

  // const handleGoBack = () => {
  //   f7router.navigate('/', {
  //     transition: 'ne-backward',
  //   });
  // };

  return (
    <Page pageContent={false}>
      <Navbar>
        <NavLeft>
          <a onClick={() => f7router.back()} className="ne-navleft">
            {/* <a onClick={() => handleGoBack()} className="ne-navleft"> */}
            <img alt="" style={{ height: 24 }} src={backIcon} />
          </a>
        </NavLeft>
        <NavTitle>订单详情</NavTitle>
      </Navbar>
      <PageContent
        infinite
        infiniteDistance={50}
        infinitePreloader={showPreloader}
        ptrPreloader={ptrPreloader}
      >
        <div style={{ padding: '0 16px' }} className={styles.tabContainer}>
          <List strong outlineIos dividersIos insetMd accordionList accordionOpposite style={{ padding: '0 16px' }}>
          <ListItem accordionItem title='收料单号'>
              <Block>
                <p style={{paddingLeft:20,fontSize:25,fontWeight:500}}>
                  {item.receiptNumber}
                </p>
              </Block>
            </ListItem>
            <ListItem accordionItem title='创建时间'>
              <Block>
                <p style={{paddingLeft:20,fontSize:25,fontWeight:500}}>
                  {item.createTime}
                </p>
              </Block>
            </ListItem>
            <ListItem accordionItem title='创建人'>
              <Block>
                <p style={{paddingLeft:20,fontSize:25,fontWeight:500}}>
                  {item.creator}
                </p>
              </Block>
            </ListItem>
            <ListItem accordionItem title='托盘号'>
              <Block>
                <p style={{paddingLeft:20,fontSize:25,fontWeight:500}}>
                  {item.trayNumber}
                </p>
              </Block>
            </ListItem>
            <ListItem accordionItem title='属性1'>
              <Block>
                <p style={{paddingLeft:20,fontSize:25,fontWeight:500}}>
                  {item.attributeOne}
                </p>
              </Block>
            </ListItem>
            <ListItem accordionItem title='属性2'>
              <Block>
                <p style={{paddingLeft:20,fontSize:25,fontWeight:500}}>
                  {item.attributeTwo}
                </p>
              </Block>
            </ListItem>
            <ListItem accordionItem title='主订单号'>
              <Block>
                <p style={{paddingLeft:20,fontSize:25,fontWeight:500}}>
                  {item.orderNumber}
                </p>
              </Block>
            </ListItem>
            <ListItem accordionItem title='子订单号'>
              <Block>
                <p style={{paddingLeft:20,fontSize:25,fontWeight:500}}>
                  {item.suborderNumber}
                </p>
              </Block>
            </ListItem>
            <ListItem accordionItem title='接驳点'>
              <Block>
                <p style={{paddingLeft:20,fontSize:25,fontWeight:500}}>
                  {item.dockingPoint}
                </p>
              </Block>
            </ListItem>
            <ListItem accordionItem title='分拣位置'>
              <Block>
                <p style={{paddingLeft:20,fontSize:25,fontWeight:500}}>
                  {item.sortPosition}
                </p>
              </Block>
            </ListItem>
          </List>
        </div>
      </PageContent>
    </Page>
  );
};

export default SemiFinishedWarehousingDetail1;